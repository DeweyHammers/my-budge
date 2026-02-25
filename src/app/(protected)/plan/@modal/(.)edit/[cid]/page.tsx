"use client";

import FormModel from "@app/(protected)/_components/form/form-model";
import CategoryForm from "../../../_components/form";
import { useParsed } from "@refinedev/core";

export default function CategoryEditPage() {
  const { id } = useParsed();

  return (
    <FormModel resource="Category" action="edit">
      <CategoryForm action="edit" id={id} isModal />
    </FormModel>
  );
}
