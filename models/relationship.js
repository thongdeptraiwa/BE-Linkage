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
        type: Number, // kiểu dữ liệu
        // -1 ng nhan
        // 0  ko ai gui ai
        // 1 ng gui
    },
    statusSend: {
        type: Boolean, // kiểu dữ liệu
        default: true, //mặc định
        // true ( chưa đọc lời mời )
        // false ( đọc lời mời rồi )
    },
    sendedAt: {
        type: Date, // kiểu dữ liệu
        default: null
    },
    friend: {
        type: Boolean, // kiểu dữ liệu
    },
    friendedAt: {
        type: Date, // kiểu dữ liệu
        default: null
    },
    follow: {
        type: Boolean, // kiểu dữ liệu
    },
    followedAt: {
        type: Date, // kiểu dữ liệu
        default: null
    },
    block: {
        type: Number, // kiểu dữ liệu
        // -1 bị khoá
        // 0  ko ai block ai
        // 1 ng khoá
    },
    blockedAt: {
        type: Date, // kiểu dữ liệu
        default: null
    },
});
module.exports = mongoose.models.relationship || mongoose.model('relationship', relationship);
