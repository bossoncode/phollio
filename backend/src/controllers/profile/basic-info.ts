import { Request, Response } from "express";
import User from "../../schema/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const getBasicInfo = async (req: Request, res: Response) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const uuid = decoded.uuid;
    const user = await User.User.findOne({ _id: uuid });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const email = user.email;
    const username = user.username;
    const isEmailVerified = user.isEmailVerified;
    const displayName = user.displayName;
    const bio = user.bio;
    return res.json({ email, username, isEmailVerified, displayName, bio });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export default getBasicInfo;
