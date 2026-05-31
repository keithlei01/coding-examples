
function validateCoupon(cart, coupon) {

  
}

const cart1 = { items: [{ sku: "X", priceCents: 6000, qty: 1 }], subtotalCents: 6000 };
const percent20 = { type: "PERCENT", code: "SAVE20", percentOff: 20 };
console.log("20% on 6000 =>", validateCoupon(cart1, percent20));
// expected: { valid: true, discountCents: 1200 }

const cart2 = { items: [{ sku: "X", priceCents: 10000, qty: 1 }], subtotalCents: 10000 };
const capped = { type: "PERCENT", code: "CAP", percentOff: 20, maxDiscountCents: 1000 };
console.log("20% capped =>", validateCoupon(cart2, capped));
// expected: { valid: true, discountCents: 1000 }

const bookCart = { items: [{ sku: "BOOK", priceCents: 2000, qty: 2 }], subtotalCents: 4000 };
const skuCoupon = { type: "SKU", code: "BOOK50", sku: "BOOK", percentOff: 50 };
console.log("SKU 50% =>", validateCoupon(bookCart, skuCoupon));
// expected: { valid: true, discountCents: 2000 }

console.log("empty cart =>", validateCoupon({ items: [] }, percent20));
// expected: { valid: false, discountCents: 0, reason: "empty_cart" }

console.log("below minimum =>", validateCoupon(cart1, { type: "PERCENT", percentOff: 10, minSubtotalCents: 10000 }));
// expected: { valid: false, discountCents: 0, reason: "below_minimum" }

module.exports = { validateCoupon };
