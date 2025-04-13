import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

const menuItems = ["Inicio", "Nosotres", "Portfolio", "Servicio", "Contacto"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 bg-gray-50 shadow-sm"
      >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <img src={logo} alt="Logo Banja" className="h-8 w-auto max-w-[220px]" />
        <ul className="hidden md:flex gap-6 font-semibold text-gray-800 text-sm tracking-wide">
          {menuItems.map((item) => (
            <li
              key={item}
              className="hover:text-pink-500 transition-colors duration-200 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
