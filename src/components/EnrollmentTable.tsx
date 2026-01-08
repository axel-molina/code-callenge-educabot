import type { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  Typography,
} from "@mui/material";
import type { Enrollment, EnrollmentStatus } from "../types/enrollment";

export const getStatusColor = (
  status: EnrollmentStatus
): "success" | "warning" | "error" | "default" => {
  switch (status) {
    case "confirmed":
      return "success";
    case "pending":
      return "warning";
    case "cancelled":
      return "error";
    default:
      return "default";
  }
};

interface EnrollmentTableProps {
  enrollments: Enrollment[];
  onConfirm: (id: string) => void;
}

const EnrollmentTable: FC<EnrollmentTableProps> = ({
  enrollments,
  onConfirm,
}) => {
  if (!enrollments || enrollments.length === 0) {
    return <Typography>No enrollments found.</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 500, width: "100%" }}
        aria-label="enrollments table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Workshop</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {enrollments.map((enrollment: Enrollment) => (
            <TableRow
              key={enrollment.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {enrollment.student_name}
              </TableCell>
              <TableCell>{enrollment.email}</TableCell>
              <TableCell>{enrollment.workshop}</TableCell>
              <TableCell>
                <Chip
                  label={enrollment.status}
                  color={getStatusColor(enrollment.status)}
                  size="small"
                />
              </TableCell>
              <TableCell>
                {enrollment.created_at.toLocaleDateString()}
              </TableCell>
              <TableCell>
                {enrollment.status === "pending" && (
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => onConfirm(enrollment.id)}
                  >
                    Confirm
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EnrollmentTable;
