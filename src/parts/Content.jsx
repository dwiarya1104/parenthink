import React from "react";
import heroContent from "../assets/content.webp";
import { BadgeContent } from "../components/BadgeContent";
import { CardContent } from "../components/CardContent";
import content1 from "../assets/content1.jpeg"
import content2 from "../assets/content2.jpg"
import content3 from "../assets/content3.jpg"

export const Content = () => {
  const contents = [
    {
      title: "Fase Anak",
      url: "https://scholar.googleusercontent.com/scholar?q=cache:ZxpcjIiwoWMJ:scholar.google.com/+fase+fase+anak&hl=id&as_sdt=0,5",
    },
    {
      title: "Mengasuh Anak",
      url: "https://ejournal.iainmadura.ac.id/index.php/kiddo/article/view/4797",
    },
    {
      title: "Psikologi Anak",
      url: "https://books.google.co.id/books?hl=en&lr=&id=l4wpEAAAQBAJ&oi=fnd&pg=PA3&dq=psikologi+anak&ots=zxzIkR8Sii&sig=j5k3BoNQkrnsR5jEYHELJe-LGHQ&redir_esc=y#v=onepage&q=psikologi%20anak&f=false",
    },
  ];

  const cardContents = [
    {
      title: "Pola Asuh Anak Yang Baik",
      subtitle: "Cara Mendidik Anak",
      url: "https://www.youtube.com/watch?v=aCn8ERT7hLs&pp=ygUacGFyZW50aW5nIGRhc2FyIHVudHVrIGFuYWs%3D",
      imgUrl: content1,
    },
    {
      title: "Stimulasi Anak",
      subtitle: "Stimulasi penting untuk mendukung perkembangan anak",
      url: "https://youtu.be/JZCT35OFEwA?si=hK2YyLtkINROltts",
      imgUrl: content2,
    },
    {
      title: "Eksplorasi",
      subtitle: "Manfaat kegiatan diluar rumah untuk anak",
      url: "https://youtube.com/shorts/LvBTpi5WbSM?si=3ou0V-er4aLTh2Ul",
      imgUrl: content3,
    },
  ];
  return (
    <div id="multimedia-content" className="bg-[#f7ebdd] pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 ">
          <img src={heroContent} className="rounded-xl md:w-11/12" />
          <div className="flex flex-col md:mt-9 ">
            <h1 className="md:text-[36px] text-2xl font-bold text-[#483528]">
              Bagaimana Dasar Pola Asuh Pada Anak ? Simak Konten Nya
            </h1>
            <p className="text-lg mt-3">
              Selama menjadi orang tua, Bunda dan Ayah pasti tidak akan berhenti
              belajar. Bukan tanpa alasan, hal ini karena cara mengasuh anak
              akan sangat berbeda di setiap fase usianya.
            </p>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-3 mt-4 text-center">
              {contents.map((content, index) => (
                <BadgeContent
                  key={index}
                  title={content.title}
                  url={content.url}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 mt-10">
          {cardContents.map((cardContent, index) => (
            <CardContent
              key={index}
              title={cardContent.title}
              subtitle={cardContent.subtitle}
              url={cardContent.url}
              imgUrl={cardContent.imgUrl}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
