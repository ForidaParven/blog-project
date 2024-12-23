import { ObjectId } from "mongoose";
import { User } from "../user/user.model";
import { Blog } from "../blog/blog.model";

const blockUser = async (userId: ObjectId) => {
    const user = await User.findByIdAndUpdate(userId, { isBlocked: true}, {new: true});
    return user;
};

const blogDelete = async (id: string, userId: ObjectId) => {
    const result = await Blog.findByIdAndDelete({id, userId });
    return result;
};

export const adminServiceSchema = {
    blockUser,blogDelete,
}