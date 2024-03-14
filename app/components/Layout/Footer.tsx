import './footer.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => (
  <footer
    className=" leading-7 sm:p-1 font-site"
  
  >
    <div className="flex flex-col h-72 sm:flex-row">
    <div className="basis-1/3 bg-gray-300 text-center">
      <a href='#'>
      <img  src="./logo/output.png"  className="h-[100%]" alt="" />
      </a>
        
      </div>
      <div className="basis-2/3 bg-gray-300  text-gray-800 sm:pl-20 pt-12">
        <h2 className="text-2xl sm:text-3xl font-bold">CONTACT US</h2>
        <div className='flex'><FaLocationDot className=' my-1 mr-2' />
          N-7/1 Newada Bhikaripur, DLW, Varanasi, India, Uttar Pradesh
        </div>
        <div className='flex'><FaPhoneAlt className=' my-1 mr-2'/>+ 91 95720 72877</div>
          <div className='flex text-lg'> Connect with us: 
        <Link
              href="/"
              className=" text-gray-900 hover:text-white dark:hover:text-white ms-5"
            > 
              <FaFacebook className="w-8 h-8" />

            </Link>
            <Link
              href="/"
              className=" text-gray-900 hover:text-white dark:hover:text-white ms-5"
            > 
              <FaInstagram className="w-8 h-8" />

            </Link>
            </div>
       
      </div>
      </div>
      <div className='text-sm h-10 py-2 text-center bg-blue-site text-white'>Copyright © 2024 All Rights Reserved By Ganga Paryavaran Solution & Developed by- Hindsol Software</div>
    </footer>
);

export default Footer;
