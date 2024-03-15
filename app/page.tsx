'use client';
import { CarouselClient } from '@app/components/Carousel/Carousel';
export default function Home() {
  return (
    <div className=" relative sm:px-20 rounded-lg pb-5">
      <div className="text-center w-full  relative">
        <div className="absolute top-0 left-0 h-[200px] sm:h-[calc(100%-55px)] w-full"></div>
        <video autoPlay muted loop className="w-full h-[200px] sm:h-fit">
          <source
            src="https://www.shutterstock.com/shutterstock/videos/1092312309/preview/stock-footage-aerial-view-of-modern-water-cleaning-facility-at-urban-wastewater-treatment-plant-purification.webm"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-[40px] bg-gray-300 md:w-[800px] w-[286px] rounded-xl mt-10 md:h-72 h-24 md:right-[30px] right-[60px]  sm:top-2/4 sm:left-2/4 text-gray-700 sm:translate-y-[-50%] sm:translate-x-[-50%] font-site">
          <h2 className="md::text-4xl  md:mb-4 mb-0 md:pt-10 pt-2">
            Transforming Water, Ensuring Purity,
          </h2>
          <h1 className="md:text-[60px] text-[18px]  md:leading-[90px] md:pb-0 pb-1 leading-[30px]">
            Securing Tomorrow, Your Trusted Partner
          </h1>
        </div>
      </div>

      <div className="flex mt-12 sm:mt-32 md:gap-12 gap-6 flex-col md:mx-0 mx-2 sm:flex-row">
        <div className="basis-1/3">
          <div className="h-[370px] relative">
            <img
              src="./images/pump.jpg"
              alt=""
              className="border border-gray-400 rounded-lg md:w-full w-[100%] h-full"
            />
          </div>
        </div>
        <div className="basis-2/3 ">
          <div className="h-[370px] relative ">
            <img
              src="./images/watertreatment.png"
              alt=""
              className="border border-gray-400 rounded-lg md:w-full w-[100%] h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:mt-32 mb-12 md:mx-0 mx-2  md:gap-12 gap-6">
        <div className="basis-2/3 md:mt-0 mt-8">
          <div className="h-[370px] sm:h-[470px] relative">
            <img
              src="./images/water3.jpg"
              alt=""
              className="border border-gray-400 rounded-lg md:w-full w-[100%] h-full"
            />
          </div>
        </div>
        <div className="basis-1/3">
          <div className="h-[370px] sm:h-[470px]  relative">
            <img
              src="./images/water1.jpg"
              alt=""
              className="border border-gray-400 rounded-lg  md:w-full w-[100%] h-full"
            />
          </div>
        </div>
      </div>

      {/* ====================start section======================= */}
      <div className="text-center justify-center text-4xl md:mx-1 mx-14 text-gray-800 mb-8">
        Most Popular Products
      </div>
      <div className="md:flex  flex-row gap-4 md:w-auto w-[100%] mb-10">
        <div className="matterPart border border-gray-100 md:w-[50%] w-auto rounded">
          <div className="imagePart my-2 mx-2 bg-gray-100 border rounded-lg overflow-hidden border-gray-300">
            <img
              className="w-[100%]  h-full"
              alt="Bio Medical Waste Incinerator Systems"
              title="Bio Medical Waste Incinerator Systems"
              src="https://cpimg.tistatic.com/09201343/b/4/Bio-Medical-Waste-Incinerator-Systems.jpg"
            />
          </div>
          <div className="contentArea">
            <div className="proName txt2 text-center">
              Bio Medical Waste Incinerator Systems
            </div>
            <div className="sendInquary txt2 text-center">View More</div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="matterPart bg-gray-100 md:w-[50%] w-auto rounded-lg">
          <div className="imagePart my-2 mx-2 bg-gray-100 md:w-auto border rounded-lg overflow-hidden border-gray-300">
            <img
              className="w-full h-[90%]"
              alt="10 Kld Compact Sewage Treatment Plant"
              title="10 Kld Compact Sewage Treatment Plant"
              src="https://cpimg.tistatic.com/09201331/b/4/10-Kld-Compact-Sewage-Treatment-Plant.jpg"
            />
          </div>
          <div className="contentArea">
            <div className="proName txt2 text-center">
              10 Kld Compact Sewage Treatment Plant
            </div>
            <div className="sendInquary txt2 text-center">View More</div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="matterPart border border-gray-100 md:w-[50%] w-auto rounded-lg">
          <div className="imagePart imagePart my-2 mx-2 bg-gray-100 border rounded-lg overflow-hidden border-gray-300">
            <img
              className="w-[100%] h-[100%]"
              alt="Industrial Sewage Treatment Plant"
              title="Industrial Sewage Treatment Plant"
              src="https://cpimg.tistatic.com/09201333/b/4/Industrial-Sewage-Treatment-Plant.jpg"
            />
          </div>
          <div className="contentArea">
            <div className="proName txt2 text-center">
              Industrial Sewage Treatment Plant
            </div>
            <div className="sendInquary txt2 text-center">View More</div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="matterPart border border-gray-100 md:w-[50%] w-auto rounded-lg">
          <div className="imagePart imagePart my-2 mx-2 bg-gray-100 border rounded-lg overflow-hidden border-gray-300">
            <img
              className="w-[100%] h-[100%]"
              alt="5 Kld Effluent Treatment Plant"
              title="5 Kld Effluent Treatment Plant"
              src="https://cpimg.tistatic.com/09201336/b/4/5-Kld-Effluent-Treatment-Plant.jpg"
            />
          </div>
          <div className="contentArea">
            <div className="proName txt2 text-center">
              5 Kld Effluent Treatment Plant
            </div>
            <div className="sendInquary txt2 text-center">View More</div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="clear"></div>
      </div>

      {/* ==================end section===================== */}
      <CarouselClient />

      {/* Whatsapp section */}
      
        <div className="">
          <a href="https://wa.me/9572072877">
            <img
              src="./images/whatsapp.png"
              alt="whatsapp"
              className="w-[80px] h-[75px] animate-bounce duration-1 mt-2 pb-1"
            />
          </a>
        </div>
        {/* ================= */}

        {/* phone section */}

        <div className="">
          <a href="tel:95720 72877">
            <img
              src="./images/phone.png"
              alt="phone"
              className=" w-[60px] h-[60px] animate-bounce duration-1 md:ml-[1020px] ml-[325px] mt-[-70px]  "
            />
          </a>
        </div>
      
      {/* ================= */}
    </div>
  );
}
