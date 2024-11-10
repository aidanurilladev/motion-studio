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
            <Image
              width={300}
              height={300}
              className={scss.img}
              src={img}
              alt="photo"
            />
            <Image
              width={300}
              height={300}
              className={scss.img}
              src={img}
              alt="photo"
            />
            <Image
              width={300}
              height={300}
              className={scss.img}
              src={img}
              alt="photo"
            />
            <Image
              width={300}
              height={300}
              className={scss.img}
              src={img}
              alt="photo"
            />
            <Image
              width={300}
              height={300}
              className={scss.img}
              src={img}
              alt="photo"
            />
            <Image
              width={300}
              height={300}
              className={scss.img}
              src={img}
              alt="photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSections;
