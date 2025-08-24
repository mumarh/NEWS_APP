import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Ali Khan",
      role: "Journalist",
      text: "This news channel always provides authentic and timely updates. Truly reliable!",
    },
    {
      name: "Sara Ahmed",
      role: "Viewer",
      text: "I love the balanced reporting and professionalism. Keep up the great work!",
    },
    {
      name: "Imran Malik",
      role: "Business Owner",
      text: "The coverage is very detailed and helps me stay informed about current affairs.",
    },
    {
      name: "Fatima Noor",
      role: "Student",
      text: "I can always count on this channel for unbiased reporting. It helps me stay updated.",
    },
    {
      name: "Usman Raza",
      role: "Engineer",
      text: "Their fearless journalism is inspiring. They highlight the issues that truly matter.",
    },
    {
      name: "Nadia Shah",
      role: "Teacher",
      text: "A trustworthy news source. I recommend it to my students for learning responsible media.",
    },
    {
      name: "Hassan Javed",
      role: "Lawyer",
      text: "They shed light on issues that often get ignored. A true voice of the people.",
    },
    {
      name: "Ayesha Siddiqui",
      role: "Doctor",
      text: "The health-related updates are always accurate and valuable. Much appreciated.",
    },
    {
      name: "Bilal Akhtar",
      role: "IT Specialist",
      text: "I admire how they use modern tech to deliver fast and reliable news.",
    },
    {
      name: "Zara Khan",
      role: "Writer",
      text: "Their storytelling is powerful. It feels like every story matters.",
    },
    {
      name: "Kamran Iqbal",
      role: "Accountant",
      text: "Very professional and trustworthy reporting. Highly recommended.",
    },
    {
      name: "Mahnoor Ali",
      role: "Activist",
      text: "They amplify the voices of marginalized communities. Respect!",
    },
    {
      name: "Sami Ullah",
      role: "Photographer",
      text: "Great visuals and in-depth coverage. Their work truly stands out.",
    },
    {
      name: "Shazia Bibi",
      role: "Housewife",
      text: "I rely on them daily for authentic news. They never disappoint.",
    },
    {
      name: "Tariq Mehmood",
      role: "Retired Army Officer",
      text: "They value integrity and honesty in journalism. Salute to their team.",
    },
    {
      name: "Laiba Anwar",
      role: "College Student",
      text: "Their youth-focused content helps me understand national issues better.",
    },
    {
      name: "Adnan Farooq",
      role: "Entrepreneur",
      text: "The business coverage keeps me updated on market trends. Very useful.",
    },
    {
      name: "Rabia Gul",
      role: "Social Worker",
      text: "Their humanitarian coverage motivates society to do better.",
    },
    {
      name: "Omar Qureshi",
      role: "Civil Engineer",
      text: "They raise awareness about infrastructure challenges in the country.",
    },
    {
      name: "Mariam Jatoi",
      role: "Lecturer",
      text: "I appreciate their unbiased stance. They set a great example for students.",
    },
    {
      name: "Kashif Ali",
      role: "Graphic Designer",
      text: "The digital presence is amazing. Their updates are creative and modern.",
    },
    {
      name: "Hina Zafar",
      role: "NGO Worker",
      text: "They highlight social issues that really matter. Truly fearless journalism.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-gray-800 shadow-lg rounded-2xl p-6 sm:p-10">
        {/* Page Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
          Testimonials
        </h1>
        <p className="text-blue-400 mb-10 sm:mb-12 max-w-2xl mx-auto text-center text-sm sm:text-base">
          Hear what our valued viewers and partners say about our news coverage
          and services. Your trust drives us to deliver the truth — fast, fresh,
          and fearless.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-2xl shadow-md p-5 sm:p-6 flex flex-col justify-between hover:shadow-xl transition"
            >
              <p className="text-gray-200 italic mb-4 text-sm sm:text-base leading-relaxed">
                “{review.text}”
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center text-sm sm:text-lg font-bold text-blue-600">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3 sm:ml-4 text-left">
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    {review.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-12 sm:mt-16 bg-gray-700 border-l-4 border-blue-500 p-5 sm:p-6 rounded-lg text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">
            Your Voice Matters
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            We believe our audience is our biggest strength. Share your thoughts
            with us, and let’s shape fearless journalism together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
