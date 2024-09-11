const mongoose = require('mongoose')
require("./models/user");
require("./models/post");
require("./models/friendNotification");

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://thong442001:F3WK9R2BOb3cV86h@totnghiep.8wwlj.mongodb.net/totNghiep?retryWrites=true&w=majority&appName=totNghiep')//link connect vs mongobd
        // .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
        // .catch(err => console.log('>>>>>>>>> DB Error: ', err));
        console.log('>>>>>>>>>> DB Connected!!!!!!')
    } catch (error) {
        console.log('>>>>>>>>> DB Error: ', err)
    }
}

module.exports = connectDB