import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Img1 from "../../images/SanMarino.webp";
import Img2 from "../../images/dream-home.jpg";
import Img3 from "../../images/hero-image.jpg";
import Img4 from "../../images/Crossed_House-01.webp";
import { t } from "i18next";

export default function TitlebarImageList() {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleDialogOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="flex justify-center py-24 bg-black">
      <ImageList sx={{ width: { xs: "90%", md: "50%" }, height: "100%" }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.projectType}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.projectType}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.projectType}`}
                  onClick={() => handleDialogOpen(item)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="item-dialog-title"
      >
        <DialogTitle id="item-dialog-title">{selectedItem?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <strong>{t("projectSection.location")}:</strong>{" "}
            {selectedItem?.location}
          </DialogContentText>
          <DialogContentText>
            <strong>{t("projectSection.style")}:</strong> {selectedItem?.designStyle}
          </DialogContentText>
          <DialogContentText>
            <strong>{t("projectSection.material")}:</strong> {selectedItem?.materialsUsed}
          </DialogContentText>
          <DialogContentText>
            <strong>{t("projectSection.specialFutures")}:</strong> {selectedItem?.specialFeatures}
          </DialogContentText>
          <DialogContentText>
            <strong>{t("projectSection.description")}:</strong> {selectedItem?.description}
          </DialogContentText>
          <DialogContentText>
            <strong>{t("projectSection.completionDate")}:</strong> {selectedItem?.completionDate}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDialogClose}
            sx={{
              bgcolor: "black",
              color: "white",
              fontSize: "10px",
              "&:hover": { bgcolor: "darkgray" },
            }}
          >
            {t("global.close")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const itemData = [
  {
    img: Img1,
    title: "San Marino",
    author: "E | A",
    location: "San Marino",
    projectType: "Private Villa",
    designStyle: "Modern Mediterranean",
    materialsUsed: "Natural stone - glass - wood",
    specialFeatures: "Infinity pool with panoramic views",
    completionDate: "2021",
    description: "External interior design for a private villa in San Marino, blending modern elements with classic Mediterranean style.",
  },
  {
    img: Img2,
    title: "Bodrum",
    author: "E | A",
    location: "Bodrum, Turkey",
    projectType: "Seaside Villa",
    designStyle: "Minimalist",
    materialsUsed: "Stone - concrete - wood",
    specialFeatures: "Private dock and beachfront",
    completionDate: "2022",
    description: "A luxurious outdoor design for a seaside villa in Bodrum, incorporating natural stone and minimalist aesthetics.",
  },
  {
    img: Img3,
    title: "Tulum",
    author: "E | A",
    location: "Tulum, Mexico",
    projectType: "Beachside Retreat",
    designStyle: "Eco-friendly",
    materialsUsed: "Bamboo - thatch - concrete",
    specialFeatures: "Sustainable construction with solar panels",
    completionDate: "2019",
    description: "Eco-friendly exterior design for a beachside retreat in Tulum, inspired by local culture and tropical landscapes.",
  },
  {
    img: Img4,
    title: "Bali",
    author: "E | A",
    location: "Bali - Indonesia",
    projectType: "Private Resort",
    designStyle: "Tropical",
    materialsUsed: "Glass - stone",
    specialFeatures: "Seamless indoor-outdoor living",
    completionDate: "2023",
    description: "Exotic exterior design for a private resort in Bali, focusing on natural materials and seamless integration with nature.",
  },
];