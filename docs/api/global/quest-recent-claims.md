# 📦 `GET /quest/recent-claims`

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/quest/recent-claims`  
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
fetch("https://api-production.defidungeons.gg/quest/recent-claims?limit=100", {
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

Returns an **array** of `QuestCompletionObject`s representing completed quests and claimed rewards.

### QuestCompletionObject

| Field              | Type      | Description |
|--------------------|-----------|-------------|
| `id`               | String    | Unique ID of the quest |
| `startedAt`        | String    | ISO timestamp when the quest started |
| `claimedAt`        | String    | ISO timestamp when the rewards were claimed |
| `walletId`         | String    | Player’s wallet address |
| `nftId`            | String    | NFT character that completed the quest |
| `nftCombatLevel`   | Number    | Combat level of the NFT during the quest |
| `rewards`          | Array     | Array of `RewardObject` |
| `wallet`           | Object    | Wallet metadata including user links |
| `pfp`              | String    | Profile picture URL |
| `username`         | String    | Display name or username |
| `keyCount`         | Number    | Number of DungeonKey rewards |
| `lootCount`        | Number    | Number of MerchantItem rewards (total amount) |
| `droppedRareItem`  | String \| Null | ID of a notable reward item if any |

---

### RewardObject

| Field             | Type    | Description |
|-------------------|---------|-------------|
| `questId`         | String  | ID of the associated quest |
| `fungibleAssetId` | String  | Asset ID of the reward |
| `amount`          | String  | Quantity (as string) |
| `fungibleAsset`   | Object  | Asset metadata (see `FungibleAssetObject`) |

---

### FungibleAssetObject

| Field     | Type   | Description |
|-----------|--------|-------------|
| `id`      | String | Asset ID |
| `name`    | String | Display name (e.g. "Gem of the Lost King") |
| `image`   | String | URL to the image (may be empty) |
| `type`    | String | Category (e.g. `DungeonKey`, `MerchantItem`) |

---

## ✅ Use Case

This endpoint is ideal for:
- Displaying recent quest reward history for players
- Tracking loot drops and key gains
- Filtering notable drops via `droppedRareItem`