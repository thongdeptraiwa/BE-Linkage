const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const relationship = new Schema({
    id: { type: ObjectId }, // khóa chính
    userIdA: {
        type: ObjectId,
        ref: 'user',
        required: true, // bắt buộc phải có
    },
    userIdB: {
        type: ObjectId,
        ref: 'user',
        required: true, // bắt buộc phải có
    },
    send: {
        type: Boolean, // kiểu dữ liệu
        // true ( A gửi lời mời kết bạn )
    },
    friend: {
        type: Boolean, // kiểu dữ liệu
    },
    follow: {
        type: Boolean, // kiểu dữ liệu
    },
    block: {
        type: Number, // kiểu dữ liệu
        // -1 bị khoá
        // 0  bth
        // 1 ng khoá
    },
    sendAt: {
        type: Date, // kiểu dữ liệu
        default: null
    },
    friendAt: {
        type: Date, // kiểu dữ liệu
        default: null
    },
    blockAt: {
        type: Date, // kiểu dữ liệu
        default: null
    },
});
module.exports = mongoose.models.relationship || mongoose.model('relationship', relationship);
