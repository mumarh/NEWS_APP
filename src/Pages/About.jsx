import React from "react";

const About = () => {
  return (
    <div className="bg-gray-800 min-h-screen py-10 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 text-gray-200">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          About Us
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mt-2">
          Fast. Fresh. Fearless — That’s Dastak Media
        </p>
      </div>

      {/* Company Intro */}
      <div className="mb-12 text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
        <p className="mb-6">
          <span className="font-semibold text-white">Dastak Media</span> is a
          trusted news platform delivering accurate, unbiased, and timely
          information to people across Pakistan and around the globe. Since our
          inception, our goal has been simple: to keep the public informed with{" "}
          <span className="font-semibold text-white">
            fast, fresh, and fearless
          </span>{" "}
          reporting.
        </p>
        <p className="mb-6">
          We cover a wide range of topics, from politics and current affairs to
          business, sports, technology, and entertainment. Our team of skilled
          journalists and editors works around the clock to ensure you get the
          news that matters most — without bias or compromise.
        </p>
        <p>
          With a growing digital presence, Dastak Media continues to push the
          boundaries of modern journalism, embracing innovation while upholding
          the values of transparency, credibility, and integrity.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-12">
        <div className="bg-gray-900 shadow-md rounded-lg p-5 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
            Our Mission
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            To provide accurate, timely, and unbiased news that empowers people
            to make informed decisions. We aim to be the voice of the people,
            bringing truth to light and promoting awareness in society.
          </p>
        </div>
        <div className="bg-gray-900 shadow-md rounded-lg p-5 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
            Our Vision
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            To be the leading independent media house in Pakistan recognized for
            fearless journalism, modern storytelling, and commitment to truth,
            serving as a trusted source of information for generations to come.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-gray-900 p-5 sm:p-6 shadow-md rounded-lg text-center">
            <h3 className="font-bold text-lg mb-3 text-gray-200">Integrity</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              We uphold the highest standards of honesty and transparency in
              every story we deliver.
            </p>
          </div>
          <div className="bg-gray-900 p-5 sm:p-6 shadow-md rounded-lg text-center">
            <h3 className="font-bold text-lg mb-3 text-gray-200">
              Fearless Reporting
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              We speak truth to power and report without fear or favor,
              protecting the voice of the people.
            </p>
          </div>
          <div className="bg-gray-900 p-5 sm:p-6 shadow-md rounded-lg text-center">
            <h3 className="font-bold text-lg mb-3 text-gray-200">Innovation</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              We embrace digital transformation and bring creative, engaging
              storytelling for the modern audience.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-14 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Our Team
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
          Behind every headline is a dedicated team of journalists, editors,
          producers, and digital media experts. Together, we are committed to
          bringing you credible news that reflects reality and inspires change.
        </p>
      </div>

      {/* Closing Note */}
      <div className="bg-blue-900 border-l-4 border-blue-500 p-5 sm:p-6 lg:p-8 rounded-lg">
        <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
          Why Choose Dastak Media?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
          Because in today’s world of misinformation, you deserve a source that
          is reliable, fearless, and focused on what truly matters. At Dastak
          Media, we don’t just report the news — we deliver the truth.
        </p>
      </div>
    </div>
  );
};

export default About;
