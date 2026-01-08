import type { FC } from "react";
import { Alert } from "@mui/material";
import Layout from "./Layout";

interface AlertLayoutProps {
  error: Error | null;
}

const AlertLayout: FC<AlertLayoutProps> = ({ error }) => {
  return (
    <Layout>
      <Alert severity="error">
        {error?.message || "An unknown error occurred"}
      </Alert>
    </Layout>
  );
};

export default AlertLayout;
