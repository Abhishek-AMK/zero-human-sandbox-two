# zero-human-sandbox-two

## Backend health-check

This repository now includes a minimal Node.js backend server with a health-check endpoint.

### Install

```bash
npm install
```

### Run

```bash
npm start
```

### Development mode

```bash
npm run dev
```

### Quick validation

```bash
npm test
```

### Health-check endpoint

```bash
curl http://localhost:3000/health
```

Expected response:

```json
{
  "status": "ok"
}
```

### Port note

If port `3000` is already busy in your environment, you can run the server on another port:

```bash
PORT=3100 npm start
```
