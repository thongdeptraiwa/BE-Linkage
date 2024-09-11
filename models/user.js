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
        default: null,
    },
    phoneNumber: {
        type: String, // kiểu dữ liệu
        default: null,
    },
    birthday: {
        type: String, // kiểu dữ liệu
        default: null,
    },
    isActive: {
        type: Boolean, // kiểu dữ liệu
        default: true, // mặc định
    },
    role: {
        type: Boolean, // kiểu dữ liệu
        default: false,
        // false: user 
        // true: admin
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
    friendNotifications: [{
        type: ObjectId,
        ref: 'friendNotification',
    }],
});
module.exports = mongoose.models.user || mongoose.model('user', user);
