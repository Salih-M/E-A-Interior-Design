import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ImgHero from "../../images/women-interior-design.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: { xs: "", md: "space-between" },
        backgroundColor: "#f5f5f5",
        height: "100vh",
        padding: "20px",
        marginTop: "45px"
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t("heroSection.title")}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          {t("heroSection.subtitle")}
        </Typography>
        <Link to="/contact">
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              fontSize: "16px",
              "&:hover": { bgcolor: "darkgray" },
            }}
          >
            {t("global.getStarted")}
          </Button>
        </Link>
      </Container>
      <Box
        component="img"
        sx={{
          width: { xs: "100%", md: "40%" },
          height: "auto",
          backgroundColor: "#f5f5f5",
          mt: { xs: 3, md: 0 },
          borderRadius: 3,
          boxShadow: 3,
        }}
        alt="Hero"
        src={ImgHero}
      />
    </Box>
  );
};

export default HeroSection;
