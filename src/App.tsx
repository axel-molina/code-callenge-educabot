import { Grid, Stack } from "@mui/material";
import NewEnrollmentForm from "./components/NewEnrollmentForm";
import Layout from "./components/Layout";
import useEnrollments from "./hooks/useEnrollments";
import LoadingLayout from "./components/LoadingLayout";
import AlertLayout from "./components/AlertLayout";
import EnrollmentsHeader from "./components/EnrollmentsHeader";
import EnrollmentsListCard from "./components/EnrollmentsListCard";

function App() {
  const {
    filteredEnrollments,
    loading,
    error,
    statusFilter,
    setStatusFilter,
    addEnrollment,
    confirmEnrollment,
  } = useEnrollments();

  if (loading) return <LoadingLayout />;

  if (error) return <AlertLayout error={error} />;

  return (
    <Layout>
      <Stack spacing={3}>
        <EnrollmentsHeader />
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 9 }}>
            <EnrollmentsListCard
              enrollments={filteredEnrollments}
              confirmEnrollment={confirmEnrollment}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <NewEnrollmentForm onCreate={addEnrollment} />
          </Grid>
        </Grid>
      </Stack>
    </Layout>
  );
}

export default App;
