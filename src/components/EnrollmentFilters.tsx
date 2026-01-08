import type { FC } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import type { SelectChangeEvent } from "@mui/material";
import type { EnrollmentFilterStatus } from "../types/enrollment";

interface EnrollmentFiltersProps {
  currentFilter: EnrollmentFilterStatus;
  onFilterChange: (filter: EnrollmentFilterStatus) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const EnrollmentFilters: FC<EnrollmentFiltersProps> = ({
  currentFilter,
  onFilterChange,
  searchTerm,
  onSearchChange,
}) => {
  const handleStatusChange = (
    event: SelectChangeEvent<EnrollmentFilterStatus>
  ) => {
    onFilterChange(event.target.value as EnrollmentFilterStatus);
  };

  const handleRefresh = () => {
    onFilterChange("all");
    onSearchChange("");
  };

  return (
    <Box
      sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}
    >
      <TextField
        placeholder="Search name or email..."
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{ minWidth: 250 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="status-filter-label">Status</InputLabel>
          <Select
            labelId="status-filter-label"
            id="status-filter"
            value={currentFilter}
            label="Status"
            onChange={handleStatusChange}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="confirmed">Confirmed</MenuItem>
            <MenuItem value="cancelled">Cancelled</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Tooltip title="Reset filters">
        <IconButton onClick={handleRefresh} color="primary" size="small">
          <RefreshIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default EnrollmentFilters;
