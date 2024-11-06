import { useEffect, useState } from "react";
import scss from "./selection.module.scss";

const Selection = () => {
  const selections = [
    {
      options: [
        "Higher Education",
        "Secondary Education",
        "Higher Education",
        "Language courses for youth",
        "Children’s language camps",
      ],
    },
    {
      options: [
        "Specialization",
        "IT Technologies",
        "Business",
        "Medicine",
        "International Relationships",
        "Tourism",
      ],
    },
    {
      options: ["Countries", "America", "Germany", "Indonesia", "South Korea"],
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
