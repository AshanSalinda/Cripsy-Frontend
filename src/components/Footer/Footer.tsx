import React from 'react';
import { RiFacebookCircleFill,RiInstagramFill } from "react-icons/ri";
import { FaYoutube,FaTwitter } from "react-icons/fa6";


import footerData from '@/data/data.json';


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 px-20 mt-6 mb-0  ">

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          {/* Left Side - Contact Info */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold py-4">Contact</h3>
            <p className='font-thin py-2  transform transition duration-200 hover:translate-x-3  '>{footerData.contact.phone}</p>
            <p className='font-thin py-2  transform transition duration-200 hover:translate-x-3 '>{footerData.contact.email}</p>
            <p className='font-thin py-2  transform transition duration-200 hover:translate-x-3'>{footerData.contact.address}</p>
          </div>
          {/* Right Side - Social Links & Copyright */}
          <div className="text-center md:text-right ">
            <div className="flex justify-center md:justify-end space-x-8 mt-4">
            <p className='px-8 ' >{footerData.copyright}</p>
            <a href="#" aria-label="Facebook">
                {/* Social Medias  */}
               < RiFacebookCircleFill className='text-3xl transform transition duration-200 hover:translate-y-3 hover:text-carnation-300'/>
              </a>
              <a href="#" aria-label="Instagram">
                <RiInstagramFill className='text-3xl transform transition duration-200 hover:translate-y-3 hover:text-carnation-300'/>
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube className="text-3xl transform transition duration-200 hover:translate-y-3 hover:text-carnation-300"/>
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-3xl transform transition duration-200 hover:translate-y-3 hover:text-carnation-300"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
