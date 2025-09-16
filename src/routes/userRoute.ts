import { Router, Request, Response } from "express";
import upload from "../config/multer";
import { getUsers, createUser, updateUser, deleteUser, updateUserProfileImage, loginUser } from "../controllers/userController";
import { authenticateToken } from "../middlewares/userAuth";

const router = Router();

router.get("/get-users", authenticateToken, getUsers);
router.post("/create-user", upload.single("file"), createUser);
router.put("/update-user/:id", authenticateToken, updateUser);
router.put("/update-user-profile-image/:id", authenticateToken, upload.single("file"), updateUserProfileImage);
router.delete("/delete-user/:id", authenticateToken, deleteUser);
router.post("/login", loginUser);


export default router;
