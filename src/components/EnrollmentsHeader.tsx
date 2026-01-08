import type { FC } from "react";
import { Typography } from "@mui/material";

const EnrollmentsHeader: FC = () => {
  return (
    <Typography variant="h4" component="h1" gutterBottom>
      Enrollments Overview
    </Typography>
  );
};

export default EnrollmentsHeader;
