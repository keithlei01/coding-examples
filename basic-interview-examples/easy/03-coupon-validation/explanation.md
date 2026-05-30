# Explanation — Coupon Validation

## Approach

1. Validate cart and minimum subtotal early (clear `reason` codes help ops/debugging).
2. Branch on coupon type; always cap discount at subtotal (never negative payable).
3. Use `Math.floor` on percent discounts—standard “customer favor” rounding unless policy says otherwise.

## Business logic map

| Type | What it models |
|------|----------------|
| PERCENT | Site-wide promos (BFCM) |
| FIXED | Gift cards / referral credits |
| SKU | Category promos (books, ads credits) |

## Edge cases

- **maxDiscountCents:** protects margin on large carts.
- **SKU not in cart:** invalid, not zero discount silently—prevents support confusion.
- **Fixed > subtotal:** discount = subtotal (free order, not negative).

## IC5 discussion

- **Idempotency:** applying same coupon twice should be blocked server-side.
- **Audit:** log `{ code, discountCents, reason }` for finance reconciliation.
- Mention explicit rounding policy with tax teams.
