'use client';
import { Carousel } from 'flowbite-react';

export const CarouselClient = () => {
  const texts = [
    {
      text: 'Waste Water Treatment Plants are essential facilities designed to clean and purify wastewater before it is released back into the environment. These plants employ a series of processes including physical, chemical, and biological methods to remove contaminants and pollutants from sewage and industrial wastewater.',

      image: './images/head.jpg',
    },
    {
      text: 'The Mild Steel Induced Draft Fan is a crucial component in industrial ventilation systems, particularly in applications where exhaust gases or air need to be removed from a processing environment. Constructed from mild steel, these fans are durable and corrosion-resistant, making them ideal for various industrial settings.',

      image: './images/MildSteel.jpg',
    },
    {
      text: 'The Packaged Sewage Treatment Plant is a compact and efficient system designed for the treatment of domestic or industrial wastewater in areas with limited space or infrastructure. It integrates various treatment processes, including physical, chemical, and biological methods, within a single unit.',

      image: './images/temp.gif',
    },
  ];

  return (
    <div className="  h-56 sm:h-52 xl:h-80 2xl:h-96">
      <Carousel>
        {texts.map((element, index) => (
          <div
            key={index}
            className="flex md:gap-4 gap-1  md:h-full h-auto items-center  justify-center bg-blue-site text-white p-8"
          >
            <p className="md:text-lg text-12 md:pt-2 pt-4 md:pb-2 mb-4 md:h-[100%] h-[80%]  text-auto w-[80%]  md:font-site font-light ">
              {element.text}
            </p>

            <div className=" md:w-[60%] w-[40%]  border rounded-lg md:h-64 h-36  ">
              <img
                src={element.image}
                alt=""
                className="  w-[100%] md:h-[100%] h-[100%] overflow-hidden rounded-lg"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
