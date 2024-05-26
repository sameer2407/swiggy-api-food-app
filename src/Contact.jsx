import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { Tilt } from "react-tilt";

const Contact = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 20, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div className="h-auto bg-gray-100 flex flex-col items-center pt-7 px-4 lg:flex-row lg:justify-center lg:px-0">
      <Tilt options={defaultOptions}>
        <div className="bg-orange-400 shadow-lg rounded-lg p-6 mb-6 lg:mb-0 lg:mr-6">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-2">
            Contact Us
          </h2>
          <div className="Details">
            <h3 className="email flex items-center justify-center text-white pb-2">
              <MdOutlineMail className="mr-2" />
              satyamjadaun2001@gmail.com
            </h3>
            <h3 className="email flex items-center justify-center text-white pb-2">
              <FaPhoneAlt />
              +91-9319316601
            </h3>
            <h3 className="email flex items-center justify-center text-white">
              <MdLocationCity />
              Kapashera ,New Delhi 110037
            </h3>
          </div>
        </div>
      </Tilt>

      <div className="text-sm bg-white shadow-lg rounded-lg p-6 max-w-full lg:max-w-[400px] w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Get in touch
        </h2>
        <form className="space-y-2">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Subject"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
