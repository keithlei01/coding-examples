function validateCoupon(cart, coupon) {
  if (!coupon || typeof coupon.type !== "string") {
    return { valid: false, discountCents: 0, reason: "unknown_coupon_type" };
  }

  if (!cart?.items?.length) {
    return { valid: false, discountCents: 0, reason: "empty_cart" };
  }

  const subtotal = cart.subtotalCents ?? sumLineItems(cart.items);
  if (subtotal <= 0) {
    return { valid: false, discountCents: 0, reason: "invalid_subtotal" };
  }

  if (coupon.minSubtotalCents != null && subtotal < coupon.minSubtotalCents) {
    return { valid: false, discountCents: 0, reason: "below_minimum" };
  }

  let discount = 0;

  switch (coupon.type) {
    case "PERCENT": {
      if (!isValidPercent(coupon.percentOff)) {
        return { valid: false, discountCents: 0, reason: "invalid_percent" };
      }
      discount = Math.floor((subtotal * coupon.percentOff) / 100);
      if (coupon.maxDiscountCents != null) {
        discount = Math.min(discount, coupon.maxDiscountCents);
      }
      break;
    }
    case "FIXED": {
      if (coupon.amountCents <= 0) {
        return { valid: false, discountCents: 0, reason: "invalid_fixed_amount" };
      }
      discount = Math.min(coupon.amountCents, subtotal);
      break;
    }
    case "SKU": {
      if (!isValidPercent(coupon.percentOff) || !coupon.sku) {
        return { valid: false, discountCents: 0, reason: "invalid_sku_coupon" };
      }
      const eligible = cart.items
        .filter((i) => i.sku === coupon.sku)
        .reduce((s, i) => s + i.priceCents * i.qty, 0);
      if (eligible === 0) {
        return { valid: false, discountCents: 0, reason: "sku_not_in_cart" };
      }
      discount = Math.floor((eligible * coupon.percentOff) / 100);
      break;
    }
    default:
      return { valid: false, discountCents: 0, reason: "unknown_coupon_type" };
  }

  discount = Math.max(0, Math.min(discount, subtotal));
  return { valid: true, discountCents: discount };
}

function sumLineItems(items) {
  return items.reduce((s, i) => s + i.priceCents * i.qty, 0);
}

function isValidPercent(p) {
  return Number.isInteger(p) && p >= 1 && p <= 100;
}

module.exports = { validateCoupon, sumLineItems };
