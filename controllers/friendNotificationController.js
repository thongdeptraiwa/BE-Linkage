const friendNotifications = require("../models/friendNotification");

module.exports = {
    addFriendNotification,
    checkFriendNotification,
    deleteFriendNotification
}

async function checkFriendNotification(form, to) {
    try {
        const check = await friendNotifications.find({ "form": form, "to": to });
        if (check.length == 0) {
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        throw Error;
    }
}


async function addFriendNotification(form, to, displayName, avatar) {
    try {
        const newItem = { form, to, displayName, avatar };
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