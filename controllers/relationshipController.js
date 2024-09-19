const relationships = require("../models/relationship");

module.exports = {
    checkRelationship,

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
        throw Error;
    }
}


