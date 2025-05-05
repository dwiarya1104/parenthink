import React from "react";
import { AvatarTeam } from "../components/AvatarTeam";
import shinta from "../assets/team/shinta.jpg";
import jaka from "../assets/team/jaka.jpg";
import asih from "../assets/team/asih.JPG";
import fitri from "../assets/team/fitri.jpg";
import falinka from "../assets/team/falinka.jpg";
import della from "../assets/team/della.jpg";
import dhia from "../assets/team/dhia.jpg";
import rosania from "../assets/team/rosania.jpg";
import ulayyah from "../assets/team/ulayyah.jpg";
import zhafira from "../assets/team/zhafira.jpg";
import zahwa from "../assets/team/zahwa.png";

export const OurTeam = () => {
  const dospem = [
    { image: shinta, name: "Dr. Shinta Doriza, M.Pd., M.S.E" },
    { image: jaka, name: "Jaka Marsita, M.Par" },
  ];

  const section1 = [
    { image: asih, name: "Asih Nurholifah " },
    { image: fitri, name: "Fitri Srimulyati " },
    { image: falinka, name: "Falinka Futri " },
    { image: della, name: "Della Shantika" },
    { image: dhia, name: "Dhia Salsabila " },
  ];

  const section2 = [
    { image: rosania, name: "Rosania Noviani " },
    { image: ulayyah, name: "Ullayah Hani" },
    { image: zhafira, name: "Zhafira Fitrahastuti" },
    { image: zahwa, name: "Zahwa Nurhaliza" },
  ];

  const combined = [...section1, ...section2];

  return (
    <div id="our-team" className="bg-[#f7ebdd] pt-20">
      <div className="flex flex-col justify-center items-center gap-10 p-6">
        {/* Dosen pembimbing */}
        <h1 className="text-xl px-10 font-bold  text-white bg-[#c18d5c] p-3 rounded-full">
          Dosen Pembimbing
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-2 gap-16">
          {dospem.map((item, index) => (
            <AvatarTeam img={item.image} key={index} name={item.name} />
          ))}
        </div>

        {/* Tampilan mobile: gabungan */}
        <h1 className="text-xl px-10 font-bold  text-white bg-[#c18d5c] p-3 rounded-full">
          Tim Kami
        </h1>

        <div className="grid grid-cols-3 gap-8 md:hidden">
          {combined.map((item, index) => (
            <AvatarTeam img={item.image} key={index} name={item.name} />
          ))}
        </div>

        {/* Tampilan desktop: terpisah */}
        <div className="hidden md:grid md:grid-cols-5 gap-16">
          {section1.map((item, index) => (
            <AvatarTeam img={item.image} key={index} name={item.name} />
          ))}
        </div>
        <div className="hidden md:grid md:grid-cols-4 gap-16">
          {section2.map((item, index) => (
            <AvatarTeam img={item.image} key={index} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
