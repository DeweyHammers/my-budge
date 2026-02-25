import z from "zod";

export const categoriesCreateSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export type CategoriesCreateFormValues = z.infer<typeof categoriesCreateSchema>;
