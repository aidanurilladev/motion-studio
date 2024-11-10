import React from "react";
import scss from "./DescriptionSections.module.scss";
import Image from "next/image";
import icon1 from "@/assets/img/image 102.svg";

const DescriptionSections = () => {
  const data = [
    {
      title: "Nominal duration: ",
      value: "4.5 years(240 ECTS)",
    },
    {
      title: " Awards:: ",
      value:
        "4.5 years(B.Sc. (Professional Bachelor’s degree in Business Management, qualification: Business Manager or E-Business Manager) ECTS)",
    },
    {
      title: "Tuition fee:  ",
      value: "€1,400 per semester US$1,502.87",
    },
    {
      title: "Application fee: ",
      value: "€120 one-time US$128.83",
    },
    {
      title: "Registration fee: ",
      value:
        "US$150 one-time US$150 one-time You need to choose student status:Base – 150 USD Standard – 500 USD VIP – 900 USD",
    },
  ];
  return (
    <div className={scss.Description}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.leftBlock}>
            {data.map((el, idx) => (
              <div key={idx} className={scss.table}>
                <div className={scss.box1}>
                  <p>{el.title}</p>
                </div>
                <div className={scss.box2}>
                  <p>{el.value}</p>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className={scss.rightBlock}>
            <button>
              <span>Apply Now!!! </span>Fall semester 2023
            </button>
            <div className={scss.box}>
              <Image src={icon1} alt="icon" />
              <p>
                <span>Pre-deadline</span>
                20 Jun 2023, 23:59:59Eastern European Time Please ask your
                manager in Baltic Center about correct deadline for your country
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSections;
