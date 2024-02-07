import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import PieChart from "../../pages/pieChart/pieChart";
import Bar from "../../pages/barchart/bar";
import Geo from "../../pages/geagraphy/geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={2}>
      <Paper
        sx={{
          minWidth: "400px",
          flexGrow: 1,
          width: "28%",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>

        <PieChart isDashbord={true} />

        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48.352 revenue generated
        </Typography>
        <Typography variant="body2" align="center" px={0.7} pb={3}>
          Includes extra misc costs
        </Typography>
      </Paper>
      <Paper
        sx={{
          minWidth: "400px",
          flexGrow: 1,
          width: "33%",
        }}
      >
        {" "}
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Sales Quentity
        </Typography>
        <Bar isDashbord={true} />
      </Paper>
      <Paper
        sx={{
          minWidth: "400px",
          flexGrow: 1,
          width: "33%",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Sales Quentity
        </Typography>
        <Geo isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
