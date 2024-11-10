"use client";
import { useTranslation } from "react-i18next";
import scss from "./selection.module.scss";

const Selection = () => {
  const { t } = useTranslation();
  const selections = [
    {
      options: [
        t("higher_education"),
        t("secondary_education"),
        t("higher_education"),
        t("language_courses_youth"),
        t("childrens_language_camps"),
      ],
    },
    {
      options: [
        t("specialization"),
        t("it_technologies"),
        t("business"),
        t("medicine"),
        t("international_relationships"),
        t("tourism"),
      ],
    },
    {
      options: [t("countries"), t("america"), t("germany"), t("indonesia"), t("south_korea")],
    },
  ];

  return (
    <div className={scss.filters}>
      {selections.map((el, index) => (
        <select key={index}>
          {el.options.map((elem, index) => (
            <option key={index}>{elem}</option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default Selection;
