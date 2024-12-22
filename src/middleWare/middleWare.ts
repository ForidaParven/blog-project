import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: any; 
    }
  }
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ success: false, message: "Unauthorized" });
    return;   }

  try {
    const user = jwt.verify(token, process.env.JWT_ACCESS_SECRET!);
    req.user = user; 
    next(); 
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
