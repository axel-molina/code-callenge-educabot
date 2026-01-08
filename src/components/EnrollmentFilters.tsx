import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

export const EnrollmentFilters: any = ({
  currentFilter,
  onFilterChange,
}: any) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="status-filter-label">Filter by Status</InputLabel>
        <Select
          labelId="status-filter-label"
          id="status-filter"
          value={currentFilter}
          label="Filter by Status"
          onChange={(e) => onFilterChange(e.target.value)}
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
