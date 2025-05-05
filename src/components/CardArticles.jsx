import { ChevronRight } from "lucide-react";

export const CardArticles = ({ title, url, image }) => {
  return (
    <div className="h-full w-full">
      <div className="card bg-base-100 shadow-sm h-full flex flex-col">
        <figure className="relative">
          <img src={image} alt="Shoes" className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black/40 rounded-t-xl"></div>
        </figure>

        <div className="card-body flex flex-col justify-between">
          <h2 className="card-title text-[#ae7d5c]">{title}</h2>
          <div className="flex flex-col text-[#c18d5c]">
            <hr />
            <a
              href={url}
              target="_blank"
              className="bg-[#c18d5c] text-white p-2 rounded-lg text-center mt-3 flex flex-row justify-center gap-3"
            >
              Lihat Artikel <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
