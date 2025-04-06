# 📦 `GET /nft/counts/by-classes?imported=false`

> 🔐 **Player-Scoped Endpoint:** This endpoint returns the class distribution of **non-imported** NFTs owned by the currently authenticated user.

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/nft/counts/by-classes`  
**Method:** `GET`  
**Auth Required:** ✅ Yes (Bearer Token)  
**Query Parameters:**

| Parameter   | Type    | Description |
|-------------|---------|-------------|
| `imported`  | Boolean | Whether to include only imported NFTs. Setting to `false` limits to native NFTs only. |

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
fetch("https://api-production.defidungeons.gg/nft/counts/by-classes?imported=false", {
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

Returns a `NftClassCountObject` summarizing counts of **non-imported** NFTs grouped by class.

### NftClassCountObject

| Field      | Type         | Description |
|------------|--------------|-------------|
| `total`    | String       | Total number of NFTs included in the result |
| `Warrior`  | String/Null  | Count of Warrior class NFTs (null when total is "0") |
| `Marksman` | String/Null  | Count of Marksman class NFTs |
| `Mage`     | String/Null  | Count of Mage class NFTs |
| `Banker`   | String/Null  | Count of Banker class NFTs |
| `Merchant` | String/Null  | Count of Merchant class NFTs |
| ...others  | String/Null  | Any other defined classes in the system |

---

### Empty Result Interpretation

- If `total = "0"`, all class fields will return `null`, signifying no NFTs found in the specified scope.

---

## ✅ Use Case

This endpoint is ideal for:
- Differentiating between imported and native NFTs in a user's account
- Displaying or filtering owned NFTs by class and origin
- Driving logic around NFT availability, filters, or UI class counts