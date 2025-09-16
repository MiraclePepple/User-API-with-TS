import { Request, Response, NextFunction } from "express";

interface AdminRequest extends Request {
    user? : { role: string };
}
export const adminAuth = (req: AdminRequest, res: Response, next: NextFunction) => {
    if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden: Admins only" });
  }
  next();
};