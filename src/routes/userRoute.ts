import { Router, Request, Response } from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/userController";

const router = Router();

router.get("/get-users", getUsers);
router.post("/create-user", createUser);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);



export default router;
