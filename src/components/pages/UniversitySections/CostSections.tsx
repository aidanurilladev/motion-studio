import React from "react";
import scss from "./CostSections.module.scss";

const CostSections = () => {
  return (
    <div className={scss.CostSections}>
      <div className="container">
        <div className={scss.content}>
          <p>
            <span>The cost of studying </span>at the Istituto Europeo di Design
            for the 2023-2024 academic year:
          </p>
          <ol>
            <li>– Academic year (training) – from 1,566,000 rubles.</li>
            <li>– Academic year (accommodation) – from 870,000 rubles.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CostSections;
