import { Box, Typography } from "@mui/material";
import moneyFormatter from "@utils/helpers/money-formatter";
import { AssignMoneyProps } from "./types";

export default function AssignMoney({ planData }: AssignMoneyProps) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.action.hover,
        p: "10px 20px",
        width: "300px",
        borderRadius: "10px",
      })}
    >
      <Typography variant="h5">{moneyFormatter(planData.assign)}</Typography>
      <Typography variant="overline">
        {Number(planData.assign) === 0 ? "All Money Assigned" : ""}
      </Typography>
    </Box>
  );
}
