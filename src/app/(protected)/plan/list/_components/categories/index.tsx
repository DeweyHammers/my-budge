import { Box } from "@mui/material";
import { CategoriesProps } from "./types";
import CategoryList from "./_components/category-list";

export default function Categories({ categoriesData }: CategoriesProps) {
  return (
    <Box>
      {categoriesData?.map((category) => (
        <CategoryList key={category.id} categoryData={category} />
      ))}
    </Box>
  );
}
