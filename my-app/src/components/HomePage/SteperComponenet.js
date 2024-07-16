import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import Img1 from "../../images/empty-space.webp";
import Img2 from "../../images/unique-fireplace-1.jpg";
import Img3 from "../../images/interior-design-scene-3d.jpg";


const SteperComponent = () => {
  const { t } = useTranslation();
  const step = [
    {
      number: 1,
      title: t("steperSection.0.title"),
      description: t("steperSection.0.description"),
      image: Img1,
      link: "/detail/1",
    },
    {
      number: 2,
      title: t("steperSection.1.title"),
      description: t("steperSection.1.description"),
      image: Img2,
      link: "/detail/2",
    },
    {
      number: 3,
      title: t("steperSection.2.title"),
      description: t("steperSection.2.description"),
      image: Img3,
      link: "/detail/3",
    },
  ];
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        overflowX: "auto",
        padding: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      {step.map((step, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              textAlign: "left",
              width: 300,
              margin: "0 20px",
            }}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "20px",
                }}
              >
                {step.number}
              </Box>
            </Container>
            <Box
              component="img"
              src={step.image}
              alt={step.title}
              sx={{
                width: "100%",
                height: "auto",
                marginBottom: "20px",
                borderRadius: "8px",
              }}
            />
            <Typography variant="h6" gutterBottom>
              {step.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {step.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "left",
                p: "0",
              }}
            >
              <Button
                variant="text"
                href={step.link}
                sx={{
                  marginTop: "10px",
                  p: "0",
                  color: "black",
                  "&:hover": { bgcolor: "secondary" },
                }}
              >
              {t('global.learnMore')}
              </Button>
            </Box>
          </Container>
        </Box>
      ))}
    </Box>
  );
};
export default SteperComponent;
