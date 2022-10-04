import express from "express";
import {logout, register,verify ,removeTask,updateTask,addTask,getMyProfile,updatePassword,forgetPassword, resetPassword}from "../controller/User.js";
import {isAuthenticated}  from "../middleware/auth.js";
import { login } from "../controller/User.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/verify").post(isAuthenticated,verify);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/newtask").post(isAuthenticated, addTask);
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/updatepassword").put(isAuthenticated, updatePassword);
router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword").put(resetPassword);
router
  .route("/task/:taskId")
  .get(isAuthenticated, updateTask)
  .delete(isAuthenticated, removeTask);
export default router;
 