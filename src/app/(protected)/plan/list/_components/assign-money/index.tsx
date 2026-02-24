import { Box, Typography } from "@mui/material";

export default function AssignMoney() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.action.hover,
        p: "10px 20px",
        width: "300px",
        borderRadius: "10px",
      })}
    >
      <Typography variant="h5">$0.00</Typography>
      <Typography variant="overline">All Money Assigned</Typography>
    </Box>
  );
}
