const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const post = new Schema({
    id: { type: ObjectId }, // khóa chính
    userId: {
        type: ObjectId,
        ref: 'user',
    },
    displayName: {
        type: String, // kiểu dữ liệu
    },
    avatar: {
        type: String, // kiểu dữ liệu
    },
    content: {
        type: String, // kiểu dữ liệu
        default: null
    },
    images: [{
        type: String, // kiểu dữ liệu
        default: null
    }],
    likes: [{
        userId: {
            type: ObjectId,
            ref: 'user',
        },
        displayName: {
            type: String,
        },
        avatar: {
            type: String,
        },
        type: {
            type: String,
        }
    }],
    comments: [{
        userId: {
            type: ObjectId,
            ref: 'user',
        },
        displayName: {
            type: String,
        },
        avatar: {
            type: String,
        },
        content: {
            type: String,
        },
        createdAt: {
            type: Date, // kiểu dữ liệu
            default: Date.now()
        }
    }],
    createdAt: {
        type: Date, // kiểu dữ liệu
        default: Date.now()
    },
    destroy: {
        type: Boolean, // kiểu dữ liệu
        default: false,
        // false: còn  
        // true: xóa
    },
});
module.exports = mongoose.models.post || mongoose.model('post', post);
