import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const NotFound = () => {
  const Theme = useTheme();
  return (
    <Box>
      <Typography  align="center" color={Theme.palette.error.main} variant="h5">
        There is no design yet
        <br />
        <br /> 
        please try again later ....
      </Typography>
    </Box>
  );
};

export default NotFound;
