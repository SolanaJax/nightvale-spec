# 📦 `GET /user/me`

> 🔐 **Player-Scoped Endpoint:** This endpoint returns detailed information about the currently authenticated user, including wallet, referral, and asset balance data.

**Base URL:** `https://api-production.defidungeons.gg`  
**Endpoint:** `/user/me`  
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
fetch("https://api-production.defidungeons.gg/user/me", {
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

Returns an object containing the user profile, wallet information, referral data, and fungible asset balances.

---

### Main Object Structure

| Field      | Type   | Description |
|------------|--------|-------------|
| `user`     | Object | User profile information (see below) |
| `wallet`   | Object | Wallet and referral details (see below) |
| `balances` | Array  | Fungible asset balances (see below) |

---

### UserObject

| Field         | Type         | Description |
|----------------|--------------|-------------|
| `id`           | String       | User's unique identifier (e.g. DID) |
| `image`        | String/Null  | User profile picture URL |
| `isAdmin`      | Boolean      | Admin role flag |
| `lastLoginAt`  | String (ISO) | Timestamp of the most recent login |

---

### WalletObject

| Field           | Type   | Description |
|------------------|--------|-------------|
| `id`             | String | Wallet ID of the user |
| `referralRole`   | String | Role in the referral system (e.g., "Standard") |
| `referral`       | Object | Details about the referrer (see below) |
| `referralCode`   | String | The user’s personal referral code |

---

### ReferralInfoObject

| Field            | Type   | Description |
|------------------|--------|-------------|
| `referralCode`   | String | The code used during signup (belongs to the referrer) |
| `referrerWallet` | Object | Contains the referrer's wallet ID (see below) |

---

### ReferrerWalletObject

| Field | Type   | Description |
|--------|--------|-------------|
| `id`   | String | Referrer's wallet ID |

---

### FungibleAssetBalanceObject

| Field             | Type   | Description |
|--------------------|--------|-------------|
| `amount`           | String | Amount of the asset held |
| `fungibleAssetId`  | String | Type of the asset (e.g., `Gold`) |
| `walletId`         | String | Wallet the asset is tied to (should match top-level `wallet.id`) |

---

## ✅ Use Case

This endpoint is ideal for:
- Fetching user profile and session info
- Displaying wallet stats and currency balances
- Identifying referral origin and linked referrer data
- Admin-level UI flags or dashboards