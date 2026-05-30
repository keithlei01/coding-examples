# 03 — Coupon Validation

## Context

Checkout applies coupon codes with business rules. Implement `validateCoupon(cart, coupon)` returning `{ valid: boolean, discountCents: number, reason?: string }`.

**Cart:** `{ items: [{ sku, priceCents, qty }], subtotalCents }` (subtotal is pre-discount sum of line items).

**Coupon types:**

1. `PERCENT` — `{ type: "PERCENT", code, percentOff, minSubtotalCents?, maxDiscountCents? }`
2. `FIXED` — `{ type: "FIXED", code, amountCents, minSubtotalCents? }`
3. `SKU` — `{ type: "SKU", code, sku, percentOff }` applies only to matching line items.

Invalid coupon → `{ valid: false, discountCents: 0, reason: "..." }`.

## Examples

- 20% off cart, min $50: subtotal 6000 cents → discount 1200.
- 20% off with max discount $10: subtotal 10000 → raw 2000, capped to 1000.
- SKU 50% off `BOOK`: one BOOK line 2000×2 → discount 2000 (50% of 4000).

## Constraints

- All amounts integers (cents).
- `percentOff` in [1, 100].

## Follow-ups

- Stackability: two coupons?
- Tax after discount vs before (jurisdiction).
