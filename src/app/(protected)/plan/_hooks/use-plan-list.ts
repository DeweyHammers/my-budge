"use client";

import { Category, Plan } from "@generated/prisma/client";
import { useGetIdentity, useList } from "@refinedev/core";

export function usePlanList() {
  const { data: user } = useGetIdentity();

  const { result: planResult, query: planQuery } = useList<Plan>({
    resource: "plans",
    filters: [
      {
        field: "userId",
        operator: "eq",
        value: user?.id,
      },
    ],
  });

  const { result: categoriesResult } = useList<Category>({
    resource: "categories",
    filters: [
      {
        field: "planId",
        operator: "eq",
        value: planResult.data[0]?.id,
      },
    ],
  });

  return {
    planAreFetching: planQuery.isLoading,
    planData: planResult.data[0],
    categoriesData: planQuery.isLoading ? [] : categoriesResult.data,
  };
}
