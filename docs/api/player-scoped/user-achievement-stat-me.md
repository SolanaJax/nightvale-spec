# 📦 `GET /user/achievement-stat/me`

> 🔐 **Player-Scoped Endpoint:** This endpoint returns achievement stats for the currently authenticated user only.

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/user/achievement-stat/me`  
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
fetch("https://api-production.defidungeons.gg/user/achievement-stat/me", {
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

Returns a `UserStatsObject` representing cumulative achievement stats for the current user.

### UserStatsObject

| Field                   | Type    | Description |
|--------------------------|---------|-------------|
| `totalQuestCompleted`    | Number  | Number of completed quests |
| `totalDungeonsCompleted` | Number  | Number of completed dungeon runs |
| `totalRaidBossesKilled`  | Number  | Number of raid bosses killed |
| `totalGoldEarned`        | Number  | Lifetime gold earned |

---

## ✅ Use Case

This endpoint is ideal for:
- Displaying a player's lifetime achievements
- Populating personal profile or dashboard stats
- Powering gamification features like badges, ranks, or milestone rewards