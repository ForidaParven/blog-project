import mongoose, { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        author: { type: mongoose.Schema.Types.ObjectId, 
                 ref: "User", 
                required: true },
        isPublished: { type: Boolean, default: true },
      },
      {
        timestamps: true,
      }
  );
  
  // 3. Create a Model.
 export const Blog = model<IBlog>('Blog', blogSchema);