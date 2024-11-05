import Image from "next/image";
import scss from "./StudySections.module.scss";
import imgAbroad from "@/assets/img/Bitmap.svg";
import Link from "next/link";

const StudySections = () => {
  return (
    <section className={scss.StudySections}>
      <div className="container">
        <h2>Study Abroad</h2>
        <div className={scss.content}>
          <div className={scss.img}>
            <Image className={scss.imgAbroad} src={imgAbroad} alt="abroad" />
          </div>
          <div className={scss.AbroadUs}>
            <p>
              <span>Motion study</span> for International Education offers its
              clients various study abroad opportunities – language courses,
              secondary, professional and higher education, professional
              development programmes for teachers and specialists of companies
              and organizations.
            </p>
            <ol>
              Our partners include:
              <li>- Universities and higher education establishments.</li>
              <li>- Private schools and colleges.</li>
              <li>- State schools and colleges.</li>
              <li>- World known language schools for adults.</li>
              <li>
                - International language schools for 7-18 y.o. schoolchildren.
              </li>
              <li>- Business schools.</li>
              <li>- Executive centres</li>
              <li>- Summer camps</li>
              <li>- Guardianship companies</li>
            </ol>
            <Link href="/contries">
              <button>Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudySections;
