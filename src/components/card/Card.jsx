import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import img from "../../images/doctor.jpg";
import { doctors } from "../../data";

const CardComponent = () => {
  return (
    <>
      {doctors.map((doctor, index) => (
        <Card sx={{ maxWidth: 345 }} key={index}>
          <CardMedia
            component="img"
            alt="Doctor Image"
            height="140"
            image={img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {doctor.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {doctor.title}
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant="contained" color="primary">
                Check Availability
              </Button>
              <Button variant="contained" color="success">
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CardComponent;
