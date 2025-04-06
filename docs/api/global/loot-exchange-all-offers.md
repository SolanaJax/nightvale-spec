# 📦 `GET /loot-exchange/all-offers`

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/loot-exchange/all-offers`  
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
fetch("https://api-production.defidungeons.gg/loot-exchange/all-offers", {
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

Returns an **object** acting as a map from `fungibleAssetId` to `AssetDetailsObject`.

### Example Response

```json
{
  "WolfHead": {
    "id": 46,
    "fungibleAssetId": "WolfHead",
    "price": "12.3",
    "weight": 10,
    "createdAt": "2025-03-11T12:47:18.772Z",
    "archivedAt": null
  },
  "WolfClaw": {
    "id": 47,
    "fungibleAssetId": "WolfClaw",
    "price": "6.2",
    "weight": 5,
    "createdAt": "2025-03-11T12:47:18.772Z",
    "archivedAt": null
  }
}
```

---

## 🧱 AssetDetailsObject

| Field            | Type            | Description |
|------------------|------------------|-------------|
| `id`             | Number           | Internal unique ID for the record |
| `fungibleAssetId`| String           | Asset identifier (e.g., `WolfHead`, `WolfClaw`) |
| `price`          | String           | Price or value of the asset (string type) |
| `weight`         | Number           | Encumbrance or weight value |
| `createdAt`      | String (ISO)     | Timestamp when the price/weight was set |
| `archivedAt`     | String \| Null   | Timestamp when archived; `null` if still active |

---

## ✅ Use Case

This endpoint is ideal for:
- Displaying the current market price and weight of fungible assets
- Enabling in-game trading or loot evaluation
- Filtering active vs archived offers