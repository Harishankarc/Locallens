'use client';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero(){
  return(
    <div className="bg-[#161616] h-screen w-screen flex flex-col justify-center items-center text-white px-10">
        <div className="text-center flex gap-2 flex-col justify-center items-center">
          <h1 className="md:text-7xl text-6xl">LocalService Community</h1>
          <h1 className="md:text-4xl text-3xl mb-10">find your service in minutes.</h1>
          <p className="text-gray-500 font-medium mb-10 md:text-md text-sm">Connect with your local community by exploring nearby services, events, and updates – all curated and shared by people around you.<br/> Whether it's finding a home-cook, attending a local fest, or posting a public notice,<br /> LocalLens brings your neighborhood to your screen.</p>
          <button className="bg-amber-700 hover:bg-amber-800 text-black font-bold py-2 px-4 rounded md:w-96 w-3/4 cursor-pointer">Get Started for free</button>
          <p className="text-gray-500 font-medium text-sm mt-2">Loved by 500+ small ventors and workers</p>
          <motion.div
          className="absolute md:bottom-30 bottom-20 cursor-pointer"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={40} className="text-amber-700 hover:text-amber-800 transition-colors" />
        </motion.div>
        </div>
      </div>
  );
}