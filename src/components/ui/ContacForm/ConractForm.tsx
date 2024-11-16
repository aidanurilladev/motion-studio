import scss from "./contactForm.module.scss";
import name from "@/assets/img/name.png";
import phone from "@/assets/img/phone.png";
import Image from "next/image";

const ConractForm = () => {
  return (
    <div className={scss.ConractForm}>
      <div className={scss.content}>
        <div className={scss.block}>
          <Image src={name} alt="photo" width={52} height={52} />
          <div className={scss.text}>
            <h5>NAME</h5>
            <input type="text" placeholder="Enter your name" />
          </div>
        </div>

        <div className={scss.block}>
          <Image src={phone} alt="photo" width={52} height={52} />
          <div className={scss.text}>
            <h5>PHONE</h5>
            <input type="text" placeholder="Enter your phone" />
          </div>
        </div>
        <button>Сontact</button>
      </div>
    </div>
  );
};

export default ConractForm;
