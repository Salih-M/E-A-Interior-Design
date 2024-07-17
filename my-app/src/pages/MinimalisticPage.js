import React from "react";
import DesignPage from "../components/DesignPage/DesignPage";
import { useTranslation } from "react-i18next";
import MinimalisticRoom from "../../src/images/minimalistic-room.avif";
import MinimalisticSofa from "../../src/images/minimalistic-sofa.jpg";
import MinimalisticJapanese from "../../src/images/minimalist-Japanese-Interio.jpeg";
import MinimalisticKitchen from "../../src/images/Minimalist-Luxury-Kitchen.jpg.webp";
import MinimalisticRestArea from "../../src/images/keope_element_design-taupe.webp";
import MinimalisticLivingRoom from "../../src/images/Element-Design.jpg";
import MinimalisticBedroom from "../../src/images/minimalist-bedroom.jpg";

const MinimalisticPage = () => {
  const { t } = useTranslation();

  const itemData = [
    {
      img: MinimalisticRoom,
      title: "Bed",
      author: "Minimalistic Nordic Style",
    },
    {
      img: MinimalisticSofa,
      title: "Books",
      author: "Minimalistic Sofa",
    },
    {
      img: MinimalisticJapanese,
      title: "Sink",
      author: "Minimalistic Japanese",
    },
    {
      img: MinimalisticKitchen,
      title: "Kitchen",
      author: "Minimalistic Wooden Kitchen",
    },
    {
      img: MinimalisticRestArea,
      title: "Blinds",
      author: "Minimalistic Rest Spot",
    },
    {
      img: MinimalisticLivingRoom,
      title: "Chairs",
      author: "Minimalistic Living Room",
    },
    {
      img: MinimalisticBedroom,
      title: "Chairs",
      author: "Minimalistic Bedroom",
    },
  ];

  return (
    <DesignPage
      title={t("minimalisticPage.title")}
      description={t("minimalisticPage.description")}
      subtitle={t("minimalisticPage.subtitle")}
      subDescription={t("minimalisticPage.subDescription")}
      images={itemData}
      backgroundColor="bg-black"
      textColor="text-white"
    />
  );
};

export default MinimalisticPage;
