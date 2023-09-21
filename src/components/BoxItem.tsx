// BoxItem.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

interface BoxItemProps {
  logo: string;
  heading: string;
  description: string;
  from: string;
  proceed: () => void;
}

const boxStyle = {
  backgroundColor: "#f0f0f0", // Light gray background color
  height: "80px",
};

const descriptionStyle = {
  maxHeight: "100px",
  overflow: "hidden",
};

const BoxItem: React.FC<BoxItemProps> = ({
  logo,
  heading,
  description,
  from,
  proceed,
}) => {
  return (
    <Card>
      <CardContent style={boxStyle}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar alt="Logo" src={logo} />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h5">{heading}</Typography>
            <Typography
              variant="inherit"
              color="textSecondary"
              style={descriptionStyle}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <CardActions>
              {from === "myapps" ? (
                <IconButton aria-label="Delete" onClick={proceed}>
                  <DeleteIcon />
                </IconButton>
              ) : (
                <IconButton aria-label="Delete" onClick={proceed}>
                  <AddIcon />
                </IconButton>
              )}
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BoxItem;
