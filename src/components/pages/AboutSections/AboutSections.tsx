import Image from "next/image";
import scss from "./AboutSections.module.scss";
import aboutImg from "@/assets/img/about.svg";

const AboutSections = () => {
  return (
    <section className={scss.AboutSections}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.img}>
            <Image className={scss.aboutSvg} src={aboutImg} alt="about" />
          </div>
          <div className={scss.aboutUs}>
            <h3>About Us</h3>
            <h1 className="title">Best Education Platform</h1>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black.
            </p>
            <p>
              By the same illusion which lifts the horizon of the sea to the
              level of the spectator on a hillside, the sable cloud beneath was
              dished out, and the car seemed to float in the middle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSections;
