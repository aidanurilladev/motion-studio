import email from "@/assets/img/contactEmail.svg";
import phone from "@/assets/img/ContactPhone.svg";
import instagram from "@/assets/img/InstagramLogo.svg";
import ShareLinks from "@/assets/img/Links.svg";
import telegram from "@/assets/img/TelegramLogo.png";
import whatsapp from "@/assets/img/Whatsapp.png";
import Image from "next/image";
import Link from "next/link";
import scss from "./ContactSection.module.scss";
const ContactSection = () => {
  return (
    <section id="/contacts" className={scss.ContactSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <h2>Send a message</h2>
            <div className={scss.blockWrapper}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name " />
              <input type="number" placeholder="Phone" />
              <input type="email" placeholder="Email" />
              <input
                className={scss.fullWidth}
                type="text"
                placeholder="Group or company"
              />
              <textarea placeholder="How can we help?"></textarea>
              <button>Submit</button>
            </div>
          </div>
          <div className={scss.borderBox}>
            <div className={scss.box}>
              <h2>Contact info</h2>
              <div className={scss.boxWrapper}>
                <h3>
                  <Image src={phone} alt="phone" />
                  <span>+996 500 34 84 39</span>
                </h3>
                <h3>
                  <Image src={email} alt="phone" />
                  <span>motionweb312@gmail.com</span>
                </h3>
                <nav>
                  <Link href="/">
                    <Image src={telegram} alt="telegram" />
                  </Link>
                  <Link href="/">
                    <Image src={whatsapp} alt="whatsapp" />
                  </Link>
                  <Link href="/">
                    <Image src={instagram} alt="instagram" />
                  </Link>
                </nav>
              </div>
              <div className={scss.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.1895779111883!2d74.610874575615!3d42.8899468014613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7ed7cb24803%3A0xe1c77d12212757b7!2zMTM4INGD0LsuINCa0YPRgNC10L3QutC10LXQstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1729327960851!5m2!1sru!2skg"
                  width="430"
                  height="250"
                  style={{ border: 0 }}
                  className={scss.iframe}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <button className={scss.ShareLinks}>
              <Image src={ShareLinks} alt="share link" />
            </button>
          </div>
          <button className={scss.MobileShare}>
            <Image src={ShareLinks} alt="share link" />
            <span>Copy the link</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
