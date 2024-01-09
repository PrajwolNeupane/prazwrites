import { object, string, array, mixed } from "yup";

export const addBlogSchema = object({
  title: string().required("Title is required"),
  image: string().url().required("Image url is required"),
  category: string().required("Category is required"),
  description: array()
    .of(
      object({
        content: mixed().nullable(),
        code: mixed().nullable(),
      })
    )
    .min(1) // Ensure the array is not empty
    .required("Description is requried"),
});

export const adminLoginSchema = object({
  email: string().email("Invalid Email").required("Email is required"),
  password: string().required("Password is reaquired"),
});
