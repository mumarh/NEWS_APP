import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); 
  const [status, setStatus] = useState(""); 
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm("service_nsnff3m", "template_5oexuzm", form.current, {
        publicKey: "XuQZ-3n8qWD3K1rdk",
      })
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message Sent Successfully! We will contact you soon.");
          form.current.reset();
          setTimeout(() => {
            setStatus("");
          }, 5000);
        },
        (error) => {
          setLoading(false);
          setStatus("❌ Failed to send message. Please try again!");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-gray-800 shadow-lg rounded-2xl p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
          Contact Us
        </h1>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-400">
              Get in Touch
            </h2>
            <p className="text-gray-300">
              We’re here to answer your questions, hear your feedback, or take
              your news tips. Reach out to us anytime!
            </p>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                📍 <span className="font-semibold text-white">Office:</span>{" "}
                123 News Avenue, Islamabad, Pakistan
              </p>
              <p>
                📞 <span className="font-semibold text-white">Phone:</span> +92
                300 1234567
              </p>
              <p>
                📧 <span className="font-semibold text-white">Email:</span>{" "}
                contact@dastakmedia.com
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-4 text-sm sm:text-base">
                <a href="#" className="hover:text-blue-400 transition">
                  🌐 Facebook
                </a>
                <a href="#" className="hover:text-sky-400 transition">
                  🐦 Twitter
                </a>
                <a href="#" className="hover:text-pink-400 transition">
                  📸 Instagram
                </a>
                <a href="#" className="hover:text-red-400 transition">
                  ▶ YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">
              Send Us a Message
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className={`w-full ${
                  loading ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"
                } text-white p-3 rounded-lg text-sm sm:text-base transition`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Status message below button */}
            {status && (
              <p
                className={`mt-4 text-sm sm:text-base ${
                  status.startsWith("✅") ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 text-center text-gray-400 text-sm sm:text-base">
          <p>
            🗺 Visit us at our Islamabad office, or get in touch online. We're
            available <span className="text-blue-400">24/7</span> for urgent
            news coverage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
