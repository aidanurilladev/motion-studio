"use client";
import React from "react";
import scss from "./DescriptionSections.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import icon1 from "@/assets/img/image 102.svg";

const DescriptionSections = () => {
  const { t } = useTranslation(); 
  
  const data = [
    {
      title: t("nominal_duration"),
      value: "4.5 years(240 ECTS)",
    },
    {
      title: t("awards"),
      value:
        "4.5 years(B.Sc. (Professional Bachelor’s degree in Business Management, qualification: Business Manager or E-Business Manager) ECTS)",
    },
    {
      title: t("tuition_fee"),
      value: "€1,400 per semester US$1,502.87",
    },
    {
      title: t("application_fee"),
      value: "€120 one-time US$128.83",
    },
    {
      title: t("registration_fee"),
      value:
        "US$150 one-time US$150 one-time You need to choose student status:Base – 150 USD Standard – 500 USD VIP – 900 USD",
    },
  ];

  return (
    <div className={scss.Description}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.leftBlock}>
            {data.map((el, idx) => (
              <div key={idx} className={scss.table}>
                <div className={scss.box1}>
                  <p>{el.title}</p>
                </div>
                <div className={scss.box2}>
                  <p>{el.value}</p>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className={scss.rightBlock}>
            <button>
              <span>{t("apply_now")}</span> {t("fall_semester")}
            </button>
            <div className={scss.box}>
              <Image src={icon1} alt="icon" />
              <p>
                <span>{t("pre_deadline")}</span>
                {t("deadline_info")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSections;
