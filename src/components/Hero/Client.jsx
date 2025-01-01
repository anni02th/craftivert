import React from 'react';
import 'aos/dist/aos.css';

const Client = () => {
  return (
    <div>
      <section className="m-auto z-10" id='blogs' data-aos="fade-up" data-aos-delay="100">
        <div className="container mx-auto">
          <div className="mb-14 section-title">
            <div className="col-span-10 xl:col-span-8">
              <p className="text-lg font-semibold">Key Features</p>
              <h1 className="text-5xl">Clientele</h1>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 overflow-x-auto">
            {/* Card 1 */}
            <div
              className="bg-[#D3F5FF] rounded-xl max-w-[450px] md:max-w-full mx-auto p-4" data-aos="fade-up" data-aos-delay="100"
            >
              <img
                src="blog1.png" // Update with a relevant image URL
                alt="Social Media Marketing"
                loading="lazy"
                decoding="async"
                className="rounded-[14px] mx-auto mb-4 bg-white w-full h-[273px] object-cover object-top"
                width="375"
                height="273"
              />
              <p className="px-2 py-1 text-sm bg-gray-800 inline-block rounded-full text-white">
                Social Media Engagement
              </p>
              <h4 className="py-4">
                <a
                  className="hover:underline decoration-blue-600 decoration-2"
                  href="https://www.emerald.com/insight/content/doi/10.1108/ejm-03-2017-0182/full/html"
                >
                  Boost Your Brand's Presence
                </a>
              </h4>
              <p className="mt-[10px] mb-16 line-clamp-3">
                Enhance your online visibility and connect with your audience through tailored social media strategies that drive engagement and growth.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-[#DDD6FF] rounded-xl max-w-[450px] md:max-w-full mx-auto p-4" data-aos="fade-up" data-aos-delay="200"
            >
              <img
                src="blog2.png" // Update with a relevant image URL
                alt="SEO Services"
                loading="lazy"
                decoding="async"
                className="rounded-[14px] mx-auto mb-4 bg-white w-full h-[273px] "
                width="375"
                height="273"
              />
              <p className="px-2 py-1 text-sm bg-gray-800 inline-block rounded-full text-white">
                Search Engine Optimization
              </p>
              <h4 className="py-4">
                <a
                  className="hover:underline decoration-blue-600 decoration-2"
                  href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide#:~:text=SEO%E2%80%94short%20for%20search%20engine,site%20through%20a%20search%20engine."
                >
                  Rank Higher on Search Engines
                </a>
              </h4>
              <p className="mt-[10px] mb-16 line-clamp-3">
                Optimize your website and content to improve visibility and attract more organic traffic with our expert SEO services.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-[#FAEFE8] rounded-xl max-w-[450px] md:max-w-full mx-auto p-4" data-aos="fade-up" data-aos-delay="300"
            >
              <img
                src="blog3.png" // Update with a relevant image URL
                alt="Content Marketing"
                loading="lazy"
                decoding="async"
                className="rounded-[14px] mx-auto mb-4 bg-white w-full h-[273px] object-cover object-top"
                width="375"
                height="273"
              />
              <p className="px-2 py-1 text-sm bg-gray-800 inline-block rounded-full text-white">
                Content Strategy
              </p>
              <h4 className="py-4">
                <a
                  className="hover:underline decoration-blue-600 decoration-2"
                  href="https://blog.hubspot.com/marketing/content-marketing-plan"
                >
                  Engage Your Audience with Compelling Content
                </a>
              </h4>
              <p className="mt-[10px] mb-16 line-clamp-3">
                Create impactful content that resonates with your target audience, driving conversions and building brand loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Client;