# 📦 `GET /trip/active/count/all`

> 🔐 **Player-Scoped Endpoint:** This endpoint returns the total number of active dungeon trips across all characters for the authenticated user.

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/trip/active/count/all`  
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
fetch("https://api-production.defidungeons.gg/trip/active/count/all", {
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

Returns a single number representing the count of currently **active dungeon trips** across all the user's NFTs.

### Example Response

```json
0
```

### Meaning

| Value Type | Description |
|------------|-------------|
| `Number`   | Total count of in-progress dungeon trips owned by the authenticated user. |

---

## ✅ Use Case

This endpoint is ideal for:
- Displaying active trip counters on dashboards
- Preventing redundant dungeon launches if trips are already active
- Triggering "trip ready" or "collect loot" UI actions