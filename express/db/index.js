'use strict';
const mongoose = require('mongoose');
require("dotenv").config();

mongoose.Promise = global.Promise;

if (!process.env.DATABASE_URL) {
    console.warn("⚠️ No DATABASE_URL found — running without MongoDB connection");
} else {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
        console.log('✅ Mongoose connected');
    });
    mongoose.connection.on('disconnected', () => {
        console.log('⚠️ Mongoose disconnected');
    });
    mongoose.connection.on('error', err => {
        console.error('❌ MongoDB connection error:', err);
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose disconnected due to app termination');
            process.exit(0);
        });
    });
}
