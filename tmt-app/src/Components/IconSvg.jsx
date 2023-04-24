import React from "react";
import TopicIcon from "../Images/icons/spriteSheet.svg";

function IconSvg({ topic, size, color }) {
  return (
    <svg fill={color} width={size} height={size}>
      <use href={`${TopicIcon}#icon-${topic}`} />
    </svg>
  );
}

export default IconSvg;
