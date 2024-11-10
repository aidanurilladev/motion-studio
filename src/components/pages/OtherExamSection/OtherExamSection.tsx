import Other from "@/assets/img/OtherExam.png";
import Image from "next/image";
import Link from "next/link";
import scss from "./OtherExamSection.module.scss";
import { useTranslation } from "react-i18next";

const OtherExamSection = () => {
  const { t } = useTranslation();

  return (
    <section className={scss.OtherExam}>
      <div className="container">
        <div className={scss.content}>
          <h1>{t("other_exams_section_title")}</h1>

          <Image
            className={scss.photos}
            src={Other}
            alt={t("other_exams_image_alt")}
          />

          <h2>{t("paper_exams_title")}</h2>
          <p>{t("paper_exams_description")}</p>
          <ul>
            <li className={scss.active}>{t("proctor_agreements_info")}</li>
            <li className={scss.active}>{t("exam_mail_info")}</li>
            <li className={scss.active}>{t("shipping_info")}</li>
            <li className={scss.active}>{t("exam_schedule_info")}</li>
          </ul>

          <h2>{t("id_requirements_title")}</h2>
          <ul>
            <li className={scss.active}>{t("id_requirements_info")}</li>
          </ul>

          <h2>{t("faq_title")}</h2>
          <ul>
            <li>
              <Link
                href="https://studentaffairs.unt.edu/testing-services/parking"
                target="_blank"
              >
                <span>{t("where_to_park_question")}</span>
              </Link>
            </li>
            <li>{t("parking_info")}</li>
            <li>
              <span>{t("what_to_bring_question")}</span>
            </li>
            <li>{t("what_to_bring_info")}</li>
            <li>
              <span>{t("exam_duration_question")}</span>
            </li>
            <li>{t("exam_duration_info")}</li>
            <li>
              <span>{t("personal_belongings_question")}</span>
            </li>
            <li>{t("personal_belongings_info")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OtherExamSection;
