require('dotenv').config();
module.exports = {
    SECRETKEY: process.env.SECRETKEY,
    MONGODB_CONNECT_URI: process.env.MONGODB_CONNECT_URI,
};
