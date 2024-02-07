import { Paper, Stack, Typography, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { PointOfSale } from "@mui/icons-material";
import { PersonAdd } from "@mui/icons-material";
import { Traffic } from "@mui/icons-material";
import Card from "./card";
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icons={
          <EmailIcon
            sx={{ fontSize: "30px", color: theme.palette.secondary.main }}
          />
        }
        title={"12.361"}
        subTitle={"Email Sent"}
        data={data1}
        increase={"+14%"}
        scheme={"nivo"}
      />
      <Card
        icons={
          <PointOfSale
            sx={{ fontSize: "30px", color: theme.palette.secondary.main }}
          />
        }
        title={" 431.225"}
        subTitle={"sales obtained"}
        data={data2}
        increase={"+21%"}
        scheme={"category10"}
      />
      <Card
        icons={
          <PersonAdd
            sx={{ fontSize: "30px", color: theme.palette.secondary.main }}
          />
        }
        title={"12.361"}
        subTitle={"New Clients"}
        data={data3}
        increase={"+41%"}
        scheme={"pastel1"}
      />
      <Card
        icons={
          <Traffic
            sx={{ fontSize: "30px", color: theme.palette.secondary.main }}
          />
        }
        title={"56.369"}
        subTitle={"Traffic Received"}
        data={data4}
        increase={"+61%"}
        scheme={"set1"}
      />
    </Stack>
  );
};

export default Row1;
