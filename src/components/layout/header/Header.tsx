import React, { FC } from "react";
import Image from 'next/image';
import styles from './Header.module.scss';
import Vector from '../../../assets/img/Vector.svg';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.headerImg}>
            <Image src={Vector} alt="Logo" width={50} height={50} />
          </div>
          <div className={styles.headerLinks}>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Study Abroad</a>
            <a href="#">Contacts</a>
          </div>
          <div className={styles.headerInput}>
            <div className={styles.searchInput}>
              <input type="text" placeholder="Поиск..." />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className={styles.searchIcon}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.398 1.398l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <select name="language" id="language-select">
              <option value="ru">EN</option>
              <option value="ru">RU</option>
              <option value="kg">KG</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
