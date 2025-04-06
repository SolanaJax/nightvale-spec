# 📦 `GET /loot-exchange/recent-exchanges`

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/loot-exchange/recent-exchanges`  
**Method:** `GET`  
**Auth Required:** ✅ Yes (Bearer Token)  
**Query Parameters:**  
- `limit` (optional): Maximum number of results to return (default: 50, max: 100000)

---

## 🔐 Headers

| Header Name                   | Value/Example                                                                                         |
|------------------------------|-------------------------------------------------------------------------------------------------------|
| `accept`                     | `application/json, text/plain, */*`                                                                  |
| `authorization`              | `Bearer <YOUR_JWT_HERE>`                                                                             |
| `x-selected-wallet-address`  | Wallet address of the user, e.g. `AxmnWkUp8bHyYMn76YFSkjdWSStpJximk2cAhnPkQ1xS`                        |
| `referrer`                   | `https://dungeons.game/`                                                                             |
| `referrerPolicy`             | `strict-origin-when-cross-origin`                                                                    |

---

## 🧾 Example Request (JavaScript)

```javascript
fetch("https://api-production.defidungeons.gg/loot-exchange/recent-exchanges?limit=100", {
  headers: {
    accept: "application/json, text/plain, */*",
    authorization: "Bearer <YOUR_JWT_HERE>",
    "x-selected-wallet-address": "AxmnWkUp8bHyYMn76YFSkjdWSStpJximk2cAhnPkQ1xS"
  },
  method: "GET",
  credentials: "include",
  mode: "cors"
})
  .then(res => res.json())
  .then(data => console.log(data))
```

---

## 📤 Response Format

Returns an **array** of `RewardSummaryObject`s representing sales/reward batches.

### RewardSummaryObject

| Field             | Type      | Description |
|-------------------|-----------|-------------|
| `id`              | Number    | Unique ID for the exchange record |
| `offerCount`      | Number    | Number of offers included |
| `offerPriceTotal` | String    | Total gross value of all offers (as string) |
| `totalEarned`     | String    | Amount earned by the user (as string) |
| `stakingReward`   | String    | Amount assigned to staking rewards (as string) |
| `walletId`        | String    | Wallet associated with the transaction |
| `createdAt`       | String    | ISO timestamp of record creation |
| `wallet`          | Object    | Wallet metadata including user links |
| `pfp`             | String \| Null | Profile picture URL |
| `username`        | String \| Null | Display name or username |

---

### WalletObject

| Field   | Type   | Description |
|----------|--------|-------------|
| `user`  | Object | Contains `links` (social accounts) |

---

### LinkObject

| Field     | Type   | Description |
|------------|--------|-------------|
| `image`    | String \| Null | Profile image for the linked account |
| `username` | String \| Null | Username from the linked account |
| `type`     | String | Type of account (`Twitter`, `Discord`, etc.) |

---

## ✅ Use Case

This endpoint is ideal for:
- Displaying recent marketplace sales or reward claims
- Tracking earnings and staking distributions
- Enabling leaderboards for most earned users or largest batch sales