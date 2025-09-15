import { Request, Response } from "express";
import User from "../models/userModel";


export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const photoUrl = (req.file as any)?.path || null;
    const newUser = await User.create({ name, email, password, profileImage: photoUrl });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.set({ name, email, password });
    await user.save();
    res.json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const updateUserProfileImage = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const photoUrl = (req.file as any)?.path || null;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.set({ profileImage: photoUrl });
    await user.save();
    res.json(user);
  } catch (error) {
    console.error("Error updating user profile image:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.destroy();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

