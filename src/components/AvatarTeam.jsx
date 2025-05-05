import React from "react";

export const AvatarTeam = ({ name, img }) => {
  return (
    <div className="avatar flex flex-col justify-center items-center">
      <div className="ring-[#c18d5c] ring-offset-base-100 w-32 rounded-full ring-2 ring-offset-2">
        <img src={img} />
      </div>
      <p className="mt-3">{name}</p>
    </div>
  );
};
