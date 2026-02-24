import { Typography } from "@mui/material";
import { TitleProps } from "./types";
import Link from "next/link";

export default function Title({ fontSize, clickHome }: TitleProps) {
  return (
    <Typography
      variant="handwriting"
      sx={{
        color: "#d9d5ff",
        fontWeight: "bold",
        fontSize,
        textDecoration: "none",
      }}
      component={clickHome ? Link : "span"}
      href={clickHome ? "/" : undefined}
    >
      My Budget
    </Typography>
  );
}
