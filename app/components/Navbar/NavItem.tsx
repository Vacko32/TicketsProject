"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const NavItem: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="cursor-pointer hover:opacity-50 transition-opacity duration-300">
      {children}
    </div>
  );
};

export default NavItem;
