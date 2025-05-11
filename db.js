const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://abhi:abhi@123@cluster0.bfqf5dp.mongodb.net/wallet-app")

    console.log(`MongoDB connected: ${conn.connection.host}`.bgGreen.black.bold.underline)
  } catch (err) {
    console.log(`Error: ${err.message}`.bgRed.bold.underline)
    process.exit(1)
  }
}

module.exports = connectDB
