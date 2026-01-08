import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

type Props = {
  onCreate: (enrollment: any) => void;
};

export const NewEnrollmentForm: any = ({ onCreate }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name || !email || !workshop) return;

    const newEnrollment = {
      id: crypto.randomUUID(),
      student_name: name,
      email,
      workshop,
      status: "pending",
      created_at: new Date(),
    };

    onCreate(newEnrollment);
    setName("");
    setEmail("");
    setWorkshop("");
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        New Enrollment
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Workshop"
          variant="outlined"
          value={workshop}
          onChange={(e: any) => setWorkshop(e.target.value)}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </Box>
    </Paper>
  );
};
