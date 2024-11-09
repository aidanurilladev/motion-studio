"use client";
import Image from "next/image";
import Selection from "../Selections/Selection";
import scss from "./UnitedSections.module.scss";
import SolbrigeUniversity from "@/assets/img/SolbrigeUniversity.png";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

const UnitedSections = () => {
  const universities = [
    {
      id: 1,
      name: "Solbridge University",
      location: "Perth",
      age: "From 16",
      imageUrl: "URL_изображения_1",
    },
    {
      id: 2,
      name: "La Trobe University",
      location: "Riga",
      age: "From 16",
      imageUrl: "URL_изображения_2",
    },
    {
      id: 3,
      name: "TSI University",
      location: "Riga",
      age: "From 16",
      imageUrl: "URL_изображения_3",
    },
    {
      id: 4,
      name: "Solbridge University",
      location: "Perth",
      age: "From 16",
      imageUrl: "URL_изображения_4",
    },
    {
      id: 5,
      name: "Edith University",
      location: "Melbourne",
      age: "From 16",
      imageUrl: "URL_изображения_5",
    },
    {
      id: 6,
      name: "DCU University",
      location: "Riga",
      age: "From 16",
      imageUrl: "URL_изображения_6",
    },
    {
      id: 7,
      name: "Cowan University",
      location: "Boston",
      age: "From 16",
      imageUrl: "URL_изображения_7",
    },
  ];

  return (
    <section className={scss.UnitedSections}>
      <div className="container">
        <div className={scss.content}>
          <h1>United Stated</h1>
          <Selection />

          <div className={scss.universities}>
            {universities.map((university) => (
              <div key={university.id} className={scss.card}>
                <Link href="/study/contries/universities/universityById">
                  <Image
                    src={SolbrigeUniversity}
                    alt="university"
                    width={230}
                    height={160}
                  />
                </Link>
                <div className={scss.info}>
                  <div className={scss.name}>
                    <h6>Name:</h6>
                    <h3>{university.name}</h3>
                  </div>
                  <div className={scss.location}>
                    <h6>
                      Location <IoLocationOutline />
                    </h6>
                    <h3>{university.location}</h3>
                  </div>
                  <div className={scss.age}>
                    <h6>Age:</h6>
                    <h3>{university.age}</h3>
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
