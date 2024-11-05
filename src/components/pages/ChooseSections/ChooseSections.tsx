"use client";
import Image from "next/image";
import scss from "./ChooseSections.module.scss";
import america from "@/assets/img/america.png";

const ChooseSections = () => {
  return (
    <section className={scss.ChooseSections}>
      <div className="container">
        <div className={scss.content}>
          <h1>Choose the country</h1>
          <div className={scss.filters}>
            <select>
              <option value="">Higher Education</option>
              <option value="">Higher Education</option>
              <option value="">Higher Education</option>
              <option value="">Higher Education</option>
            </select>
            <select>
              <option value="">Higher Education</option>
              <option value="">Higher Education</option>
              <option value="">Higher Education</option>
              <option value="">Higher Education</option>
            </select>
            <select>
              <option value="">Higher Education</option>
              <option value="">Higher Education</option>
              <option value="">Higher Education</option>
              <option value="">Higher Education</option>
            </select>
          </div>

          <div className={scss.cards}>
            <div className={scss.card}>
              <Image src={america} alt="america " />
              <h3>America</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSections;
