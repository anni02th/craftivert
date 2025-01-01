import { Twitter, Instagram, Linkedin, Home,MessageCircleCode, FileText, Send } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 justify-between items-center space-y-8 md:space-y-0">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-4">
            <a href="/" className="">
              <img
                src="/logo.png"
                alt="Clarity"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto"
                width="auto"
                height="80"
              />
            </a>
            <h3 className="text-white text-xl font-bold">Craftivert</h3>
          </div>

          {/* Navigation Links */}
          <div className="">
            <ul className="text-white flex gap-4 flex-wrap justify-center">  
              <li className="flex items-center gap-2 hover:text-[#9f6fff] transition-colors duration-300 cursor-pointer">
                <a href="#home" className="inline-flex justify-center items-center gap-1">
                <Home size={18} /><span>Home</span>
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-[#9f6fff] transition-colors duration-300 cursor-pointer">
                <a href="#feature" className="inline-flex justify-center items-center gap-1">
                <FileText size={18} />
                <span>Features</span>
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-[#9f6fff] transition-colors duration-300 cursor-pointer">
              <a href="#blogs" className="inline-flex justify-center items-center gap-1">
              <MessageCircleCode size={18} />
              <span>Blogs</span>
              </a>
              </li>
              <li className="flex items-center gap-2 hover:text-[#9f6fff] transition-colors duration-300 cursor-pointer">
                <a href="#contact" className="inline-flex justify-center items-center gap-1">
                <Send size={18} />
                <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Decorative Image */}
          <img 
            src="svg.svg" 
            alt="" 
            width={100} 
            className="my-12 hidden md:block"
          />

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a 
              href="https://twitter.com/craftivert" 
              className="text-white hover:text-[#9f6fff] transition-colors duration-300"
            >
              <Twitter color="#ffffff" size={24} />
            </a>
            <a 
              href="https://instagram.com/craftivert" 
              className="text-white hover:text-[#9f6fff] transition-colors duration-300"
            >
              <Instagram color="#ffffff" size={24} />
            </a>
            <a 
              href="https://linkedin.com/company/craftivert" 
              className="text-white hover:text-[#9f6fff] transition-colors duration-300"
            >
              <Linkedin color="#ffffff" size={24} />
            </a>
          
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400 mt-10 md:mt-20 border-t border-gray-700 pt-4">
          Created in 2024{" "}
          <a 
            href="https://aniketdmore.netlify.app" 
            className="underline hover:text-[#9f6fff] transition-colors duration-300"
          >
            Aniket
          </a>
          . All Rights Reserved Under Craftivert.
        </div>
      </div>
    </footer>
  );
};

export default Footer;