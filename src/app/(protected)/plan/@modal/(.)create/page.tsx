"use client";

import FormModel from "@app/(protected)/_components/form/form-model";
import CategoryForm from "../../_components/form";

export default function CategoryCreatePage() {
  return (
    <FormModel resource="Category" action="create">
      <CategoryForm action="create" isModal />
    </FormModel>
  );
}
