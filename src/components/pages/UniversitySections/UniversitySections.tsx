"use client";
import { useState } from "react";
import Image from "next/image";
import scss from "./UniversitySections.module.scss";
import univer from "@/assets/img/UniversityImage.png";
import DescriptionSections from "@/components/pages/UniversitySections/DescriptionSections";
import CostSections from "./CostSections";
import PhotoSections from "./PhotoSections";


const UniversitySections = () => {
  const [activeSection, setActiveSection] = useState<string>("Description");

  const handleBoxClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <section className={scss.UniversitySections}>
      <div className="container">
        <div className={scss.content}>
          <h1>Solbrige University</h1>

          <div className={scss.firstBlock}>
            <div className={scss.photoContent}>
              <Image src={univer} alt="photo" width={550} height={550} />
            </div>

            <div className={scss.infoUniversity}>
              <div className={scss.info}>
                <span>Location:</span>
                <h4>Australia, Milan, Rim</h4>
              </div>
              <div className={scss.info}>
                <span>Date of foundation :</span>
                <h4>1996</h4>
              </div>
              <div className={scss.information}>
                <span>Type of programs:</span>
                <div className={scss.infoBack}>
                  <h4>Bachelor Course Magistracy</h4>
                </div>
              </div>
              <div className={scss.information}>
                <span>Specialities :</span>
                <div className={scss.infoBack}>
                  <h4>Fashion and Design</h4>
                  <h4>Interior design</h4>
                  <h4>Jewelry design</h4>
                  <h4>Landscape design</h4>
                  <h4>Photography</h4>
                  <h4>Car design</h4>
                </div>
              </div>
              <div className={scss.info}>
                <span>Language:</span>
                <h4>English, Italian</h4>
              </div>
            </div>
          </div>

          <div className={scss.secondBlock}>
            <div
              className={`${scss.box} ${activeSection === "Description" ? scss.active : ""}`}
              onClick={() => handleBoxClick("Description")}
            >
              <p>Description</p>
            </div>
            <div
              className={`${scss.box} ${activeSection === "Cost" ? scss.active : ""}`}
              onClick={() => handleBoxClick("Cost")}
            >
              <p>Cost</p>
            </div>
            <div
              className={`${scss.box} ${activeSection === "Photo" ? scss.active : ""}`}
              onClick={() => handleBoxClick("Photo")}
            >
              <p>Photo</p>
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
