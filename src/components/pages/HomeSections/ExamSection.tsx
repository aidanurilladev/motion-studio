import { useTranslation } from 'react-i18next';
import ExamPhoto1 from "@/assets/img/Examphoto1.png";
import BoxPhoto1 from "@/assets/img/ExamPhoto2.png";
import BoxPhoto2 from "@/assets/img/ExamPhoto3.png";
import BoxPhoto3 from "@/assets/img/ExamPhoto4.png";
import Image from "next/image";
import Link from "next/link";
import scss from "./ExamSection.module.scss";

const ExamSection = () => {
  const { t } = useTranslation(); 

  return (
    <section className={scss.Exams}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.contentText}>
            <h1 className="title">{t('examsTitle')}</h1>
            <p>{t('examsDescription')}</p>
          </div>
          <div className={scss.blocks}>
            <div className={scss.block}>
              <Image
                src={ExamPhoto1}
                width={466}
                height={327}
                alt={t('englishExamsAlt')}
              />
              <Link className={scss.cambrige} href="#">
                {t('cambridgeExams')}
              </Link>
              <h2>{t('cambridgeDescriptionTitle')}</h2>
              <p>{t('cambridgeDescription')}</p>
              <button>
                <Link href="/exams/cambrige-exam">{t('discoverMore')}</Link>
              </button>
            </div>
            <div className={scss.boxes}>
              <div className={scss.box}>
                <Link
                  href="/exams/aptis"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                ></Link>
                <div>
                  <Image
                    src={BoxPhoto1}
                    alt={t('aptisPhotoAlt')}
                    width={189}
                    height={132}
                  />
                </div>

                <div className={scss.boxContent}>
                  <div className={scss.Aptis}>
                    <span>{t('aptis')}</span>
                  </div>
                  <h2>{t('aptisTitle')}</h2>
                  <p>{t('aptisDescription')}</p>
                </div>
              </div>

              <div className={scss.box}>
                <Link
                  href="/exams/ielts"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                ></Link>
                <Image
                  src={BoxPhoto2}
                  alt={t('ieltsPhotoAlt')}
                  width={189}
                  height={132}
                />

                <div className={scss.boxContent}>
                  <div className={scss.Aptis}>
                    <span>{t('ielts')}</span>
                  </div>
                  <h2>{t('ieltsTitle')}</h2>
                  <p>{t('ieltsDescription')}</p>
                </div>
              </div>

              <div className={scss.box}>
                <Link
                  href="/exams/other-exam"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                ></Link>
                <Image
                  src={BoxPhoto3}
                  alt={t('otherExamsPhotoAlt')}
                  width={189}
                  height={132}
                />

                <div className={scss.boxContent}>
                  <div
                    style={{
                      width: "107px",
                    }}
                    className={scss.Aptis}
                  >
                    <span>{t('otherExams')}</span>
                  </div>
                  <h2>{t('otherExamsTitle')}</h2>
                  <p>{t('otherExamsDescription')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamSection;
