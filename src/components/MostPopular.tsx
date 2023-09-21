// MostPopular.tsx
import React from "react";

import { Container, Grid } from "@mui/material";
import BoxItem from "./BoxItem";

interface Box {
  id: number;
  logo: string;
  heading: string;
  description: string;
}

interface MostPopularProps {
  initialBoxes: Box[];
  onAdd: (box: Box) => void;
}

const MostPopular: React.FC<MostPopularProps> = ({ initialBoxes, onAdd }) => {
  return (
    <div style={{ padding: "1.5rem" }}>
      <h2>Most Popular</h2>

      <Container style={{ padding: 0, margin: 0 }}>
        <Grid
          container
          spacing={2}
          style={{ padding: 0, margin: 0, minHeight: "100px" }}
        >
          {initialBoxes.map((box) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={box.id}
              style={{
                padding: 0,
                margin: 0,
                paddingRight: "1rem",
                height: "100%",
              }}
            >
              <BoxItem
                logo={box.logo}
                heading={box.heading}
                description={box.description}
                from="mostpopular"
                proceed={() => onAdd(box)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MostPopular;
