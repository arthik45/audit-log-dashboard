# Audit Log Dashboard

A Full Stack MERN application that allows security engineers to upload, view, search, filter, sort, and investigate system audit logs.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
audit-log-dashboard/
│
├── client/
│
└── server/
```

---

## ✨ Features

- Bulk upload of audit logs (supports 10,000 records)
- Server-side pagination
- Server-side searching
- Server-side filtering
- Server-side sorting
- Responsive dashboard
- JSON file upload

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/<your-username>/audit-log-dashboard.git

cd audit-log-dashboard
```

---

## Backend Setup

```bash
cd server

npm install
```

Create a `.env` file.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/auditLogs
```

Run the backend.

```bash
npm run dev
```

Server starts on

```
http://localhost:5000
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend starts on

```
http://localhost:5173
```

---

## API Endpoints

### Upload Logs

```
POST /api/logs/upload
```

Request Body

```json
[
  {
    "actor": "priya.nair@company.com",
    "role": "admin",
    "action": "DELETE_USER",
    "resource": "/api/users/334",
    "resourceType": "USER",
    "ipAddress": "192.168.1.45",
    "region": "ap-south-1",
    "severity": "HIGH",
    "status": "Unresolved",
    "timestamp": "2025-06-14T08:32:11Z"
  }
]
```

---

### Get Logs

```
GET /api/logs
```

Supports query parameters

| Parameter | Example |
|-----------|---------|
| page | 1 |
| limit | 10 |
| search | priya |
| severity | HIGH |
| status | Unresolved |
| role | admin |
| action | DELETE_USER |
| resourceType | USER |
| sort | timestamp |
| order | desc |

Example

```
GET /api/logs?page=1&limit=10&severity=HIGH&sort=timestamp&order=desc
```

---

## Sample Audit Log

```json
{
  "actor": "priya.nair@company.com",
  "role": "admin",
  "action": "DELETE_USER",
  "resource": "/api/users/334",
  "resourceType": "USER",
  "ipAddress": "192.168.1.45",
  "region": "ap-south-1",
  "severity": "HIGH",
  "status": "Unresolved",
  "timestamp": "2025-06-14T08:32:11Z"
}
```

---

## Folder Structure

### Backend

```
server/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── app.js
├── server.js
└── .env
```

### Frontend

```
client/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
```

---

## Future Improvements

- Authentication (JWT)
- Export logs (CSV/Excel)
- Date range filter
- Charts and analytics
- Role-based access control
- Docker support

---

## Author

**Arthik**

MERN Stack Developer
