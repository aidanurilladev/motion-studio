import Image from "next/image";
import scss from "./UniversitySections.module.scss";
import univer from "@/assets/img/UniversityImage.png";

const UniversitySections = () => {
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
                <h4>Australia,Milan,Rim</h4>
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
                  <h4>Jewerly design</h4>
                  <h4>landscape design</h4>
                  <h4>Photography</h4>
                  <h4>Car design</h4>
                </div>
              </div>
              <div className={scss.info}>
                <span>Language:</span>
                <h4>english,Italian</h4>
              </div>
            </div>
          </div>
          <div className={scss.secondBlock}>
            <div className={scss.box}>
              <p>Description</p>
            </div>
            <div className={scss.box}>
              <p>Cost</p>
            </div>
            <div className={scss.box}>
              <p>Photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversitySections;
