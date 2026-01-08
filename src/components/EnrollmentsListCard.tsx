import type { FC } from "react";
import { Card, CardContent, Stack, Box, Typography } from "@mui/material";
import EnrollmentFilters from "./EnrollmentFilters";
import EnrollmentTable from "./EnrollmentTable";
import type { Enrollment, EnrollmentFilterStatus } from "../types/enrollment";

interface EnrollmentsListCardProps {
  enrollments: Enrollment[];
  confirmEnrollment: (id: string) => void;
  statusFilter: EnrollmentFilterStatus;
  setStatusFilter: (filter: EnrollmentFilterStatus) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const EnrollmentsListCard: FC<EnrollmentsListCardProps> = ({
  enrollments,
  confirmEnrollment,
  statusFilter,
  setStatusFilter,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography variant="h6">Enrollments List</Typography>
            <EnrollmentFilters
              currentFilter={statusFilter}
              onFilterChange={setStatusFilter}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </Box>
          <EnrollmentTable
            enrollments={enrollments}
            onConfirm={confirmEnrollment}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EnrollmentsListCard;
