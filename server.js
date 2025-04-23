const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();


const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000', 
  'https://frontend-rosy-rho.vercel.app',
  'https://frontend-git-master-chienvcgh221136s-projects.vercel.app',
  'https://frontend-3kqmjz1ke-chienvcgh221136s-projects.vercel.app'
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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const db = "mongodb+srv://chienpvgch221136:Chien1092004%40@mydbcluster.6kuho.mongodb.net/phone-data";

mongoose.connect(db)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Import route
const router = require('./api/routes/iPhoneRoute');
router(app); 


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(` Server is running at: http://localhost:${port}`);
});