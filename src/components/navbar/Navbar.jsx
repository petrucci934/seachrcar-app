import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Navbar Items
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Estoque", link: "/estoque" },
    { label: "Venda", link: "/venda" },
    { label: "Compra", link: "/compra" },
    { label: "Contato", link: "/contato" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 text-white bg-gradient-to-r from-[#0f0f0f] to-[#323232] p-4">
        <div>
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
            {/* Logo */}
            <h1 className="text-xl font-bold cursor-pointer hover:text-gray-400 transition-colors duration-300">
              SearchCar
            </h1>

            {/* Menu */}
            <div className="hidden md:flex gap-6 text-lg items-center  font-bold">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative cursor-pointer pb-2 hover:text-gray-400 transition-colors duration-300 after:absolute after:w-full after:h-[2px] after:bg-gray-400 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 list-none"
                >
                  <a href={item.link}> {item.label}</a>
                </li>
              ))}
            </div>

            {/* Contato e Ícones */}
            <div className="flex items-center gap-6">
              {/* WhatsApp */}
              <div className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition-colors duration-300">
                <FaWhatsapp />
                <span>+55 11 278-9999</span>
              </div>

              {/* Redes Sociais */}

              <div className="flex gap-4">
                {[FaInstagram, FaYoutube, FaFacebook].map((Icon, index) => (
                  <Icon
                    key={index}
                    className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <MdMenu className="text-4xl cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Responsivo */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
