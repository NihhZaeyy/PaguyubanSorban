import React from "react";
import aboutPhoto from "../../assets/Title/about.jpg";

const AboutSection = () => {
  return (
    <div className="mt-6 px-6 md:px-10 xl:px-[150px]">
      <div className="text-center">
        <h1 className="font-medium text-3xl mb-4">Tentang Kami</h1>
        <p className="md:px-10 mb-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fringilla viverra lacinia. Vestibulum fermentum sodales luctus.
          Vivamus volutpat vehicula ex nec consectetur.
        </p>
      </div>
      <div className="flex flex-col gap-3 md:gap-6 mb-6 border-2 border-gray-400 rounded-xl p-2 md:flex-row">
        <img
          className="md:w-[350px] rounded-lg h-full"
          src={aboutPhoto}
          alt=""
        />
        <div>
          <h3 className="font-medium md:text-xl">Dibangun pada tahun 1989</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            posuere ex. Ut pellentesque enim in turpis pharetra mattis.
            Curabitur eu massa porttitor, feugiat urna non, ultrices felis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-6 mb-6 border-2 border-gray-400 rounded-xl p-2 md:flex-row-reverse">
        <img
          className="md:w-[350px] rounded-lg h-full"
          src={aboutPhoto}
          alt=""
        />
        <div>
          <h3 className="font-medium md:text-xl">
            Pelantikan Kepala Utama Paguyuban Sorban
          </h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            posuere ex. Ut pellentesque enim in turpis pharetra mattis.
            Curabitur eu massa porttitor, feugiat urna non, ultrices felis.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-6 mb-6 border-2 border-gray-400 rounded-xl p-2 md:flex-row">
        <img
          className="md:w-[350px] rounded-lg h-full"
          src={aboutPhoto}
          alt=""
        />
        <div>
          <h3 className="font-medium md:text-xl">
            Anggota Paguyuban Sorban yang berjumlah lebih dari 200
          </h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            posuere ex. Ut pellentesque enim in turpis pharetra mattis.
            Curabitur eu massa porttitor, feugiat urna non, ultrices felis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
