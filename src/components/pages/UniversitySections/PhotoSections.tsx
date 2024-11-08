import React from "react";
import scss from "./PhotoSections.module.scss";
import img from "@/assets/img/Frame 175.svg";
import Image from "next/image";

const PhotoSections = () => {
  return (
    <div className={scss.PhotoSections}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <Image className={scss.img} src={img} alt="photo" />
            <Image className={scss.img} src={img} alt="photo" />
            <Image className={scss.img} src={img} alt="photo" />
            <Image className={scss.img} src={img} alt="photo" />
            <Image className={scss.img} src={img} alt="photo" />
            <Image className={scss.img} src={img} alt="photo" />
            <Image className={scss.img} src={img} alt="photo" />
            <Image className={scss.img} src={img} alt="photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSections;
