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
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvb2R8ZW58MHx8fHwxNjg3NTY5NzA1&ixlib=rb-4.0.3&q=80&w=400"
          alt={title}
          className="rounded-xl w-full h-48 object-cover"
        />
        <p className="absolute top-2 left-3 rounded-full border border-white px-3 py-1 text-xs font-bold text-white bg-black/50">
          0{index}
        </p>
        <h2 className="absolute top-28 left-5 text-[#ebf17c] font-bold text-xl">
          {title}
        </h2>
        <h2 className="absolute top-36 left-5 text-[#ebf17c] text-sm">
          {subtitle}
        </h2>
      </div>
    </a>
  );
};
