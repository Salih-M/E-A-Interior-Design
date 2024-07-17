import React from "react";
import DesignPage from "../components/DesignPage/DesignPage";
import { useTranslation } from "react-i18next";
import ModernBathroom from "../../src/images/modern-bathroom.webp";
import ModernBedroom from "../../src/images/modern-bedroom-design.jpeg";
import ModernKitchenDesign from "../../src/images/modern-kitcheen.jpg";
import ModernKitchen from "../../src/images/modern-kitcheen1.webp";
import ModernLivingRoom from "../../src/images/modern-living-room.jpg";
import ModernLivingRoomDesign from "../../src/images/modern-living-room1.webp";
import ModernWorkoffice from "../../src/images/modern-workofice.jpg";
import ModernSpace from "../../src/images/modern-space.jpg";

const ModernPage = () => {
  const { t } = useTranslation();

  const itemData = [
    {
      img: ModernBathroom,
      title: "Bed",
      author: "Modern Bathroom",
    },
    {
      img: ModernBedroom,
      title: "Books",
      author: "Modern Bedroom",
    },
    {
      img: ModernKitchenDesign,
      title: "Sink",
      author: "Modern Kitchen",
    },
    {
      img: ModernLivingRoom,
      title: "Kitchen",
      author: "Modern Living Room",
    },
    {
      img: ModernKitchen,
      title: "Kitchen",
      author: "Modern Kitchen",
    },
    {
      img: ModernLivingRoomDesign,
      title: "Kitchen",
      author: "Modern Living Room",
    },
    {
      img: ModernWorkoffice,
      title: "Kitchen",
      author: "Modern Workofice",
    },
    {
      img: ModernSpace,
      title: "Kitchen",
      author: "Modern Space",
    },
  ];

  return (
    <DesignPage
      title={t("modernPage.title")}
      description={t("modernPage.description")}
      subtitle={t("modernPage.subtitle")}
      subDescription={t("modernPage.subDescription")}
      images={itemData}
      backgroundColor="bg-black"
      textColor="text-white"
    />
  );
};

export default ModernPage;
