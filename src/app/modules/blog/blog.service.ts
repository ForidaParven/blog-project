import mongoose, { ObjectId } from "mongoose";
import QueryBuilder from "../../builder/QueryBuilder";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model"

const createBlog = async (payload: IBlog) => {
    const blog = new Blog(payload);
    const result = await blog.save();
    return result;
}

const updateBlog = async (id:string, userId: ObjectId, updateData: any, role: string) => {

    const result = await Blog.findByIdAndUpdate(id, userId, {new: true});
}

const deleteBlog = async (id: string, userId: ObjectId, role: string) => {
    return await Blog.findOneAndDelete({id, userId });
};


const getAllBlogs = async (query: any) => {
    const searchableFields = ['title', 'content'];
    const queryBuilder = new QueryBuilder(Blog.find(), query)
      .search(searchableFields)
    //   .filter()
      .sort()
      .paginate()
      .fields();
  
    const result = await queryBuilder.modelQuery;
    return result;
  };



export const blogServiceSchema = {
    createBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs,
};