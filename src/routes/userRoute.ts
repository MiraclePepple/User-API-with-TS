import { Router, Request, Response } from "express";
import upload from "../config/multer";
import { getUsers, createUser, updateUser, deleteUser, updateUserProfileImage, loginUser } from "../controllers/userController";
import { authenticateToken } from "../middlewares/userAuth";
import { adminAuth } from "../middlewares/adminAuth";

const router = Router();

router.get("/get-users", authenticateToken, adminAuth,getUsers);
router.post("/create-user", upload.single("file"), createUser);
router.put("/update-user/:id", authenticateToken, adminAuth, updateUser);
router.put("/update-user-profile-image/:id", authenticateToken, adminAuth, upload.single("file"), updateUserProfileImage);
router.delete("/delete-user/:id", authenticateToken, adminAuth, deleteUser);
router.post("/login", loginUser);


export default router;
