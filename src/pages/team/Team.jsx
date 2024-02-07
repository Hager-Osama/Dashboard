import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
const Team = () => {
  const them = useTheme();

  const columns = [
    /*field is reqird */
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              padding: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? them.palette.primary.dark
                  : access === "Manager"
                  ? them.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}
            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            {access === "user" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            <Typography
              sx={{ fontSize: "13px", color: "#fff" }}
              variant="body1"
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box sx={{ height:450, width: "98%", mx: "auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Team;
