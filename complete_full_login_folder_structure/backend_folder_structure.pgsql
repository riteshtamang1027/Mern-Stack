BACKEND (Node.js + Express)
server

server/
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── google.js
│   │
│   ├── controllers/
│   │   └── authController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   └── authRoutes.js
│   │
│   ├── utils/
│   │   └── generateToken.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── nodemon.json
