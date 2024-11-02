import Image from "next/image";
import scss from "./OurTeam.module.scss";
import Person from "@/assets/img/Person.svg";
import Person2 from "@/assets/img/Person2.svg";
import Person3 from "@/assets/img/Person3.svg";
import Person4 from "@/assets/img/Person4.svg";
import Person5 from "@/assets/img/Person5.svg";
import Person6 from "@/assets/img/Person6.svg";

const OurTeam = () => {
  return (
    <section className={scss.OurTeam}>
      <div className="container">
        <div className={scss.content}>
          <h1 className="title">OurTeam</h1>
          <div className={scss.team}>
            <div className={scss.person}>
              <Image src={Person} alt="Person" />
              <h2>Miss.Anushin oont</h2>
              <p>CEO & co-Founder</p>
            </div>
            <div className={scss.person}>
              <Image src={Person2} alt="Person" />
              <h2>Mr.Vishmas S.</h2>
              <p>CEO & co-Founder</p>
            </div>
            <div className={scss.person}>
              <Image src={Person3} alt="Person" />
              <h2>Miss.Tanisha kaduu</h2>
              <p>VP Of Technology</p>
            </div>
            <div className={scss.person}>
              <Image src={Person4} alt="Person" />
              <h2>Mr.KL Rahul</h2>
              <p>Head of design</p>
            </div>
            <div className={scss.person}>
              <Image src={Person5} alt="Person" />
              <h2>Miss.vashika g.</h2>
              <p>VP Of Finance</p>
            </div>
            <div className={scss.person}>
              <Image src={Person6} alt="Person" />
              <h2>Mr.Aryan Singh</h2>
              <p>Head of Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
