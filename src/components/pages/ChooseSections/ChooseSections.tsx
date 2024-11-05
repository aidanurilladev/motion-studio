"use client";
import Image from "next/image";
import scss from "./ChooseSections.module.scss";
import america from "@/assets/img/america.png";
import Selection from "../Selections/Selection";

const ChooseSections = () => {
  return (
    <section className={scss.ChooseSections}>
      <div className="container">
        <div className={scss.content}>
          <h1>Choose the country</h1>
          <Selection />
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
