"use client";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { CustomButtonProps } from "@/types";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Arabanı Bul, Ayırt veya Kirala</h1>
        <p className="hero__subtitle">
          Kolay rezervasyon işlemlerimizle araç kiralama deneyiminizi
          kolaylaştırın.
        </p>
        <CustomButton
          title="Araban Burada"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
