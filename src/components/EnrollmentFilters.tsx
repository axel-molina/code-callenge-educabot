import type { FC } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import type { EnrollmentFilterStatus } from "../types/enrollment";

interface EnrollmentFiltersProps {
  currentFilter: EnrollmentFilterStatus;
  onFilterChange: (filter: EnrollmentFilterStatus) => void;
}

const EnrollmentFilters: FC<EnrollmentFiltersProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  const handleChange = (event: SelectChangeEvent<EnrollmentFilterStatus>) => {
    onFilterChange(event.target.value as EnrollmentFilterStatus);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="status-filter-label">Filter by Status</InputLabel>
        <Select
          labelId="status-filter-label"
          id="status-filter"
          value={currentFilter}
          label="Filter by Status"
          onChange={handleChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="confirmed">Confirmed</MenuItem>
          <MenuItem value="cancelled">Cancelled</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default EnrollmentFilters;
