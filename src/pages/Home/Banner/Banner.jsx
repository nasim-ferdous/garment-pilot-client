import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Premium Garments for Your Lifestyle
        </h1>

        <p className="text-gray-600 text-lg">
          Explore premium-quality garments crafted with style, comfort, and
          innovation — perfect for every occasion.
        </p>

        <Link to="/all-products" className="btn btn-primary btn-lg">
          View Products
        </Link>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        src="https://media.istockphoto.com/id/172780460/photo/clothes-shop.jpg?s=2048x2048&w=is&k=20&c=ruOrkhLmpPJWVXYvWs5WBVVRG7pxJoK0dqq0Aw9vhJ0="
        className="rounded-2xl shadow-xl"
        alt="Hero Banner"
      />
    </section>
  );
};

export default Banner;
