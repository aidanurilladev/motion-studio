"use client";
import Image from "next/image";
import scss from "./ChooseSections.module.scss";
import Selection from "../Selections/Selection";
import Link from "next/link";
import { useGetMeQuery } from "@/redux/api/curl";
import { useTranslation } from "react-i18next";
import { FC } from "react";

const ChooseSections: FC = () => {
  const { t } = useTranslation();
  
  // Используем хук useGetMeQuery
  const { data, isLoading, isError } = useGetMeQuery();

  if (isLoading) {
    return <div>Loading...</div>; // Отображаем индикатор загрузки
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>; // Отображаем ошибку
  }
console.log(data);

  return (
    <section className={scss.ChooseSections}>
      <div className="container">
        <div className={scss.content}>
          <h1>{t("chooseCountry")}</h1>
          <Selection />

          <div className={scss.cards}>
            {data?.map((country) => (
              <div key={country.id} className={scss.card}>
                <Link href={`/study/countries/universities/${country.id}`}>
                  <Image
                    src={country.image} // Убедитесь, что путь корректен
                    alt={country.description}
                    width={172}
                    height={172}
                  />
                </Link>
                <h4>{country.description_ru}</h4>
                <h3>{t("higherEducationUK")}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSections;
