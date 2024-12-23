import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#101928] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="md:w-1/2">
            <div className="flex gap-4"><a href="/" className="inline-block">
              <img
                src='/logo.png'
                alt="Clarity"
                loading="lazy"
                decoding="async"
                className="inline-block h-10 w-[40px]"
                width="340"
                height="80"
              />
            </a>
            <h3 className="text-white">Craftivert</h3></div>
            <p className="mt-6 text-gray-300 font-medium text-lg">
              Subscribe to Our Newsletter!
            </p>
            <p className="mt-2 mb-6 text-gray-400">
              Streamline operations with cutting-edge solutions that future-proof your business.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input text-gray-700 w-full rounded-md bg-gray-700 px-3 py-2 placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-4 py-2 font-medium hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 md:mt-0">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Menu</h3>
              <ul>
                {["Home", "Features", "Company", "Pricing"].map((item) => (
                  <li key={item} className="text-gray-300 hover:underline mb-2">
                    <a href={`/${item.toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4">Info</h3>
              <ul>
                {["Blog", "Blog Details", "Contact"].map((item) => (
                  <li key={item} className="text-gray-300 hover:underline mb-2">
                    <a href={`/${item.toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4">Social Media</h3>
              <ul>
                {["Facebook", "Twitter", "GitHub", "LinkedIn"].map((item) => (
                  <li key={item} className="text-gray-300 hover:underline mb-2">
                    <a href={`https://${item.toLowerCase()}.com`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-10 md:mt-20 border-t border-gray-700 pt-4">
          Created in 2024{" "}
          <a href="https://aniketdmore.netlify.app" className="underline">
            Aniket
          </a>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;