import React from "react";

type IconWrapperProps = {
  icon: string;
};

const IconWrapper = ({ icon }: IconWrapperProps) => {
  return <span className="material-symbols-rounded">{icon}</span>;
};

export default IconWrapper;
