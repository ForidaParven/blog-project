import QueryBuilder from "../../builder/QueryBuilder";
import { User } from "../user/user.model";
import { Blog } from "./blog.model"

const createBlog = async (blogData: any) => {
    const blog = new Blog(blogData);
    const result = await blog.save();
    return result;
}

const updateBlog = async (id:string, userId: string, updateData: any, role: string) => {
    if(role !== 'admin'){
        const blog = await Blog.findOne({_id: id, author: userId});
        if(!blog) 
        throw new Error('Not authorized to update this blog.')
    }

    const result = await Blog.findByIdAndUpdate(id, updateData, {new: true});
}

const deleteBlog = async (id: string, userId: string, role: string) => {
    if(role === 'admin'){
        return await Blog.findByIdAndDelete(id);
    }

    return await Blog.findOneAndDelete({ _id: id, author: userId });
};


const getAllBlogs = async (query: any) => {
    const searchableFields = ['title', 'content'];
    const queryBuilder = new QueryBuilder(Blog.find(), query)
      .search(searchableFields)
      .filter()
      .sort()
      .paginate()
      .fields();
  
    const result = await queryBuilder.modelQuery;
    return result;
  };

const blockUser = async (userId: string) => {
    const user = await User.findByIdAndUpdate(userId, { isBlocked: true}, {new: true});
    if(!user)
        throw new Error('User not found');
    return user;
};

export const blogServiceSchema = {
    createBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs,
    blockUser,
};