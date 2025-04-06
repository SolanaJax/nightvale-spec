# 📦 `GET /item/get-all-items`

> 🔐 **Player-Scoped Endpoint:** This endpoint only returns data specific to the currently authenticated user. It does **not** return global data.

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/item/get-all-items`  
**Method:** `GET`  
**Auth Required:** ✅ Yes (Bearer Token)  
**Query Parameters:**

| Parameter | Type   | Description |
|-----------|--------|-------------|
| `limit`   | Number | Max number of items to return per request (e.g. 60) |
| `offset`  | Number | Number of items to skip for pagination (e.g. 0) |
| `sort`    | String | Sort key (e.g. `level-asc`, `rarity-desc`) |

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
fetch("https://api-production.defidungeons.gg/item/get-all-items?limit=60&offset=0&sort=level-asc", {
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

Returns an **array** of `ItemInstanceObject`s representing the user's owned inventory items.

### ItemInstanceObject

| Field             | Type      | Description |
|-------------------|-----------|-------------|
| `id`              | String    | Unique ID of the item instance |
| `isDeleted`       | Boolean   | Whether the item is destroyed or no longer valid |
| `walletId`        | String    | Owner wallet address |
| `nftId`           | String \| Null | NFT the item is equipped to, if any |
| `itemMetadataId`  | Number    | Reference ID for the item's metadata |
| `itemMetadata`    | Object    | Static metadata about the item (see below) |

---

### ItemMetadataObject

| Field     | Type     | Description |
|-----------|----------|-------------|
| `id`      | Number   | Internal ID for the item type |
| `name`    | String   | Item name |
| `image`   | String   | Image URL |
| `type`    | String   | Slot or item category (e.g., Weapon) |
| `class`   | String   | Intended class (e.g., Marksman) |
| `level`   | Number   | Item level requirement |
| `rarity`  | String   | Rarity tier (e.g., Common, Rare) |
| `effects` | Array    | Array of stat effects (see `EffectObject`) |

---

### EffectObject

| Field           | Type   | Description |
|------------------|--------|-------------|
| `itemMetadataId` | Number | ID of the parent item metadata |
| `statType`       | String | Type of stat modified (e.g., Power, Vitality) |
| `value`          | String | Numeric value (stored as string) |

---

## ✅ Use Case

This endpoint is ideal for:
- Building user inventory UIs
- Managing equipment per character
- Displaying sortable/filterable item collections