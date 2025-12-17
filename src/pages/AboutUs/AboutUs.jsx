import React from "react";
import { FaCheckCircle, FaShippingFast, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-100">
        <title>About Us</title>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Company
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            We are committed to delivering reliable products, transparent order
            tracking, and a smooth experience for buyers, managers, and admins.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our platform is designed to simplify product management, order
              processing, and real-time tracking. We connect buyers, managers,
              and administrators in one unified system to ensure efficiency and
              transparency at every step.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From placing an order to final delivery, our goal is to make the
              entire journey smooth, secure, and easy to understand.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About us"
              className="rounded-xl shadow-lg max-h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-base-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-md p-6 text-center">
              <FaShippingFast className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Track your orders with live status updates from processing to
                delivery.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-md p-6 text-center">
              <FaUsers className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Role-Based Dashboards
              </h3>
              <p className="text-gray-600">
                Separate dashboards for buyers, managers, and admins for better
                control.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-md p-6 text-center">
              <FaCheckCircle className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted & Secure</h3>
              <p className="text-gray-600">
                We prioritize data security, reliability, and system stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Our mission is to build a modern, user-friendly platform that improves
          order management efficiency, enhances communication, and delivers
          trust through transparency.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
