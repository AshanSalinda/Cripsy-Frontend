import React from 'react';
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaTwitter } from "react-icons/fa6";
import footerData from '@/data/data.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-20 mt-6 mb-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Left Side - Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold py-4">Contact</h3>
            <div className="font-thin py-2 transform transition duration-200 hover:translate-x-3">
                <a href={`tel:${footerData.contact.phone}`}>{footerData.contact.phone}</a>
            </div>
            <div className="font-thin py-2 transform transition duration-200 hover:translate-x-3">
                <a href={`mailto:${footerData.contact.email}`}>{footerData.contact.email}</a>
            </div>
            <p className="font-thin py-2 transform transition duration-200 hover:translate-x-3">
                {footerData.contact.address}
            </p>
          </div>

          {/* Right Side - Social Links & Copyright */}
          <div className="text-center md:text-right">
            <p className="mb-4 md:mb-0">{footerData.copyright}</p>
            <div className="flex justify-center md:justify-end space-x-6 mt-4">
              <a href="#" aria-label="Facebook">
                <RiFacebookCircleFill className="text-3xl transform transition duration-200 hover:translate-y-1 hover:text-carnation-300" />
              </a>
              <a href="#" aria-label="Instagram">
                <RiInstagramFill className="text-3xl transform transition duration-200 hover:translate-y-1 hover:text-carnation-300" />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube className="text-3xl transform transition duration-200 hover:translate-y-1 hover:text-carnation-300" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-3xl transform transition duration-200 hover:translate-y-1 hover:text-carnation-300" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
