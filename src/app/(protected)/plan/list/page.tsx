"use client";

import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import { List } from "@refinedev/mui";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AssignMoney from "./_components/assign-money";
import { usePlanList } from "../_hooks/use-plan-list";
import Categories from "./_components/categories";

export default function PlanPage() {
  const pathname = usePathname();
  const { planAreFetching, planData, categoriesData } = usePlanList();

  return (
    <List
      title={<Typography variant="h4">My Plan</Typography>}
      breadcrumb={
        pathname.includes("/edit") || pathname.includes("/create")
          ? null
          : undefined
      }
      headerButtons={
        !planAreFetching && (
          <Link href={`/plan/create`} passHref>
            <Button variant="contained" startIcon={<AddRounded />}>
              Create new Category
            </Button>
          </Link>
        )
      }
    >
      <>
        {planAreFetching ? (
          <CircularProgress />
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <AssignMoney planData={planData} />
            <Categories categoriesData={categoriesData} />
          </Box>
        )}
      </>
    </List>
  );
}
