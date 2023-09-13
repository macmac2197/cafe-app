import React from "react";
import Stack from "@mui/material/Stack";
import Progress from "@mui/material/CircularProgress";

const CircularProgress: React.FC = () => {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <Progress color="secondary" />
    </Stack>
  );
};

export default CircularProgress;
