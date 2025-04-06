# 📦 `GET /marketplace/nfts`

> 🔐 **Player-Scoped Endpoint:** This endpoint returns a paginated list of NFTs owned by the currently authenticated user, including metadata, stats, traits, and equipped items.

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/marketplace/nfts`  
**Method:** `GET`  
**Auth Required:** ✅ Yes (Bearer Token)  
**Query Parameters:**

| Parameter     | Type    | Description |
|---------------|---------|-------------|
| `limit`       | Number  | Max number of NFTs to return (e.g., `20`) |
| `offset`      | Number  | Index offset for pagination (e.g., `0`) |
| `enabled`     | Boolean | Whether the NFT is enabled/usable |
| `sort`        | String  | Sorting logic, e.g., `price-asc` (typo in original request: "pice-asc") |
| `search`      | String  | Search string (currently empty in this example) |
| `listed`      | Boolean | Whether to return NFTs currently listed on marketplace |

---

## 🔐 Headers

| Header Name                   | Value/Example |
|------------------------------|----------------|
| `accept`                     | `application/json, text/plain, */*` |
| `authorization`              | `Bearer <YOUR_JWT_HERE>` |
| `x-selected-wallet-address`  | e.g. `RPGCo69fqmYwdh48DXLYt5CGfAG5vpWvLeuEhefdgXb` |

---

## 🧾 Example Request (JavaScript)

```javascript
fetch("https://api-production.defidungeons.gg/marketplace/nfts?limit=20&offset=0&enabled=true&sort=price-asc&search=&listed=false", {
  headers: {
    accept: "application/json, text/plain, */*",
    authorization: "Bearer <YOUR_JWT_HERE>",
    "x-selected-wallet-address": "RPGCo69fqmYwdh48DXLYt5CGfAG5vpWvLeuEhefdgXb"
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

Returns an array of `NftDetailObject`s describing each NFT owned by the user.

### NftDetailObject

| Field     | Type   | Description |
|-----------|--------|-------------|
| `id`      | String | NFT ID (mint address) |
| `name`    | String | NFT display name |
| `class`   | String | NFT class (e.g., "Marksman") |
| `combat`  | Number | Combat power |
| `isInfected` | Boolean | Infection status |
| `image`   | String | NFT profile image |
| `attunement` | String | Element/type (e.g., "Fire") |
| `burnedAt` | String \| Null | Timestamp of burn (if any) |
| `lastImportTransactionSignature` | String | Blockchain import signature |
| `lastExportTransactionSignature` | String \| Null | Blockchain export signature |
| `importedByWalletId` | String | Wallet that imported the NFT |
| `nftStats` | Array | Array of base stat objects |
| `traits` | Array | Array of cosmetic traits |
| `listings` | Array | Marketplace listings (empty if `listed=false`) |
| `items` | Array | Array of equipped items (see below) |

---

### NftStatObject

| Field     | Type   | Description |
|-----------|--------|-------------|
| `value`   | Number | Stat value |
| `nftId`   | String | NFT ID |
| `statType` | String | e.g., "Power", "Vitality" |

---

### TraitObject

| Field     | Type   | Description |
|-----------|--------|-------------|
| `id`      | Number | Trait ID |
| `type`    | String | Trait type (e.g., "Race") |
| `value`   | String | Trait value (e.g., "Nightborn") |
| `nftId`   | String | Parent NFT ID |
| `walletId` | String \| Null | Associated wallet (if any) |

---

### EquippedItemObject

(Same as `ItemInstanceObject`, see item metadata docs)

| Field     | Type   | Description |
|-----------|--------|-------------|
| `id`      | String | Item instance UUID |
| `isDeleted` | Boolean | Soft deletion flag |
| `walletId` | String | Wallet originally owning this item |
| `nftId`   | String | NFT this item is equipped to |
| `itemMetadataId` | Number | Metadata reference ID |
| `itemMetadata` | Object | Static item definition (see `ItemMetadataWithEffectsObject`) |

---

## ✅ Use Case

This endpoint is ideal for:
- Displaying a player's NFT inventory
- Building item-equipped profile views
- Creating marketplace-style filtering views