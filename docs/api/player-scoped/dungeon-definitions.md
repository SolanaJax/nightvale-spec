# 📦 `GET /dungeon`

> 🔐 **Player-Scoped Endpoint:** This endpoint only returns dungeon data specific to the currently authenticated player. It does **not** provide global or universal dungeon definitions.

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/dungeon`  
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
fetch("https://api-production.defidungeons.gg/dungeon", {
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

Returns an **array** of `DungeonObject`s representing all dungeons currently accessible to the player.

### DungeonObject

| Field                    | Type     | Description |
|---------------------------|----------|-------------|
| `id`                      | String   | Unique internal ID of the dungeon (e.g. `ForgottenCrossroads`) |
| `name`                    | String   | Display name of the dungeon |
| `durationInSeconds`       | Number   | Total time (in seconds) to complete one run |
| `bossName`                | String   | Name of the final boss |
| `bossAttunement`          | String   | Elemental attunement (e.g. `Fire`) |
| `bossImage`               | String   | URL to the boss image |
| `keyFungibleAssetId`      | String   | Asset ID of the required dungeon key |
| `recommendedCombatLevel`  | Number   | Recommended character combat level |
| `keyFungibleAsset`        | Object   | Key asset metadata (see `KeyAssetObject`) |
| `dungeonBossKillChance`   | String   | Probability of boss kill (as a string) |

---

### KeyAssetObject

| Field   | Type   | Description |
|---------|--------|-------------|
| `id`    | String | ID of the dungeon key |
| `name`  | String | Display name of the key |
| `image` | String | Image URL (may be empty) |

---

## ✅ Use Case

This endpoint is ideal for:
- Displaying accessible dungeons in the player's interface
- Showing dungeon requirements before starting a trip
- Preparing dungeon-specific UIs with level and key information