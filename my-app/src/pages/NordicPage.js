import React from "react";
import DesignPage from "../components/DesignPage/DesignPage";
import { useTranslation } from "react-i18next";
import NordicInterior from "../../src/images/nordics-interior-design.jpg";
import NordicKitchen from "../../src/images/nordic-kitchen.webp";
import NordicBedroom from "../../src/images/nordic-bedroom.jpg";
import NordicBathroom from "../../src/images/nordic-bathroom.webp";
import NordicLivingRoom from "../../src/images/nordic-livingroom.jpg";
import NordicDecoration from "../../src/images/nordic-decoration.webp";

const NordicPage = () => {
  const { t } = useTranslation();

  const itemData = [
    {
      img: NordicInterior,
      title: "Bed",
      author: "Nordic Livingroom",
    },
    {
      img: NordicKitchen,
      title: "Books",
      author: "Nordic Kitchen",
    },
    {
      img: NordicBedroom,
      title: "Sink",
      author: "Nordic Bedroom",
    },
    {
      img: NordicBathroom,
      title: "Kitchen",
      author: "Nordic Bathroom",
    },
    {
      img: NordicLivingRoom,
      title: "Kitchen",
      author: "Nordic Livingroom",
    },
    {
      img: NordicDecoration,
      title: "Kitchen",
      author: "Nordic Decoration",
    },
  ];

  return (
    <DesignPage
      title={t("nordicPage.title")}
      description={t("nordicPage.description")}
      subtitle={t("nordicPage.subtitle")}
      subDescription={t("nordicPage.subDescription")}
      images={itemData}
      backgroundColor="bg-customGray"
      textColor="text-black"
    />
  );
};

export default NordicPage;
