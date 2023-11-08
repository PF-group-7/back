const mongoose = require('mongoose');
require('dotenv').config();
const { DB_URI_LOCAL } = process.env;

//conexion de la base de datos
const dbConnect = async () => {
    const connectionString =  DB_URI_LOCAL;
    console.log(connectionString);
    await mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected successfully!');
    })
    .catch((error) => {
        console.error('Error conecting MongoDB: ', error);
    });
}

module.exports = dbConnect;