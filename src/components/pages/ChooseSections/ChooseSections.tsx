"use client";
import Image from "next/image";
import scss from "./ChooseSections.module.scss";
import america from "@/assets/img/america.png";
import Selection from "../Selections/Selection";
import { useGetCoutriesQuery } from "@/redux/api/curl";
import Link from "next/link";

const ChooseSections = () => {
  // const { data } = useGetCoutriesQuery();
  // console.log("🚀 ~ ChooseSections ~ data:", data);

  const countries = [
    { id: 1, name: "America", flag: "🇺🇸" },
    { id: 2, name: "Great Britain", flag: "🇬🇧" },
    { id: 3, name: "Austria", flag: "🇦🇹" },
    { id: 4, name: "Germany", flag: "🇩🇪" },
    { id: 5, name: "Holland", flag: "🇳🇱" },
    { id: 6, name: "Ireland", flag: "🇮🇪" },
    { id: 7, name: "Spain", flag: "🇪🇸" },
    { id: 8, name: "Italy", flag: "🇮🇹" },
    { id: 9, name: "Canada", flag: "🇨🇦" },
    { id: 10, name: "Cyprus", flag: "🇨🇾" },
    { id: 11, name: "China", flag: "🇨🇳" },
    { id: 12, name: "Latvia", flag: "🇱🇻" },
  ];

  return (
    <section className={scss.ChooseSections}>
      <div className="container">
        <div className={scss.content}>
          <h1>Choose the country</h1>
          <Selection />

          <div className={scss.cards}>
            {countries.map((country) => (
              <div key={country.id} className={scss.card}>
                <Link href="/study/contries/universities">
                  <Image
                    src={america}
                    alt="america "
                    width={172}
                    height={172}
                  />
                </Link>
                <h4>{country.name}</h4>
                <h3>Higher education in the UK</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSections;
