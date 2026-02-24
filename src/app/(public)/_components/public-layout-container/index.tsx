"use client";

import { Box } from "@mui/material";
import { PublicLayoutContainerProps } from "./types";

export default function PublicLayoutContainer({
  children,
}: PublicLayoutContainerProps) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.action.disabledBackground,
        height: "100vh",
      })}
    >
      {children}
    </Box>
  );
}
