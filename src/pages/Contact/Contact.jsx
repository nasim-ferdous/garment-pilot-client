import React from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 dark:bg-zinc-700 px-4 py-10 md:px-10">
      <title>Contact</title>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Have questions or need support? We’re here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <MdLocationOn className="text-3xl text-primary" />
            <p className="text-gray-600 dark:text-gray-400">
              Dhaka, Bangladesh
            </p>
          </div>

          <div className="flex items-center gap-4">
            <MdPhone className="text-3xl text-primary" />
            <p className="text-gray-600 dark:text-gray-400">
              +880 1234 567 890
            </p>
          </div>

          <div className="flex items-center gap-4">
            <MdEmail className="text-3xl text-primary" />
            <p className="text-gray-600 dark:text-gray-400">
              support@pilot.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-base-200 dark:bg-indigo-400 p-6 rounded-2xl shadow">
          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
