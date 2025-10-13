import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WA = () => {
  const phoneNumber = "916396476118";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 md:bottom-6 right-4 md:right-6 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default WA;
