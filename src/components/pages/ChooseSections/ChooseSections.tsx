"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Selection from "../Selections/Selection";
import scss from "./ChooseSections.module.scss";
import { FC } from "react";
import { useGetCoutriesQuery } from "@/redux/api/curl";

const ChooseSections: FC = () => {
  const { t } = useTranslation();
  const { data } = useGetCoutriesQuery();
  console.log("🚀 ~ ChooseSections ~ data:", data);

  return (
    <section className={scss.ChooseSections}>
      <div className="container">
        <div className={scss.content}>
          <h1>{t("chooseCountry")}</h1>
          <Selection />

          <div className={scss.cards}>
            {data?.map((item) => (
              <div key={item.id} className={scss.card}>
                <Link href="/study/contries/universities">
                  <img src={item.country.flag} alt="america" />
                </Link>
                <h4>{item.country.en}</h4>
                <h3>{t(`higher education in ${item.country.en} `)}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSections;
