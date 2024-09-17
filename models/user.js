const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const user = new Schema({
    id: { type: ObjectId }, // khóa chính
    email: {
        type: String, // kiểu dữ liệu
        required: true, // bắt buộc phải có
        unique: true, // không được trùng
    },
    password: {
        type: String, // kiểu dữ liệu
        required: true, // bắt buộc phải có
    },
    displayName: {
        type: String, // kiểu dữ liệu
        required: true, // bắt buộc phải có
    },
    avatar: {
        type: String, // kiểu dữ liệu
        default: "https://i.pinimg.com/564x/14/30/f2/1430f2a57ce798b01b075c3e88df5dc9.jpg",// avatar mặc định 
    },
    // phoneNumber: {
    //     type: String, // kiểu dữ liệu
    //     default: null,
    // },
    // birthday: {
    //     type: String, // kiểu dữ liệu
    //     default: null,
    // },
    isActive: {
        type: Boolean, // kiểu dữ liệu
        default: true, // mặc định
    },
    role: {
        type: Number, // kiểu dữ liệu
        // 1: admin 
        // 2: manage
        // 3: user
        // -1: khoá user
    },
    posts: [{
        type: ObjectId,
        ref: 'post',
    }],
    friends: [{
        type: ObjectId,
        ref: 'user',
    }],
    notifications: [{
        type: ObjectId,
        ref: 'notification',
    }],
    // friendNotifications: [{
    //     type: ObjectId,
    //     ref: 'friendNotification',
    // }],
});
module.exports = mongoose.models.user || mongoose.model('user', user);
