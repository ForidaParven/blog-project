import mongoose, { ObjectId } from "mongoose";
import QueryBuilder from "../../builder/QueryBuilder";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model"
import { User } from "../user/user.model";

const createBlog = async (payload: IBlog, userId : string) => {
  // const user =await User.findOne({ email}, {_id:1})
    const blog = new Blog({...payload, author: userId});
    const result = (await blog.save()).populate({
      path:"author",
      select:"_id name email"
    })
    return result;
}

const updateBlog = async (id:string, userId: string, updateData: any) => {

  const blog = await Blog.findOne({_id:id});

if(!blog){
  return {success: false, message:" blog not found"}
}
if (!blog?.author.equals(userId)) {
  return {success: false, message: "You are not the author"};
}

    const result = await Blog.findByIdAndUpdate({_id:id},updateData,{new: true}).populate({
      path:"author",
      select:"_id name email",
    });
    
    return {success: true, message: "blog updated successfully", data: result};
}

const deleteBlog = async (_id: string) => {
    return await Blog.findOneAndDelete({_id});
};


const getAllBlogs = async (query: Record<string, unknown>) => {
    const searchableFields = ['title', 'content'];
    const blogs = new QueryBuilder(Blog.find(), query).search(searchableFields).sort().paginate().fields();

  
    const result = await blogs.modelQuery;
    return result;
  };

  
// const getAllBlogs = async (query: any) => {
//     const searchableFields = ['title', 'content'];
//     const queryBuilder = new QueryBuilder(Blog.find(), query)
//       .search(searchableFields)
//     //  .filter()
//       .sort()
//       .paginate()
//       .fields();
  
//     const result = await queryBuilder.modelQuery;
//     return result;
//   };



export const blogServiceSchema = {
    createBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs,
};