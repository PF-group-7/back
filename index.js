require('dotenv').config();
const server = require ('./src/app');
const dbConnect = require('./src/db');
const { API_PORT, URL_FRONT } = process.env;

async function main(){
    await dbConnect();
    server.listen(API_PORT, () => {
        if (URL_FRONT.includes('localhost')) {
            console.log(`Listening at port: http://localhost:${API_PORT}`);
        } else {
            console.log(`Listening at port: ${API_PORT}`);
        }
    })
}

main();