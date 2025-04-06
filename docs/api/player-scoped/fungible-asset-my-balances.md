# 📦 `GET /fungible-asset/my-balances`

> 🔐 **Player-Scoped Endpoint:** This endpoint returns fungible asset balances specific to the currently authenticated user only.

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/fungible-asset/my-balances`  
**Method:** `GET`  
**Auth Required:** ✅ Yes (Bearer Token)

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
fetch("https://api-production.defidungeons.gg/fungible-asset/my-balances", {
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

Returns an **array** of `FungibleAssetBalanceObject`s representing fungible assets and their balances in the user's wallet.

### FungibleAssetBalanceObject

| Field             | Type     | Description |
|-------------------|----------|-------------|
| `amount`          | String   | Quantity held in wallet (as a string) |
| `walletId`        | String   | Wallet address holding the asset |
| `fungibleAssetId` | String   | Canonical ID of the asset type (e.g., `Gold`) |
| `fungibleAsset`   | Object   | Metadata about the asset (see below) |
| `offerPrice`      | Number   | Current offer price per unit (0 if not sellable) |

---

### FungibleAssetMetadataObject

| Field   | Type   | Description |
|---------|--------|-------------|
| `image` | String | URL to the asset's image (may be empty) |
| `name`  | String | Display name of the asset (e.g., `Gold`, `Wooden Torch`) |

---

## ✅ Use Case

This endpoint is ideal for:
- Displaying the player's current wallet balances
- Showing market sell prices per asset type
- Supporting inventory, marketplace, and staking interfaces