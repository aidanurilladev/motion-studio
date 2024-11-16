import Image from "next/image";
import scss from "./OurTeam.module.scss";
import { useTranslation } from 'react-i18next';
import Person from "@/assets/img/Person.svg";
import Person2 from "@/assets/img/Person2.svg";
import Person3 from "@/assets/img/Person3.svg";
import Person4 from "@/assets/img/Person4.svg";
import Person5 from "@/assets/img/Person5.svg";
import Person6 from "@/assets/img/Person6.svg";

const OurTeam = () => {
  const { t } = useTranslation();
  

  return (
    <section className={scss.OurTeam}>
      <div className="container">
        <div className={scss.content}>
          <h1 className="title">{t('ourTeam')}</h1>
          <div className={scss.team}>
            <div className={scss.person}>
              <Image src={Person} alt="Person" />
              <h2>{t('person1Name')}</h2>
              <p>{t('person1Position')}</p>
            </div>
            <div className={scss.person}>
              <Image src={Person2} alt="Person" />
              <h2>{t('person2Name')}</h2>
              <p>{t('person2Position')}</p>
            </div>
            <div className={scss.person}>
              <Image src={Person3} alt="Person" />
              <h2>{t('person3Name')}</h2>
              <p>{t('person3Position')}</p>
            </div>
            <div className={scss.person}>
              <Image src={Person4} alt="Person" />
              <h2>{t('person4Name')}</h2>
              <p>{t('person4Position')}</p>
            </div>
            <div className={scss.person}>
              <Image src={Person5} alt="Person" />
              <h2>{t('person5Name')}</h2>
              <p>{t('person5Position')}</p>
            </div>
            <div className={scss.person}>
              <Image src={Person6} alt="Person" />
              <h2>{t('person6Name')}</h2>
              <p>{t('person6Position')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
