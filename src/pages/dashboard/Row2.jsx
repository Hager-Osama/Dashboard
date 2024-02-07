import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LineChart from "../../pages/lineChart/lineChart";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={2}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth:"400px"}}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            {" "}
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <LineChart isDashBoard={true} />
      </Paper>

      <Box sx={{ flexGrow: 1,minWidth:"280px", maxHeight:380 ,overflow:"auto" }}>
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            padding={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        {Transactions.map((item)=>{
          return(
            <Paper
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box p={1.2}>
              <Typography variant="body1" fontWeight="600">
                {item.txtId}
              </Typography>
              <Typography variant="body2" fontWeight="600">
                {item.user}
              </Typography>
            </Box>
            <Typography variant="body1" fontWeight="600">
              {item.date}
            </Typography>
            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              color={theme.palette.getContrastText(theme.palette.error.main)}
              variant="body1"
            >
             {item.cost} $
            </Typography>
          </Paper>
          )
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
