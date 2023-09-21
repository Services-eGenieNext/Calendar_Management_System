import React from "react";

import Paper from "@mui/material/Paper";

import { Container, Grid } from "@mui/material";
import BoxItem from "./BoxItem";

import { styled } from "@mui/material/styles";

interface Box {
  id: number;
  logo: string;
  heading: string;
  description: string;
}

interface MyAppsProps {
  initialBoxes: Box[];
  myAppBoxes: Box[];
  onDelete: (id: number) => void;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MyApps: React.FC<MyAppsProps> = ({
  initialBoxes,
  myAppBoxes,
  onDelete,
}) => {
  const handleDelete = (id: number) => {
    // Implement the delete functionality for a box with the given id
  };

  return (
    <div style={{ padding: "1.5rem" }}>
      <h2>My Apps</h2>
      <Container style={{ padding: 0, margin: 0 }}>
        <Grid container spacing={2} style={{ padding: 0, margin: 0 }}>
          {myAppBoxes.map((box) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={box.id}
              style={{ padding: 0, margin: 0, paddingRight: "1rem" }}
            >
              <BoxItem
                logo={box.logo}
                heading={box.heading}
                description={box.description}
                from={"myapps"}
                proceed={() => onDelete(box.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MyApps;
