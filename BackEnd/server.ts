import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/config';

const router = express();




mongoose
    .connect(config.mongo.url)
    .then(() => {

        startServer();
    })
    .catch(() => console.log("no conncetion to mongo"))


const startServer = () => {
    router.use((req, res, next) =>{
        res.on('finish', ()=> {

        });
        next();
    })
}