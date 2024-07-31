import React from "react";
import Avatar1 from "../../images/avatar_img.webp";
import Avatar2 from "../../images/avatar_img_2.webp";
import Avatar3 from "../../images/avatar_img_3.webp";
import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Box,
  Rating,
} from "@mui/material";

const CustomerReview = () => {
  const reviews = [
    {
      name: "John Doe",
      avatar: Avatar1,
      rating: 4,
      date: "2024-02-20",
      text: "Great service i liked the design and we enjoy living the style!",
    },
    {
      name: "Jane Smith",
      avatar: Avatar2,
      rating: 5,
      date: "2024-05-21",
      text: "Amazing experience, highly recommended!",
    },
    {
      name: "Joan Terry",
      avatar: Avatar3,
      rating: 5,
      date: "2024-03-21",
      text: "My kids love it !",
    },
  ];

  const [paused, setPaused] = useState(false);

  const handleMouseEnter = () => {
    setPaused(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  return (
    <>
  <div className="slider mb-8" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`slide-track ${paused ? "paused" : ""}`} >
        {reviews.concat(reviews).map((review, index) => (
          <Box key={index} className="slide" sx={{ padding: 2 }}>
            <Card sx={{ minWidth: 300,minHeight:200, margin: "auto" }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar alt={review.name} src={review.avatar} />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6">{review.name}</Typography>
                    <Rating value={review.rating} readOnly />
                    <Typography variant="body2" color="text.secondary">
                      {review.date}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {review.text}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        ))}
      </div>
    </div>
    </>
  );
};
export default CustomerReview;
