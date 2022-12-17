import { NextApiRequest, NextApiResponse } from "next";
const mongoose = require('mongoose');


//const MONGO_URI = process.env.MONGO_URL;
const MONGO_URI = 'mongodb+srv://root:TQqpVcBKp7Qf3W2e@redcdata.eg602cr.mongodb.net/?retryWrites=true&w=majority';

if(!MONGO_URI){
    throw new Error('put mongo uri as env variable')

}


const connectMongo = async()=>{
    try{
        const {connection} = await mongoose.connect(MONGO_URI)
        if(connection.readyState === 1){
            return Promise.resolve(true);
        }
    }
    catch (error) {
        return Promise.reject(error);
    }
}


export default connectMongo;