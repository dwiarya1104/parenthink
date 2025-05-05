import React from "react";
import { CardArticles } from "../components/CardArticles";
import artikel1 from "../assets/artikel1.webp";
import artikel2 from "../assets/artikel2.webp";
import artikel3 from "../assets/artikel3.jpg";
import artikel4 from "../assets/artikel4.jpg";
import artikelHeader from "../assets/artikel-header.webp";

export const Articles = () => {
  const articles = [
    {
      title: "Cara Efektif Mengurangi Screen Time pada Anak",
      image: artikel1,
      url: "https://www.tempo.co/arsip/8-langkah-mengurangi-screen-time-anak-usia-balita--291129",
    },
    {
      title: "Gangguan Fokus dan Motorik Pada Anak Dapat Menghambat Sekolah ",
      image: artikel2,
      url: "https://www.youtube.com/watch?v=NQ7ldoyw4a4",
    },
    {
      title: "Pengaruh Imunisasi Pada Kecerdasan Anak ",
      image: artikel3,
      url: "https://youtu.be/IBM0GfckPek?si=MXduFiiBQ76eJwua",
    },
    {
      title: "Perawatan Kulit Bayi di 1000 Hari Pertama Kehidupan ",
      image: artikel4,
      url: "https://www.youtube.com/watch?v=CYmpK1mR7Fw",
    },
  ];

  return (
    <div id="articles" className="bg-[#f7ebdd] pt-20">
      <div className="flex flex-col items-center justify-center md:mx-10 mx-5 ">
        <div className=" mb-10 w-full relative">
          <img
            src={artikelHeader}
            className="w-full h-[300px] object-cover rounded-xl opacity-90"
            alt="Header"
          />
          {/* Overlay gelap */}
          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

          {/* Teks di tengah */}
          <p className="absolute md:text-[43px] text-[35px] italic top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold text-center">
            Parenthink Artikel dan Video
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-stretch">
          {articles.map((article, index) => (
            <CardArticles
              key={index}
              title={article.title}
              url={article.url}
              image={article.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
