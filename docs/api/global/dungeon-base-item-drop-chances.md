# 📦 `GET /dungeon/base-item-drop-chances`

> 🎯 **Scoped by Dungeon and Class:** This endpoint returns item drop probabilities for a given dungeon and NFT class combination.

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/dungeon/base-item-drop-chances`  
**Method:** `GET`  
**Auth Required:** ✅ Yes (Bearer Token)  
**Query Parameters:**

| Parameter   | Type   | Description |
|-------------|--------|-------------|
| `dungeonId` | String | Dungeon to query. Accepted values: `CrimsonHall`, `FrostboundKeep`, `AncientTombs`, `ThievesDen`, `ForgottenCrossroads` |
| `nftClass`  | String | NFT class to filter loot for. Accepted values: `Warrior`, `Mage`, `Marksman` |

---

## 🔐 Headers

| Header Name                   | Value/Example                                                                                         |
|------------------------------|-------------------------------------------------------------------------------------------------------|
| `accept`                     | `application/json, text/plain, */*`                                                                  |
| `authorization`              | `Bearer <YOUR_JWT_HERE>`                                                                             |
| `x-selected-wallet-address`  | Wallet address of the user, e.g. `AxmnWkUp8bHyYMn76YFSkjdWSStpJximk2cAhnPkQ1xS`                        |

---

## 🧾 Example Request (JavaScript)

```javascript
fetch("https://api-production.defidungeons.gg/dungeon/base-item-drop-chances?dungeonId=CrimsonHall&nftClass=Warrior", {
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

Returns an **array** of `DropChanceObject`s representing potential item drops and their associated probabilities.

### DropChanceObject

| Field         | Type   | Description |
|---------------|--------|-------------|
| `chance`      | Number | Drop probability (e.g. 0.01 for 1%) |
| `itemMetadata`| Object | Static metadata for the drop (see `ItemMetadataWithEffectsObject`) |

---

### ItemMetadataWithEffectsObject

| Field     | Type     | Description |
|-----------|----------|-------------|
| `id`      | Number   | Item metadata ID |
| `name`    | String   | Display name (e.g., "Divine Hammer") |
| `image`   | String   | URL to item image |
| `type`    | String   | Item slot or type (e.g., Weapon, Special) |
| `class`   | String \| Null | Targeted class (e.g., Warrior) or null if universal |
| `level`   | Number   | Level requirement |
| `rarity`  | String   | Item rarity (e.g., Epic, Legendary) |
| `effects` | Array    | Stat modifiers (can be empty) |

---

### EffectObject (within `effects`)

| Field           | Type   | Description |
|------------------|--------|-------------|
| `itemMetadataId` | Number | ID of the parent metadata |
| `statType`       | String | Stat type affected (e.g., Power) |
| `value`          | String | Value of the stat modification |

---

## ✅ Use Case

This endpoint is ideal for:
- Displaying loot tables per dungeon/class
- Powering preview UIs for drops before sending characters to dungeon
- Balancing analysis and drop simulation tools