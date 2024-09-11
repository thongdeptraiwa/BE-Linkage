const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const friendNotification = new Schema({
    id: { type: ObjectId }, // khóa chính
    form: {
        type: ObjectId,
        ref: 'user',
        required: true, // bắt buộc phải có
    },
    to: {
        type: ObjectId,
        ref: 'user',
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
});
module.exports = mongoose.models.friendNotification || mongoose.model('friendNotification', friendNotification);
