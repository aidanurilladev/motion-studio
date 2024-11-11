"use client";
import { useState } from "react";
import Image from "next/image";
import scss from "./UniversitySections.module.scss";
import { useTranslation } from "react-i18next";
import univer from "@/assets/img/UniversityImage.png";
import DescriptionSections from "@/components/pages/UniversitySections/DescriptionSections";
import CostSections from "./CostSections";
import PhotoSections from "./PhotoSections";

const UniversitySections = () => {
  const [activeSection, setActiveSection] = useState<string>("Description");
  const { t } = useTranslation();

  const specialities = t("specialities", { returnObjects: true }) as string[];

  const handleBoxClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <section className={scss.UniversitySections}>
      <div className="container">
        <div className={scss.content}>
          <h1>{t("university_title")}</h1>

          <div className={scss.firstBlock}>
            <Image src={univer} alt="photo" width={550} height={550} />

            <div className={scss.infoUniversity}>
              <div className={scss.info}>
                <span>{t("location_label")}</span>
                <h4>{t("location")}</h4>
              </div>
              <div className={scss.info}>
                <span>{t("foundation_date_label")}</span>
                <h4>{t("foundation_date")}</h4>
              </div>
              <div className={scss.information}>
                <span className={scss.type}>{t("program_type_label")}</span>
                <div className={scss.infoBack}>
                  <h4>{t("program_type")}</h4>
                </div>
              </div>
              <div className={scss.information}>
                <span>{t("specialities_label")}</span>
                <div className={scss.infoBack}>
                  {Array.isArray(specialities) &&
                    specialities.map((specialty, index) => (
                      <h4 key={index}>{specialty}</h4>
                    ))}
                </div>
              </div>
              <div className={scss.info}>
                <span>{t("language_label")}</span>
                <h4>{t("languages")}</h4>
              </div>
            </div>
          </div>

          <div className={scss.secondBlock}>
            <div
              className={`${scss.box} ${
                activeSection === "Description" ? scss.active : ""
              }`}
              onClick={() => handleBoxClick("Description")}
            >
              <p>{t("description_section")}</p>
            </div>
            <div
              className={`${scss.box} ${
                activeSection === "Cost" ? scss.active : ""
              }`}
              onClick={() => handleBoxClick("Cost")}
            >
              <p>{t("cost_section")}</p>
            </div>
            <div
              className={`${scss.box} ${
                activeSection === "Photo" ? scss.active : ""
              }`}
              onClick={() => handleBoxClick("Photo")}
            >
              <p>{t("photo_section")}</p>
            </div>
          </div>

          {activeSection === "Description" && <DescriptionSections />}
          {activeSection === "Cost" && <CostSections />}
          {activeSection === "Photo" && <PhotoSections />}
        </div>
      </div>
    </section>
  );
};

export default UniversitySections;
