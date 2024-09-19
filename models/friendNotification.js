const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const friendNotification = new Schema({
    id: { type: ObjectId }, // khóa chính
    from: {
        type: ObjectId,
        ref: 'user',
        required: true, // bắt buộc phải có
    },
    to: {
        type: ObjectId,
        ref: 'user',
        required: true, // bắt buộc phải có
    },
    state: {
        type: Boolean, // kiểu dữ liệu
        default: false
    },
    createdAt: {
        type: Date, // kiểu dữ liệu
        default: Date.now()
    },
});
module.exports = mongoose.models.friendNotification || mongoose.model('friendNotification', friendNotification);
