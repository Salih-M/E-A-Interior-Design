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
      <ImageList sx={{ width: "50%", height: "100%" }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                  onClick={() => handleDialogOpen(item)}
                >
                  <InfoIcon  />
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
            <strong>{t("projectSection.price")}:</strong> {selectedItem?.price}
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
            {t('global.close')}
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
    location: "San Marino, California",
    price: "$2,000,000",
  },
  {
    img: Img2,
    title: "Bodrum",
    author: "E | A",
    location: "Beverly Hills, California",
    price: "$5,000,000",
  },
  {
    img: Img3,
    title: "Tulum",
    author: "E | A",
    location: "Malibu, California",
    price: "$3,500,000",
  },
  {
    img: Img4,
    title: "Bali",
    author: "E | A",
    location: "Pasadena, California",
    price: "$4,000,000",
  },
];
