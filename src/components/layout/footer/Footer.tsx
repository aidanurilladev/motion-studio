'use client';
import instagram from '@/assets/img/InstagramLogo.svg';
import telegram from '@/assets/img/TelegramLogo.png';
import mobileLogo from '@/assets/img/WhiteLogo.png';
import youtube from '@/assets/img/YoutubeLogo.png';
import Image from 'next/image';
import scss from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={scss.Footer}>
      <div className='container'>
        <div className={scss.content}>
          <div className={scss.navs}>
            <Image src={mobileLogo} alt='logo' />
            <nav className={scss.inWeb}>
              <a href='#'>{t('home')}</a>
              <a href='#about'>{t('about_us')}</a>
              <a href='#interior'>{t('study_abroad')}</a>
              <a href='#contact'>{t('contacts')}</a>
            </nav>
            <nav className={scss.soc}>
              <a href='https://t.me/Amir030707' target='_blank'>
                <Image src={telegram} alt='telegram' width={30} height={27} />
              </a>
              <a href='#'>
                <Image src={youtube} alt='youtube' width={30} height={27} />
              </a>
              <a href='#'>
                <Image src={instagram} alt='instagram' width={30} height={27} />
              </a>
            </nav>
          </div>
          <hr />
          <span>{t('footer_note')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
