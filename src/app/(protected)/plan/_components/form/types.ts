import { BaseKey } from "@refinedev/core";

export interface CategoryFormProps {
  action: "create" | "edit";
  id?: BaseKey | undefined;
  isModal?: boolean;
}
