# 📦 `GET /trip/recent-rewards`

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/trip/recent-rewards`  
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
fetch("https://api-production.defidungeons.gg/trip/recent-rewards?limit=50", {
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

Returns an **array** of `TripObject`s representing completed dungeon trips.

### TripObject

| Field                  | Type      | Description |
|------------------------|-----------|-------------|
| `id`                   | String    | Unique trip ID |
| `startedAt`            | String    | ISO timestamp when the trip began |
| `endsAt`               | String    | ISO timestamp when the trip ended |
| `claimedAt`            | String    | ISO timestamp when rewards were claimed |
| `walletId`             | String    | Player’s wallet address |
| `nftId`                | String    | NFT character that participated in the trip |
| `dungeonId`            | String    | Dungeon identifier (e.g. `ForgottenCrossroads`) |
| `isBossKill`           | Boolean   | Whether the trip ended with a boss kill |
| `tripEvents`           | Array     | Array of `TripEventObject` |
| `wallet`               | Object    | Wallet metadata including user links |
| `pfp`                  | String    | Profile image URL |
| `username`             | String    | Display name or username |
| `itemCount`            | Number    | Number of NFT items dropped |
| `fungibleAssetsCount`  | Number    | Number of fungible assets dropped |

---

### TripEventObject

| Field       | Type    | Description |
|-------------|---------|-------------|
| `eventId`   | String  | Event type (e.g. `DropItems`, `DropFungibleAssets`) |
| `tripEventModificationLogs` | Array | List of `ModificationLogObject` entries |

---

### ModificationLogObject

| Field             | Type    | Description |
|-------------------|---------|-------------|
| `fungibleAssetId` | String \| Null | Asset ID if applicable |
| `fungibleAsset`   | Object \| Null | Metadata for asset (`id`, `name`, `image`, `type`) |
| `itemId`          | String \| Null | Item UUID if a non-fungible item |
| `amount`          | Number  | Quantity (usually 1) |
| `item`            | Object \| Null | Full item object if applicable |

---

### ItemObject

| Field           | Type     | Description |
|------------------|----------|-------------|
| `id`             | String   | Item instance ID |
| `isDeleted`      | Boolean  | Whether the item is destroyed |
| `walletId`       | String   | Owning wallet |
| `nftId`          | String \| Null | Equipped NFT ID if relevant |
| `itemMetadata`   | Object   | Static metadata about the item |

---

### ItemMetadataObject

| Field     | Type     | Description |
|------------|----------|-------------|
| `id`       | Number   | Internal ID |
| `name`     | String   | Item name |
| `image`    | String   | Image URL |
| `type`     | String   | Item category (e.g. Weapon) |
| `class`    | String   | Class requirement (e.g. Marksman) |
| `level`    | Number   | Item level |
| `rarity`   | String   | Item rarity (e.g. Common, Rare) |

---

### WalletObject

| Field | Type   | Description |
|-------|--------|-------------|
| `user`| Object | See `UserObject` |

---

### UserObject

| Field   | Type   | Description |
|----------|--------|-------------|
| `links` | Array  | Array of `LinkObject` entries |

---

### LinkObject

| Field     | Type   | Description |
|------------|--------|-------------|
| `image`    | String \| Null | Profile image for the linked account |
| `username` | String \| Null | Username from the linked account |
| `type`     | String | Platform type (`Twitter`, `Discord`, etc.) |

---

## ✅ Use Case

This endpoint is ideal for:
- Displaying recent dungeon trips by a player
- Showing loot history and drop quality
- Enabling leaderboards or reward analytics