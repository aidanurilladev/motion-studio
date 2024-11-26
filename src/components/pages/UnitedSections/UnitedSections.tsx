"use client";
import Image from "next/image";
import Selection from "../Selections/Selection";
import scss from "./UnitedSections.module.scss";
import SolbrigeUniversity from "@/assets/img/SolbrigeUniversity.png";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useGetCoutriesQuery } from "@/redux/api/curl";

const UnitedSections = () => {
  const { t } = useTranslation();

  const { data } = useGetCoutriesQuery();
  console.log("🚀 ~ UnitedSections ~ data:", data);

  return (
    <section className={scss.UnitedSections}>
      <div className="container">
        <div className={scss.content}>
          <h1>{t("united_states_title")}</h1>
          <Selection />

          <div className={scss.universities}>
            {data?.map((university) => (
              <div key={university.id} className={scss.card}>
                <Link href="/study/contries/universities/universityById">
                  <img
                    src={university.name.png}
                    alt="university"
                    width={230}
                    height={160}
                  />
                </Link>
                <div className={scss.info}>
                  <div className={scss.name}>
                    <h6>{t("name")}</h6>
                    <h3>{university.name.en}</h3>
                  </div>
                  <div className={scss.location}>
                    <h6>
                      {t("location")} <IoLocationOutline />
                    </h6>
                    <h3>{university.name.en}</h3>
                  </div>
                  <div className={scss.age}>
                    <h6>{t("age")}</h6>
                    <h3>{university.established}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitedSections;
