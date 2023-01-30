import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/config';
import api_routes from './router/router';
import http from 'http';

const router = express();

/*mongoose
    .connect(config.mongo.url)
    .then(() => {

        startServer();
    })
    .catch(() => console.log("no conncetion to mongo"))

*/

const startServer = () => {
    router.use((req, res, next) =>{
        res.on('finish', ()=> {

        });
        next();
    })

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/** Rules of API -- Header */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
/** Call Router at /api2 */
router.use('/api2', api_routes);

router.post('/testFetch', (req, res, next)=>{

    console.log('ok ca marche')
    res.status(200).json({message: "its ok"})
});


/** Healthcheck */
router.get('/ping', (req, res, next) => res.status(200).json({ message: 'hello world' }));

http.createServer(router).listen(config.server.port, () => console.log('server running on port', config.server.port));
};

startServer();

