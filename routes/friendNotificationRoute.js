var express = require('express');
var router = express.Router();

const friendNotificationController = require("../controllers/friendNotificationController")
const userController = require("../controllers/userController")

//checkToken
const checkToken = require("./checkToken");


//check friends trong user  ( btn thêm bạn bè vs hủy lời mời )
//http://localhost:3000/friendNotification/checkFriendNotification
// router.post('/checkFriendNotification', checkToken, async function (req, res, next) {
//   try {
//     const { from, to } = req.body;
//     //check friendNotification đã tồn tại chưa
//     const check = await friendNotificationController.checkFriendNotification(from, to);
//     if (check) {
//       // lời mời kết bạn chưa tồn tại
//       res.status(200).json({ "status": true, "message": "Thêm bạn bè hoặc Chấp nhận" });
//     } else {
//       // lời mời kết bạn đã có rồi
//       res.status(201).json({ "status": true, "message": "Hủy lời mời hoặc Từ chối" });
//     }
//   } catch (e) {
//     res.status(400).json({ "status": false, "message": "lỗi" });
//   }
// });


//add new friendNotification 
//http://localhost:3000/friendNotification/add
// router.post('/add', checkToken, async function (req, res, next) {
//   try {
//     const { from, to } = req.body;
//     //check friendNotification đã tồn tại chưa
//     const check = await friendNotificationController.checkFriendNotification(from, to);
//     if (check) {
//       //chưa tồn tại thì add vào
//       //lấy displayName vs avatar form
//       const nameAndAvatar = await userController.getNameAndAvatar(from);
//       //add friendNotification mới trong friendNotification
//       const friendNotification = await friendNotificationController.addFriendNotification(from,
//         to,
//         nameAndAvatar.displayName,
//         nameAndAvatar.avatar,
//       );
//       // add friendNotification mới vào user
//       await userController.addFriendNotificationInUser(to, friendNotification._id)
//       res.status(200).json({ "status": true, "message": "add friendNotification thành công" });
//     } else {
//       //đã có rồi thì ko đc add nữa
//       res.status(401).json({ "status": false, "message": "friendNotification này đã tồn tại" });
//     }
//   } catch (e) {
//     res.status(400).json({ "status": false, "message": "lỗi" });
//   }
// });


//delete friendNotification
//http://localhost:3000/friendNotification/delete
// router.post('/delete', checkToken, async function (req, res, next) {
//   try {
//     const { userId, id } = req.body;
//     // xóa friendNotification trong user 
//     const remoteFriendNotificationInUser = await userController.deleteFriendNotificationInUser(userId, id);
//     if (remoteFriendNotificationInUser) {
//       // xóa friendNotification trong friendNotifications 
//       const result = await friendNotificationController.deleteFriendNotification(id);
//       if (result) {
//         res.status(200).json({ "status": true, "mess": "delete friendNotification thành công" });
//       } else {
//         res.status(401).json({ "status": false, "mess": "Không tìm thấy friendNotification cần xóa" });
//       }
//     }
//   } catch (e) {
//     res.status(400).json({ "status": false, "message": "lỗi" });
//   }
// });



module.exports = router;
