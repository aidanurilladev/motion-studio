import large1 from "@/assets/img/large1.png";
import large2 from "@/assets/img/large2.png";
import medium from "@/assets/img/medium.png";
import small from "@/assets/img/small.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import scss from "./HomeSection.module.scss";
import ConractForm from "@/components/ui/ContacForm/ConractForm";

const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <section className={scss.HomeSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.firstBlock}>
            <h6>{t("discoverWorld")}</h6>
            <h1>{t("globalStudyOpportunity")}</h1>
            <p>{t("globalStudyDescription")}</p>
          </div>
          <div className={scss.secondBlock}>
            <div className={scss.first}>
              <div className={scss.large}>
                <Image
                  className={scss.img1}
                  width={165}
                  height={165}
                  src={large1}
                  alt="image1"
                />
              </div>
              <div className={scss.small}>
                <Image
                  className={scss.img2}
                  width={280}
                  height={280}
                  src={medium}
                  alt="image1"
                />
              </div>
            </div>

            <div className={scss.second}>
              <div className={scss.medium}>
                <Image
                  className={scss.img3}
                  width={280}
                  height={280}
                  src={large2}
                  alt="image1"
                />
              </div>
              <div className={scss.small}>
                <Image
                  className={scss.img4}
                  width={165}
                  height={165}
                  src={small}
                  alt="image1"
                />
              </div>
            </div>
          </div>
          <div className={scss.modal}>
            <ConractForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
