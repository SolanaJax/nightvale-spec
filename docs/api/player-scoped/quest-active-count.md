# 📦 `GET /quest/active/count`

> 🔐 **Player-Scoped Endpoint:** This endpoint returns the number of active quests for the currently authenticated user.

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/quest/active/count`  
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
fetch("https://api-production.defidungeons.gg/quest/active/count", {
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

Returns a single number representing the count of currently **active quests** for the user.

### Example Response

```json
1
```

### Meaning

| Value Type | Description |
|------------|-------------|
| `Number`   | Represents how many quests are currently in progress for the authenticated user. |

---

## ✅ Use Case

This endpoint is ideal for:
- Displaying the number of active quests in a dashboard or user profile
- Conditionally showing quest-related UI (e.g., "Resume Quest" button)
- Validating quest limits or cooldowns