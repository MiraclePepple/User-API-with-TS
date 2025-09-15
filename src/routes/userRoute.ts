import { Router, Request, Response } from "express";
import upload from "../config/multer";
import { getUsers, createUser, updateUser, deleteUser, updateUserProfileImage } from "../controllers/userController";

const router = Router();

router.get("/get-users", getUsers);
router.post("/create-user", upload.single("file"), createUser);
router.put("/update-user/:id", updateUser);
router.put("/update-user-profile-image/:id", upload.single("file"), updateUserProfileImage);
router.delete("/delete-user/:id", deleteUser);



export default router;
