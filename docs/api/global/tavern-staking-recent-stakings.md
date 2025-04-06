# 📦 `GET /tavern-staking/recent-stakings`

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/tavern-staking/recent-stakings`  
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
fetch("https://api-production.defidungeons.gg/tavern-staking/recent-stakings?limit=100", {
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

Returns an **array** of `EmissionClaimObject`s representing resource emissions claimed by wallets.

### EmissionClaimObject

| Field           | Type      | Description |
|------------------|-----------|-------------|
| `id`             | Number    | Unique ID of the claim |
| `nftId`          | String    | NFT associated with the resource emission |
| `walletId`       | String    | Wallet that claimed the reward |
| `amountEmitted`  | String    | Amount of resource emitted (high precision string) |
| `createdAt`      | String    | Timestamp when the emission was recorded |
| `claimedAt`      | String    | Timestamp when the emission was claimed |
| `wallet`         | Object    | Wallet metadata including user links |
| `pfp`            | String \| Null | Profile picture URL |
| `username`       | String \| Null | Display name or username |

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
- Tracking staking emissions and claims over time
- Displaying emissions history for specific NFT characters
- Enabling dashboards showing most emitted or most claimed rewards