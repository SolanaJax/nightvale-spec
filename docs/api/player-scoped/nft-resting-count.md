# 📦 `GET /nft/resting/count`

> 🔐 **Player-Scoped Endpoint:** This endpoint returns the count of NFTs currently in a "resting" state for the authenticated user, optionally filtered by NFT classes.

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/nft/resting/count`  
**Method:** `GET`  
**Auth Required:** ✅ Yes (Bearer Token)  
**Query Parameters:**

| Parameter       | Type     | Description |
|------------------|----------|-------------|
| `nftClasses[]`   | Array    | List of NFT class filters (e.g., `Warrior`, `Marksman`, etc.) |

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
fetch("https://api-production.defidungeons.gg/nft/resting/count?nftClasses[]=Warrior&nftClasses[]=Marksman&nftClasses[]=Mage&nftClasses[]=Banker", {
  headers: {
    accept: "application/json, text/plain, */*",
    authorization: "Bearer <YOUR_JWT_HERE>",
    "x-selected-wallet-address": "AxmnWkUp8bHyYMn76YFSkjdWSStpJximk2cAhnPkQ1xS"
  },
  method: "GET",
  credentials: "include",
  mode: "cors"
})
  .then(res => res.text())
  .then(count => console.log(Number(count)))
```

---

## 📤 Response Format

Returns a single number indicating how many NFTs are currently resting for the user, possibly filtered by class.

### Example Response

```json
0
```

### Meaning

| Value Type | Description |
|------------|-------------|
| `Number`   | Count of NFTs in a resting state for the specified user and class filters |

---

## ✅ Use Case

This endpoint is ideal for:
- Displaying how many NFTs are idle and eligible for new actions
- Filtering resting NFTs by class for UI display or automation
- Enabling or disabling "Send to Dungeon", "Equip", or similar buttons