const friendNotifications = require("../models/friendNotification");

module.exports = {
    addFriendNotification,
    checkFriendNotification,
    deleteFriendNotification,
    getFromAndTo,
}

async function checkFriendNotification(from, to) {
    try {
        const check = await friendNotifications.find({ "from": from, "to": to });
        if (check.length == 0) {
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        throw Error;
    }
}


async function addFriendNotification(from, to, displayName, avatar) {
    try {
        const newItem = { from, to, displayName, avatar };
        if (newItem) {
            const newFriendNotification = await friendNotifications.create(newItem);
            return newFriendNotification;
        }
    } catch (error) {
        console.log(error);
        throw Error;
    }
}


async function deleteFriendNotification(id) {
    try {
        const result = await friendNotifications.findByIdAndDelete(id);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getFromAndTo(id) {
    try {
        const check = await friendNotifications.findById(id);
        return check;
    } catch (error) {
        console.log(error);
        throw Error;
    }
}