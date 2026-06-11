# Explanation — Effective CPM

## Approach

Same mixed-event pattern as [08](../08-cpa-by-campaign/) / [11](../11-cpc-by-campaign/), different formula:

`ecpmDollars = round2((spendDollars / impressions) * 1000)`

## Slightly harder twist

Multiply by **1000** after the ratio — common interview slip is to forget the mille scale.

## Edge cases

| Case | Handling |
|------|----------|
| Impressions with $0 spend | ecpm 0 |
| No impressions | Omit |
| Sort | eCPM asc (cheaper delivery first) |

## Ads ladder extension

06 spend → 07 CTR → 08 CPA → 11 CPC → **13 eCPM**
