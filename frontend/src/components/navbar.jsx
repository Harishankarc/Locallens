"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MapPin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    "Explore", "Post", "Community", "Leaderboard", "My Posts", "Notifications", "Profile", "Logout"
  ];
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=en`
          );
          const data = await res.json();
          const place = data.display_name;
          setLocation(place || 'Unknown location');
        } catch (err) {
          setError('Failed to fetch location name');
        }
      },
      (err) => {
        setError(`Error: ${err.message}`);
      }
    );
  }, []);


  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-6 py-2 shadow-xl bg-black sticky top-0 z-50 "
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image src="/images/logo.png" width={100} height={100} alt="Logo" className="cursor-pointer invert" />
      </motion.div>


      <div className="flex gap-2 md:gap-4 items-center text-white justify-center">
        <MapPin size={30} className="text-amber-700 hover:text-amber-800 transition-colors" />
        <div>
          <p className="text-md md:block hidden">Current Location</p>
          <p className="text-sm text-gray-400">{location ? `${location.slice(0,40)}...` : "Loading..."}</p>
        </div>
      </div>

      <ul className="hidden md:flex flex-row gap-6 font-medium text-white text-sm">
        {navItems.map((item, idx) => (
          <motion.li
            key={idx}
            whileHover={{ y: -2 }}
            className={`relative group cursor-pointer transition-colors duration-300 text-sm ${item.toLowerCase() === "logout" ? "text-red-600" : "text-white"}`}
          >
            {item}
            <span className="absolute left-0 bottom-[-10] w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
          </motion.li>
        ))}
      </ul>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className="text-white"/> : <Menu size={28} className="text-white"/>}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 40 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-5 py-6 shadow-md z-40 md:hidden"
          >
            {navItems.map((item, idx) => (
              <li
                key={idx}
                onClick={() => setIsOpen(false)}
                className={`cursor-pointer text-lg hover:text-amber-700 transition-colors ${item.toLowerCase() === "logout" ? "text-red-600" : "text-gray-800"}`}
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
