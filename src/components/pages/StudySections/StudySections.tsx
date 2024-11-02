import Image from "next/image";
import scss from "./StudySections.module.scss";
import Study from "@/assets/img/Study.svg";

const StudySections = () => {
  return (
    <section className={scss.StudySections}>
      <div className="container">
        <div className={scss.content}>
          <h1 className={scss.title}>Study Abroad</h1>
          <div className={scss.motion}>
            <div className={scss.img}>
              <Image className={scss.Study} src={Study} alt="Study" />
            </div>
            <div className={scss.Abroad}>
              <p>
                <strong> Motion study</strong> for International Education offers its clients
                various study abroad opportunities – language courses,
                secondary, professional and higher education, professional
                development programmes for teachers and specialists of companies
                and organizations.
              </p>
              <p>
                <strong>Our partners include:</strong><br />
                -	Universities and higher education establishments.<br />
                -	Private schools and colleges.<br />
                -	State schools and colleges.<br />
                -	World known language schools for adults.<br />
                -	International language schools for 7-18 y.o. schoolchildren.<br />
                -	Business schools<br />
                -	Executive centres<br />
                -	Summer camps<br />
                -	Guardianship companies
              </p>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudySections;
