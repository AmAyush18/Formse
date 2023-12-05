import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

export const app = express();

import cors from 'cors';
import cookieParser from 'cookie-parser';

// body parser
app.use(express.json({limit: '50mb'}));

// cookie parser
app.use(cookieParser());

// cors => cross origin resource sharing
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);

// routes
// app.use("api/v1");

app.get("/test", (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "API is working"
    })
});

// unknow route
app.all("*", (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server!`);
    err.statusCode = 400;
    next(err);
});