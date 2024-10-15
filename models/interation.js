const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const interation = new Schema({
    id: { type: ObjectId }, // khóa chính
    userId: {
        type: ObjectId,
        ref: 'user',
    },
    postId: {
        type: ObjectId,
        ref: 'post',
    },
    like: {
        type: Boolean, // kiểu dữ liệu
        default: false
    },
    likedAt: {
        type: Date, // kiểu dữ liệu
        default: null
    },
    save: {
        type: Boolean, // kiểu dữ liệu
        default: false
    },
    savedAt: {
        type: Date, // kiểu dữ liệu
        default: null
    },
    comment: {
        type: String, // kiểu dữ liệu
        default: null
    },
    commentedAt: {
        type: Date, // kiểu dữ liệu
        default: null
    },
});
module.exports = mongoose.models.interation || mongoose.model('interation', interation);
