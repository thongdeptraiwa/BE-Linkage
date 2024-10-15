const relationships = require("../models/relationship");

module.exports = {
    checkRelationship,// checl 2 relationship da ton tai chua
    // send
    addRelationshipSend,// add 2 relationship moi vao set send true
    editRelationshipSend,// set send true
    editRelationshipUnSend,/// set send false
    //friend
    editRelationshipFriend,// set friend true
    editRelationshipUnFriend,// set friend false
    // follow
    addRelationshipFollow,// add 2 relationship follow A true
    editRelationshipFollow,// set follow true
    editRelationshipUnFollow,// set follow false
    // block 
    addRelationshipBlock,//add 2 relationship moi vao set block A block=1 B block=-1
    editRelationshipBlock,// set block true
    editRelationshipUnBlock,// set block false A block=0 B block=0

}

// 2ng phải có 2 reletionship với nhau
async function checkRelationship(userIdA, userIdB) {
    try {
        const check = await relationships.find({ "userIdA": userIdA, "userIdB": userIdB });
        if (check) {
            const check2 = await relationships.find({ "userIdA": userIdB, "userIdB": userIdA });
            if (check2) {
                return 1;// 2 relationship của 2ng có tồn tại
            }
            return -1;// !!!!!!!!!! lỗi nặng !!!!!!!!!!!!!!!!
        }
        return 0; // 2ng lạ
    } catch (error) {
        console.log(error);
        return 0; // 2ng lạ
    }
}


// add 2 relationship moi vao set send true
async function addRelationshipSend(userIdA, userIdB) {
    try {
        const newItemA = {
            userIdA: userIdA,
            userIdB: userIdB,
            send: 1,// ng gui
            statusSend: true,// chua doc
            sendedAt: new Date.now(),
            friend: false,
            follow: false,
            block: 0,
        };
        const newItemB = {
            userIdA: userIdB,
            userIdB: userIdA,
            send: -1,// ng nhan
            statusSend: true,// chua doc
            sendedAt: null,
            friend: false,
            follow: false,
            block: 0,
        };
        const newRelationshipA = await relationships.create(newItemA);
        const newRelationshipB = await relationships.create(newItemB);
        console.log(newRelationshipA);
        console.log(newRelationshipB);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// set send true
async function editRelationshipSend(userIdA, userIdB) {
    try {

        const itemEditA = await relationships.findOne({ "userIdA": userIdA, "userIdB": userIdB });
        const itemEditB = await relationships.findOne({ "userIdA": userIdB, "userIdB": userIdA });

        if (itemEditA && itemEditB) {
            //A
            itemEditA.send = 1;
            itemEditA.statusSend = true;
            itemEditA.sendedAt = new Date.now();
            await itemEditA.save();
            //B
            itemEditB.send = -1;
            itemEditB.statusSend = true;
            itemEditB.sendedAt = new Date.now();
            await itemEditB.save();

            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// set send false (huy loi moi - tu choi)
async function editRelationshipUnSend(userIdA, userIdB) {
    try {

        const itemEditA = await relationships.findOne({ "userIdA": userIdA, "userIdB": userIdB });
        const itemEditB = await relationships.findOne({ "userIdA": userIdB, "userIdB": userIdA });

        if (itemEditA && itemEditB) {
            //A
            itemEditA.send = 0;
            itemEditA.statusSend = true;
            itemEditA.sendedAt = null;
            await itemEditA.save();
            //B
            itemEditB.send = 0;
            itemEditB.statusSend = true;
            itemEditB.sendedAt = null;
            await itemEditB.save();

            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// set friend true (chap nhan loi moi ket ban)
async function editRelationshipFriend(userIdA, userIdB) {
    try {

        const itemEditA = await relationships.findOne({ "userIdA": userIdA, "userIdB": userIdB });
        const itemEditB = await relationships.findOne({ "userIdA": userIdB, "userIdB": userIdA });

        if (itemEditA && itemEditB) {
            //A
            itemEditA.send = 0;//set lại send
            itemEditA.statusSend = true;
            itemEditA.sendedAt = null;
            itemEditA.friend = true;//friend
            itemEditA.friendedAt = new Date.now();
            itemEditA.follow = true;//follow
            // nếu friendedAt có value thì để nguyên 
            // còn friendedAt null thì gắn date.now
            itemEditA.followedAt = itemEditA.followedAt ?
                itemEditA.followedAt : new Date.now();
            await itemEditA.save();
            //B
            itemEditB.send = 0;//set lại send
            itemEditB.statusSend = true;
            itemEditB.sendedAt = null;
            itemEditB.friend = true;//friend
            itemEditB.friendedAt = new Date.now();
            itemEditB.follow = true;
            // nếu friendedAt có value thì để nguyên 
            // còn friendedAt null thì gắn date.now
            itemEditB.followedAt = itemEditB.followedAt ?
                itemEditB.followedAt : new Date.now();
            await itemEditB.save();

            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// set friend false (xoa ban be - huy ket ban)
async function editRelationshipUnFriend(userIdA, userIdB) {
    try {

        const itemEditA = await relationships.findOne({ "userIdA": userIdA, "userIdB": userIdB });
        const itemEditB = await relationships.findOne({ "userIdA": userIdB, "userIdB": userIdA });

        if (itemEditA && itemEditB) {
            //A
            itemEditA.friend = false;//Unfriend
            itemEditA.friendedAt = null;
            itemEditA.follow = false;//Unfollow
            itemEditA.followedAt = null;
            await itemEditA.save();
            //B
            itemEditB.friend = false;//Unfriend
            itemEditB.friendedAt = null;
            itemEditB.follow = false;//Unfollow
            itemEditB.followedAt = null;
            await itemEditB.save();

            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// add 2 relationship moi vao set follow A true
async function addRelationshipFollow(userIdA, userIdB) {
    try {
        const newItemA = {
            userIdA: userIdA,
            userIdB: userIdB,
            send: 0,
            statusSend: true,
            friend: false,
            follow: true,//A
            followedAt: new Date.now(),//A
            block: 0,
        };
        const newItemB = {
            userIdA: userIdB,
            userIdB: userIdA,
            send: 0,
            statusSend: true,
            friend: false,
            follow: false,//B
            block: 0,
        };
        const newRelationshipA = await relationships.create(newItemA);
        const newRelationshipB = await relationships.create(newItemB);
        console.log(newRelationshipA);
        console.log(newRelationshipB);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// edit relationship follow A true(1 ng)
async function editRelationshipFollow(userIdA, userIdB) {
    try {

        const itemEditA = await relationships.findOne({ "userIdA": userIdA, "userIdB": userIdB });

        if (itemEditA) {
            //A
            itemEditA.follow = true;//follow
            itemEditA.followedAt = new Date.now();
            await itemEditA.save();

            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// edit relationship Unfollow A false (1 ng)
async function editRelationshipUnFollow(userIdA, userIdB) {
    try {

        const itemEditA = await relationships.findOne({ "userIdA": userIdA, "userIdB": userIdB });

        if (itemEditA) {
            //A
            itemEditA.follow = false;//Unfollow
            itemEditA.followedAt = null;
            await itemEditA.save();

            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// add 2 relationship moi vao set block A block=1 B block=-1
async function addRelationshipBlock(userIdA, userIdB) {
    try {
        const newItemA = {
            userIdA: userIdA,
            userIdB: userIdB,
            send: 0,
            statusSend: true,
            friend: false,
            follow: false,//A
            block: 1,
            blockedAt: new Date.now(),
        };
        const newItemB = {
            userIdA: userIdB,
            userIdB: userIdA,
            send: 0,
            statusSend: true,
            friend: false,
            follow: false,
            block: -1,
            blockedAt: new Date.now(),
        };
        const newRelationshipA = await relationships.create(newItemA);
        const newRelationshipB = await relationships.create(newItemB);
        console.log(newRelationshipA);
        console.log(newRelationshipB);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// set block true A block=1 B block=-1
async function editRelationshipBlock(userIdA, userIdB) {
    try {

        const itemEditA = await relationships.findOne({ "userIdA": userIdA, "userIdB": userIdB });
        const itemEditB = await relationships.findOne({ "userIdA": userIdB, "userIdB": userIdA });

        if (itemEditA && itemEditB) {
            //A
            itemEditA.send = 0;//Unsend
            itemEditA.statusSend = true;
            itemEditA.sendedAt = null;
            itemEditA.friend = false;//Unfriend
            itemEditA.friendedAt = null;
            itemEditA.follow = false;//Unfollow
            itemEditA.followedAt = null;
            itemEditA.block = 1;//A block=1 B block=-1
            itemEditA.blockedAt = new Date.now();
            await itemEditA.save();
            //B
            itemEditB.send = 0;//Unsend
            itemEditB.statusSend = true;
            itemEditB.sendedAt = null;
            itemEditB.friend = false;//Unfriend
            itemEditB.friendedAt = null;
            itemEditB.follow = false;//Unfollow
            itemEditB.followedAt = null;
            itemEditB.block = -1;//A block=1 B block=-1
            itemEditB.blockedAt = new Date.now();
            await itemEditB.save();

            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// set block false A block=0 B block=0
async function editRelationshipUnBlock(userIdA, userIdB) {
    try {

        const itemEditA = await relationships.findOne({ "userIdA": userIdA, "userIdB": userIdB });
        const itemEditB = await relationships.findOne({ "userIdA": userIdB, "userIdB": userIdA });

        if (itemEditA && itemEditB) {
            //A
            itemEditA.block = 0;//A block=0 B block=0
            itemEditA.blockedAt = null;
            await itemEditA.save();
            //B
            itemEditB.block = 0;//A block=0 B block=0
            itemEditB.blockedAt = null;
            await itemEditB.save();

            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// getUserIDsBlock 
async function getUserIDsBlock(userID) {
    try {
        const listA = await relationships.find({
            "userIdA": userID,
            "block": { $ne: 0 }// $ne -> !=
        }, " userIdB");
        return list;
    } catch (error) {
        console.log(error);
        throw error;
    }
}