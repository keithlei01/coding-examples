# Explanation — Coupon Validation

## Approach

1. Validate cart and minimum subtotal early (clear `reason` codes help ops/debugging).
2. Branch on coupon type; always cap discount at subtotal (never negative payable).
3. Use `Math.floor` on percent discounts—standard “customer favor” rounding unless policy says otherwise.

## Constraints

- All amounts are integers (cents).
- `percentOff` must be an integer in **[1, 100]**.
- Subtotal from `cart.subtotalCents` if provided, else sum of line items.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty cart | `valid: false`, `reason: "empty_cart"` | Early return |
| Subtotal ≤ 0 | `invalid_subtotal` | Guard before discount calc |
| Below `minSubtotalCents` | `below_minimum` | Compare before type branch |
| Invalid/missing coupon | `unknown_coupon_type` | Guard at top |
| PERCENT with bad percent | `invalid_percent` | `isValidPercent` check |
| PERCENT + `maxDiscountCents` | Cap at max | `Math.min` after floor |
| FIXED ≤ 0 | `invalid_fixed_amount` | Reject |
| FIXED > subtotal | Discount = subtotal | `Math.min(amount, subtotal)` |
| SKU not in cart | `sku_not_in_cart` | Eligible sum is 0 |
| Any discount | Capped at subtotal | Final `Math.min(discount, subtotal)` |

## Business logic map

| Type | What it models |
|------|----------------|
| PERCENT | Site-wide promos (BFCM) |
| FIXED | Gift cards / referral credits |
| SKU | Category promos (books, ads credits) |

## IC5 discussion

- **Idempotency:** applying same coupon twice should be blocked server-side.
- **Audit:** log `{ code, discountCents, reason }` for finance reconciliation.
- Mention explicit rounding policy with tax teams.
