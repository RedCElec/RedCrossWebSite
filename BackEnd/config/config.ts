import confjson from './config_json.json'

//const confjson = require('./config_json.json')

interface configjson {
    mongodb_link: string;
    mongodb_user: string;
    mongodb_password: string;
    api_config: string;
    charvet_api: string;
    server_port: number;
}

//Parsing Of the JSON
let configjson = JSON.parse(JSON.stringify(confjson));
const mongo_urlTest = configjson.api_config.charvet_api.mongodb_link
const url_parse = mongo_urlTest.substring(mongo_urlTest.indexOf('@') + 1);


const MONGO_USERNAME = process.env.MONGO_USERNAME || configjson.api_config.charvet_api.mongodb_user;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || configjson.api_config.charvet_api.mongodb_password;
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${url_parse}`;

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : configjson.api_config.charvet_api.server_port;


export const config = {
    mongo: {
        username: MONGO_USERNAME,
        password: MONGO_PASSWORD,
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
