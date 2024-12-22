import {z} from 'zod';


const createBlogValidation = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    content: z.string().min(10, "Content must be at least 10 characters long"),
  });

  const updateBlogValidation = z.object({
    title: z.string().min(3).optional(),
    content: z.string().min(10).optional(),
  });

  export const blogValidationSchema = {
    createBlogValidation,
    updateBlogValidation,
  }