import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import ArchitectureDesignLeft from "../../src/images/row-1-column-11.jpg";
import ArchitectureDesignMiddle from "../../src/images/row-1-column-22.jpg";
import ArchitectureDesignRight from "../../src/images/row-1-column-33.jpg";
import InteriorColorPalleteLeft from "../../src/images/row-1-column-1.webp";
import InteriorColorPalleteRight from "../../src/images/row-1-column-2.webp";
import Residental3d1 from "../../src/images/residental-3d-1.jpg";
import Residental3d2 from "../../src/images/residental-3d-2.jpg";
import Residental3d3 from "../../src/images/residental-3d-3.jpg";

const SteperDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const details = [
    {
      id: 1,
      images: [
        ArchitectureDesignLeft,
        ArchitectureDesignMiddle,
        ArchitectureDesignRight,
      ],
      title: t("steperDetail.0.title"),
      description: t("steperDetail.0.description"),
    },
    {
      id: 2,
      images: [InteriorColorPalleteLeft, InteriorColorPalleteRight],
      title: t("steperDetail.1.title"),
      description: t("steperDetail.1.description"),
    },
    {
      id: 3,
      images: [Residental3d1, Residental3d2, Residental3d3],
      title: t("steperDetail.2.title"),
      description: t("steperDetail.2.description"),
    },
  ];

  const detail = details.find((d) => d.id === parseInt(id));

  if (!detail) {
    return <div>{t("global.notFound")}</div>;
  }

  return (
    <>
      <div className="grid grid-cols-2 p-24 gap-8 h-screen">
        <div className="w-48 flex gap-4">
          {detail.images.map((src, index) => (
            <img
              key={index}
              className="shadow-2xl border-2 border-black"
              src={src}
              alt={`Detail ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
        <div className="text-left grid place-content-center ">
          <p className="text-4xl mb-8 rounded-lg animate-slideIn">
            {detail.title}
          </p>
          <p className="text-xl rounded-lg animate-slideIn ">
            {detail.description}
          </p>
        </div>
      </div>
    </>
  );
};
export default SteperDetail;