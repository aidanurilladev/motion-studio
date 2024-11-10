import React from "react";
import { useTranslation } from "react-i18next"; 
import scss from "./CostSections.module.scss";

const CostSections = () => {
  const { t } = useTranslation(); 

  return (
    <div className={scss.CostSections}>
      <div className="container">
        <div className={scss.content}>
          <p>
            <span>{t("cost_of_study")}</span> {t("study_year")}
          </p>
          <ol>
            <li>{t("academic_year_training")}</li>
            <li>{t("academic_year_accommodation")}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CostSections;
