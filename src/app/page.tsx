import Image from "next/image";
import { FaShoppingCart, FaInfoCircle, FaPhoneAlt, FaQuestionCircle, FaHeadset } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        {/* Logo */}
        <Image
          className="dark:invert"
          src="/LogingPhoto.png"
          alt="Login Image"
          width={180}
          height={38}
          priority
        />

        {/* Welcome Message */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">
          Welcome to Cripsy!
        </h1>
        <p className="text-center sm:text-left text-gray-600 dark:text-gray-300">
          Discover amazing products with exclusive deals, just for you.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex gap-4 items-center flex-col sm:flex-row bg-red">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/shop"
            aria-label="Start Shopping"
          >
            <FaShoppingCart /> Start Shopping
          </a>
          <a
            className="rounded-full border border-gray-300 dark:border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/about"
            aria-label="Learn More About Us"
          >
            <FaInfoCircle /> Learn More About Us
          </a>
        </div>
      </main>

      {/* Footer with Links */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
          aria-label="Contact Us"
          title="Contact Us"
        >
          <FaPhoneAlt /> Contact Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/faq"
          aria-label="FAQ"
          title="FAQ"
        >
          <FaQuestionCircle /> FAQ
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/support"
          aria-label="Customer Support"
          title="Customer Support"
        >
          <FaHeadset /> Customer Support
        </a>
      </footer>
    </div>
  );
}
