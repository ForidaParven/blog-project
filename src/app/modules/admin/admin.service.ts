import { ObjectId } from "mongoose";
import { User } from "../user/user.model";
import { Blog } from "../blog/blog.model";

const blockUser = async (userId: string) => {
    const user = await User.findByIdAndUpdate(userId, { isBlocked: true}, {new: true});
    return user;
};

const blogDelete = async (id: string) => {
    const result = await Blog.findByIdAndDelete({id });
    return result;
};

export const adminServiceSchema = {
    blockUser,blogDelete,
}