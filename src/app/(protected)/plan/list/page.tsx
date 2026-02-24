"use client";

import { Box, Typography } from "@mui/material";
import { List } from "@refinedev/mui";
import AssignMoney from "./_components/assign-money";

export default function PlanPage() {
  return (
    <List title={<Typography variant="h4">My Plan</Typography>}>
      <Box>
        <AssignMoney />
      </Box>
    </List>
  );
}
