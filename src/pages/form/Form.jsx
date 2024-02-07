import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm } from "react-hook-form";


const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset, // Import the reset function from react-hook-form
  } = useForm();

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const onSubmit = () => {
    handleClick();
    // Clear the form data after successful submission
    reset();
    
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          error={Boolean(errors.FirstName)}
          helperText={
            Boolean(errors.FirstName) ? "This field is required." : null
          }
          {...register("FirstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          id="filled-basic"
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.LastName)}
          helperText={
            Boolean(errors.LastName)
              ? "This field is required & min 3 character"
              : null
          }
          {...register("LastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          id="filled-basic"
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={Boolean(errors.Email)}
        helperText={
          Boolean(errors.Email) ? "Please provide a valid email address." : null
        }
        {...register("Email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.ContactNumber)}
        helperText={
          Boolean(errors.ContactNumber)
            ? "Please provide a valid Phone Number."
            : null
        }
        {...register("ContactNumber", { required: true, pattern: regPhone })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Adress 1" variant="filled" />
      <TextField label="Adress 2" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          sx={{ textTransform: "capitalize" }}
          type="submit"
          variant="contained"
        >
          create New User
        </Button>
        <Snackbar
          anchorOrigin={{ vertical:"top",  horizontal:"right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info">
            Account created successflly
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
