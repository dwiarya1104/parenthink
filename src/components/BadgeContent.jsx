import React from "react";

export const BadgeContent = ({ title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="rounded-full hover:bg-[#d6b4a0] hover:text-white px-4 py-1 text-black border border-amber-900 hover:cursor-pointer transition duration-300 ease-in-out hover:border-white"
    >
      {title}
    </a>
  );
};
