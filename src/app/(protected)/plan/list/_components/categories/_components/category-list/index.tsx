import { CategoryListProps } from "./types";

import { Accordion, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CategoryList({ categoryData }: CategoryListProps) {
  return (
    <Box>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" component="span">
            {categoryData.name}
          </Typography>
        </AccordionSummary>
      </Accordion>
    </Box>
  );
}
