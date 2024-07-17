import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";

const DesignPage = ({
  title,
  description,
  subtitle,
  subDescription,
  images,
  backgroundColor,
  textColor
}) => {
  return (
    <div className={`flex ${backgroundColor} ${textColor}`}>
      <Box sx={{ width: "50%", height: 753, padding: "140px" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {images.map((item, index) => (
            <ImageListItem key={index}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
               
                position="below"
                title={item.author}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box
        sx={{
          width: "50%",
          padding: "90px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          className="animate-slideIn"
          sx={{
            textAlign: "left",
            marginTop: "40px",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          className="animate-slideIn"
          sx={{
            textAlign: "left",
          }}
        >
          {description}
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          className="animate-slideIn"
          gutterBottom
          sx={{
            textAlign: "left",
            marginTop: "40px",
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          className="animate-slideIn"
          sx={{
            textAlign: "left",
          }}
        >
          {subDescription}
        </Typography>
      </Box>
    </div>
  );
};

export default DesignPage;
