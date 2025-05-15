export const CardContent = ({ title, subtitle, url, imgUrl, index }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition duration-300 hover:scale-105"
    >
      <div className="relative">
        <img
          src={imgUrl}
          alt={title}
          className="rounded-xl w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

        <p className="absolute top-2 left-3 rounded-full border border-white px-3 py-1 text-xs font-bold text-white bg-black/50">
          0{index}
        </p>
        <h2 className="absolute top-28 left-5 text-[#ebf17c] font-bold text-lg">
          {title}
        </h2>
        <h2 className="absolute top-36 left-5 text-[#ebf17c] text-sm">
          {subtitle}
        </h2>
      </div>
    </a>
  );
};
