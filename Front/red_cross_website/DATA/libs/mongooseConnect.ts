
const mongoose = require('mongoose');


const MONGO_URI = process.env.MONGO_URL;


if(!MONGO_URI){
    throw new Error('put mongo uri as env variable')

}


const connectMongo = async()=>{
    try{
        const {connection} = await mongoose.connect(MONGO_URI);
        if(connection.readyState === 1){
            return Promise.resolve(true);
        }
    }
    catch (error) {
        return Promise.reject(error);
    }
}


export default connectMongo;