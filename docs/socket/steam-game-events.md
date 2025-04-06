# Defi Dungeons WebSocket Protocol

This document describes how to connect to and communicate with the Defi Dungeons public WebSocket server using the Socket.IO protocol (Engine.IO v4).

---

## 🔌 Connection URL

```
wss://api-production.defidungeons.gg/socket.io/?EIO=4&transport=websocket
```

- `EIO=4`: Engine.IO protocol version 4 (used by Socket.IO v4)
- `transport=websocket`: Forces WebSocket upgrade immediately

---

## 🛠 Protocol Basics

Socket.IO messages are prefixed with numeric codes indicating their type. Here's a breakdown of how to handle them:

| Prefix | Meaning                             |
|--------|-------------------------------------|
| `0`    | Server handshake (JSON payload)     |
| `40`   | Client confirms WebSocket upgrade   |
| `2`    | Ping from server                    |
| `3`    | Pong response to keep alive         |
| `42`   | Event message with JSON payload     |

---

## 🔄 Handshake Flow

### 1. Server sends a handshake:

```
0{"sid":"...","pingInterval":25000,"pingTimeout":20000,...}
```

### 2. Client must respond:

```
40
```

This confirms the WebSocket is ready to start receiving events.

---

## 🫀 Heartbeat (Ping/Pong)

To maintain the connection:

- Server sends: `2`
- Client replies: `3`

If you don't respond to ping within `pingTimeout`, the connection will close.

---

## 📥 Receiving Events

When the server emits an event, it looks like this:

```
42["eventName", data]
```

- `42`: Event frame
- `"eventName"`: Name of the emitted event
- `data`: JSON-serializable payload (can be omitted)

### Example

```
42["trip:claim-recent", {"userId": "abc123"}]
```

---

## 📤 Sending Events

To emit an event to the server:

```js
socket.send(`42["eventName", payload]`)
```

### Example

```js
socket.send(`42["joinRoom", {"roomId": "abc123"}]`)
```

---

## 🔐 Authentication

Currently, this endpoint does not require authentication headers.

If authentication is required in the future, it will likely be handled by sending an `auth` event:

```js
socket.send(`42["auth", { "token": "your_jwt_token" }]`)
```

---

## ✅ Minimal Client Example (JavaScript)

```js
const socket = new WebSocket('wss://api-production.defidungeons.gg/socket.io/?EIO=4&transport=websocket')

socket.onopen = () => console.log('connected')

socket.onmessage = e => {
  const msg = e.data

  if (msg.startsWith('0')) socket.send('40')
  else if (msg === '2') socket.send('3')
  else if (msg.startsWith('42')) {
    const [event, data] = JSON.parse(msg.slice(2))
    console.log('event:', event, data)
  }
}

socket.onerror = err => console.error('socket error', err)
socket.onclose = () => console.log('disconnected')
```

---

## 🧪 Testing

You can test this connection with any WebSocket debugging tool or your own JS environment using the code above. Expect to see `"trip:claim-recent"` and other real-time events.

---

## 📎 References

- [Socket.IO Protocol v4](https://github.com/socketio/socket.io-protocol)
- [WebSocket API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
