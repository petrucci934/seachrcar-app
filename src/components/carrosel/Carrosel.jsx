import React, { useState } from "react";
import carro from "/src/assets/images/carro.jpg";
import carro1 from "/src/assets/images/carro1.jpg";
import carro2 from "/src/assets/images/carro2.jpg";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
  BsCircleFill,
} from "react-icons/bs";

const data = [carro, carro1, carro2];

const Carrosel = () => {
  const [slide, setSlide] = useState(0);

  const navPrev = () => {
    const isFirst = slide === 0;
    const prevSlide = isFirst ? data.length - 1 : slide - 1;

    setSlide(prevSlide);
  };

  const navNext = () => {
    const isLast = slide === data.length - 1;
    const nextSlide = isLast ? 0 : slide + 1;

    setSlide(nextSlide);
  };

  const navDot = (index) => {
    setSlide(index);
  };

  return (
    <div>
      <div
        className="relative w-full bg-no-repeat"
        style={{
          backgroundImage: `url(${data[slide].img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={data[slide]}
          alt={`Carro ${slide + 1}`}
          className="w-full md:h-[400px] lg:h-[650px] relative mt-2 object-cover rounded-lg shadow-lg"
        />
        {/* Contêiner das setas */}
        <div className="absolute top-1/2 left-0 w-full flex justify-between px-4 transform -translate-y-1/2">
          <BsFillArrowLeftCircleFill
            onClick={navPrev}
            className="text-white text-4xl opacity-70 hover:opacity-100 cursor-pointer"
          />
          <BsFillArrowRightCircleFill
            onClick={navNext}
            className="text-white text-4xl opacity-70 hover:opacity-100 cursor-pointer"
          />
        </div>
        <div className="absolute bottom-2 cursor-pointer left-1/2 transform -translate-x-1/2 flex gap-2">
          <BsCircleFill
            onClick={() => navDot(0)}
            className="text-white text-xl w-3 h-3"
          />
          <BsCircleFill
            onClick={() => navDot(1)}
            className="text-white text-xl w-3 h-3"
          />
          <BsCircleFill
            onClick={() => navDot(2)}
            className="text-white text-xl w-3 h-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Carrosel;
