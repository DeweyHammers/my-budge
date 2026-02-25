"use client";

import { useParsed } from "@refinedev/core";
import CategoryForm from "../../_components/form";

export default function CategoryEditPage() {
  const { id } = useParsed();

  return <CategoryForm action="edit" id={id} />;
}
