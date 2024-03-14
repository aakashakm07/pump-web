'use client';
import { Carousel } from 'flowbite-react';

export const CarouselClient = () => {
  const texts = [
    {
   text: 'Waste Water Treatment Plants are essential facilities designed to clean and purify wastewater before it is released back into the environment. These plants employ a series of processes including physical, chemical, and biological methods to remove contaminants and pollutants from sewage and industrial wastewater. By treating wastewater, these plants play a critical role in protecting public health, preserving aquatic ecosystems, and ensuring the safety of water supplies for communities. They help in reducing water pollution, minimizing the spread of diseases, and promoting sustainable water management practices. Waste Water Treatment Plants are vital infrastructure for maintaining environmental quality and safeguarding natural resources.',
    
    image: "./images/head.jpg",
  },
  {
    text: 'The Mild Steel Induced Draft Fan is a crucial component in industrial ventilation systems, particularly in applications where exhaust gases or air need to be removed from a processing environment. Constructed from mild steel, these fans are durable and corrosion-resistant, making them ideal for various industrial settings. They operate by creating negative pressure, effectively drawing air and gases out of a facility and expelling them into the atmosphere or through a filtration system. This helps maintain a safe and comfortable working environment by regulating air quality and temperature. Mild Steel Induced Draft Fans are integral to ensuring optimal airflow and ventilation in industrial processes.',
     
     image: "./images/MildSteel.jpg",
   },
   {
    text: 'The Packaged Sewage Treatment Plant is a compact and efficient system designed for the treatment of domestic or industrial wastewater in areas with limited space or infrastructure. It integrates various treatment processes, including physical, chemical, and biological methods, within a single unit. This packaged solution is highly customizable and can be tailored to meet specific capacity and treatment requirements. It effectively removes contaminants, pathogens, and pollutants from sewage, producing treated water that meets regulatory standards for safe disposal or reuse. Packaged Sewage Treatment Plants are cost-effective, easy to install, and require minimal maintenance, making them an ideal solution for decentralized wastewater treatment needs.',
     
     image: "./images/temp.gif",
   },
  ];

  return (
    <div className="  h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {texts.map((element, index) => (
          <div
            key={index}
            className="flex gap-4 h-full items-center  justify-center bg-blue-site text-white p-8"
          >
            <p className="text-lg sm:text-sm w-[80%] max-w-xs sm:max-w-3xl font-site">
              {element.text}
            </p>

            <div className=' w-[80%] h-64 '>
                <img src={element.image} alt="" className='w-[100%] h-[100%] overflow-hidden rounded-lg' />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
