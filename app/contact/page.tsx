'use client';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
export default async function Page() {
  return (
    <div className="relative">
      <div className="w-full h-[500px] relative">
        <img src="./contact/contact.jpeg" alt="" className="w-[1600px] px-10" />
      </div>
      <div className="max-w-7xl mx-auto md:mt-[-120px] mt-[-360px] relative bg-white px-8 sm:px-20">
        {/* <h1 className="text-center py-8 font-site">Contact </h1> */}
        <div className="max-w-4xl py-8 mx-auto">
          <h3 className="font-site text-xl  my-3">Contact Us</h3>
          <div className="border-2 rounded-xl border-blue-site p-8">
            <div className="basis-2/3 bg-gray-300 rounded-xl h-64 text-gray-800 sm:pl-20 pt-12">
              <h2 className="text-2xl sm:text-3xl font-bold md:mx-auto md:ml-4 ml-8 mb-4 mx-2">CONTACT US</h2>
              <div className="flex">
                <FaLocationDot className=" my-1 mr-2 md:mx-none mx-2" />
                N-7/1 Newada Bhikaripur, DLW, Varanasi, India, Uttar Pradesh
              </div>
              <div className="flex">
                <FaPhoneAlt className=" my-1 mr-2 md:mx-none mx-2" />+ 91 9572072877
              </div>
              <div className="flex  md:text-lg font-semibold md:mx-none mx-2">
                {' '}
                Connect with us:
                <Link
                  href="/"
                  className=" text-gray-900 md:mx-none mx-2 hover:text-white dark:hover:text-white ms-5"
                >
                  <FaFacebook className="w-8 h-8" />
                </Link>
                
              </div>
            </div>
          </div>
        </div>
        {/* Whatsapp section */}
        <div className="flex mt-4">
          <div className="whatsAppContainer">
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

          <div className="phonecontainer">
            <a href="tel:95720 72877">
              <img
                src="./images/phone.png"
                alt="phone"
                className="w-[60px] h-[60px] animate-bounce duration-1 md:ml-[1020px] ml-[230px] mt-1  "
              />
            </a>
          </div>
        </div>
        {/* ================= */}
      </div>
    </div>
  );
}
