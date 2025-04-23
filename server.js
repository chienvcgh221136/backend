const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// ✅ Cho phép cả local và Vercel frontend gọi API
const allowedOrigins = [
  'http://localhost:5173',
  'https://frontend-rosy-rho.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware để parse JSON & form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Kết nối MongoDB
const db = "mongodb+srv://chienpvgch221136:Chien1092004%40@mydbcluster.6kuho.mongodb.net/phone-data";

mongoose.connect(db)
  .then(() => console.log('✅ MongoDB connected successfully!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Import route
const router = require('./api/routes/iPhoneRoute');
router(app); // Đăng ký routes

// ✅ Khởi chạy server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server is running at: http://localhost:${port}`);
});
