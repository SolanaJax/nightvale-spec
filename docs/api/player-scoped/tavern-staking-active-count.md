# 📦 `GET /tavern-staking/active-count`

> 🔐 **Player-Scoped Endpoint:** This endpoint returns the number of currently active tavern staking sessions for the authenticated user.

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/tavern-staking/active-count`  
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
fetch("https://api-production.defidungeons.gg/tavern-staking/active-count", {
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

Returns a single number representing the count of currently **active tavern staking sessions** for the user.

### Example Response

```json
0
```

### Meaning

| Value Type | Description |
|------------|-------------|
| `Number`   | Count of NFTs currently staked in the tavern by the authenticated user. |

---

## ✅ Use Case

This endpoint is ideal for:
- Displaying how many NFTs are actively staked
- Controlling staking limits or UI availability
- Showing staking status summaries