import Image from "next/image";
import Selection from "../Selections/Selection";
import scss from "./UnitedSections.module.scss";
import SolbrigeUniversity from "@/assets/img/SolbrigeUniversity.png";
import { IoLocationOutline } from "react-icons/io5";

const UnitedSections = () => {
  return (
    <section className={scss.UnitedSections}>
      <div className="container">
        <div className={scss.content}>
          <h1>United Stated</h1>
          <Selection />

          <div className={scss.universities}>
            <div className={scss.university}>
              <div className={scss.card}>
                <Image
                  src={SolbrigeUniversity}
                  alt="university"
                  width={230}
                  height={160}
                />

                <div className={scss.info}>
                  <div className={scss.name}>
                    <h6>Name:</h6>
                    <h3>Solbrige University</h3>
                  </div>
                  <div className={scss.location}>
                    <h6>
                      Location <IoLocationOutline />
                    </h6>
                    <h3>Perth</h3>
                  </div>
                  <div className={scss.location}>
                    <h6>Age:</h6>
                    <h3>From 16</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitedSections;
