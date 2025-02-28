import React from "react";

const ResponsiveMenu = ({ open }) => {
  return (
    <div className={`${open ? "block" : "hidden"} text-xl font-semibold md:hidden uppercase bg-gray-200 text-black py-10 m-6 rounded-3xl`}>
      <ul className="flex flex-col items-center gap-10">
        <li>Home</li>
        <li>Estoque</li>
        <li>Venda</li>
        <li>Compra</li>
        <li>Contato</li>
      </ul>
    </div>
  );
};

export default ResponsiveMenu;
