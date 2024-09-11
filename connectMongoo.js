const mongoose = require('mongoose')
require("./models/user");
require("./models/post");
require("./models/friendNotification");
const config = require("./config");

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_CONNECT_URI)//link connect vs mongobd
        // .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
        // .catch(err => console.log('>>>>>>>>> DB Error: ', err));
        console.log('>>>>>>>>>> DB Connected!!!!!!')
    } catch (error) {
        console.log('>>>>>>>>> DB Error: ', error.message)
    }
}

module.exports = connectDB