import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import MyApps from "./MyApps";
import MostPopular from "./MostPopular";

interface Box {
  id: number;
  logo: string;
  heading: string;
  description: string;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

const Marketplace: React.FC = () => {
  const [initialBoxes, setInitialBoxes] = React.useState([
    {
      id: 1,
      logo: "logo1.png",
      heading: "Google Suite",
      description: "A COLLECTION OF GOOGLE SERVICES",
    },
    {
      id: 2,
      logo: "logo2.png",
      heading: "Google Meet",
      description: "VIDEO CALLS",
    },
  ]);

  const [myAppBoxes, setMyAppBoxes] = React.useState<Box[]>([]);

  const handleAddToMyApp = (box: Box) => {
    setMyAppBoxes([...myAppBoxes, box]);
  };

  const handleDeleteFromMyApp = (id: number) => {
    const updatedBoxes = myAppBoxes.filter((box) => box.id !== id);
    setMyAppBoxes(updatedBoxes);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container style={{ display: "flex" }}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom style={{ padding: "1.5rem" }}>
            Marketplace
          </Typography>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <MyApps
            initialBoxes={initialBoxes}
            myAppBoxes={myAppBoxes}
            onDelete={handleDeleteFromMyApp}
          />
          <Divider variant="middle" />
        </Grid>

        <Grid item xs={12}>
          <Container style={{ padding: 0, margin: 0 }}>
            <Grid container spacing={2} style={{ padding: 0, margin: 0 }}>
              <Grid item xs={12} sm={4} md={4}>
                <Item>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="body1">Management</Typography>
                    <ArrowForwardIcon />
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Item>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="body1">Utility</Typography>
                    <ArrowForwardIcon />
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item xs={12}>
          <MostPopular initialBoxes={initialBoxes} onAdd={handleAddToMyApp} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Marketplace;
