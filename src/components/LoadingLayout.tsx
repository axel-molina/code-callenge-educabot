import type { FC } from "react";
import { Box, CircularProgress } from "@mui/material";
import Layout from "./Layout";

const LoadingLayout: FC = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    </Layout>
  );
};

export default LoadingLayout;
