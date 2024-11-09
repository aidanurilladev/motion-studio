import React, { FC } from "react";
import Image from 'next/image';
import scss from './Header.module.scss';
import Vector from '../../../assets/img/Vector.svg';

const Header: FC = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.Logo}>
            <Image src={Vector} alt="Logo" width={50} height={50} />
          </div>
          <div className={scss.nav}>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/study">Study Abroad</a>
            <a href="#">Contacts</a>
          </div>
          <div className={scss.headerInput}>
            <div className={scss.searchInput}>
              <input type="text" placeholder="Поиск..." />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className={scss.searchIcon}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.398 1.398l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <select name="" id="">
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
