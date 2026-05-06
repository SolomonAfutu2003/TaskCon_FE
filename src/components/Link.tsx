import React from "react";
import { NavLink } from "react-router";

interface linkProps {
  title?: string;
  icon?: any;
  route?: string;
  linkClassName?: string;
}

const Link = (props: linkProps) => {
  const { title, icon, route, linkClassName } = props;
  return (
    <div className={`text-md flex gap-3 px-3 py-2 ${linkClassName}`}>
      <NavLink to={`${route}`}>
        {icon}
        <span>{title}</span>
      </NavLink>
    </div>
  );
};

export default Link;
