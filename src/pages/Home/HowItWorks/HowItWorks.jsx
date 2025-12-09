import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Browse Products",
      desc: "Explore our premium garment collection.",
    },
    {
      step: "2",
      title: "Place Order",
      desc: "Add to cart and complete checkout easily.",
    },
    {
      step: "3",
      title: "Fast Delivery",
      desc: "Your items delivered quickly to your doorstep.",
    },
  ];
  return (
    <section className="px-6 md:px-16 space-y-12 text-center">
      <h2 className="text-3xl font-bold">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((s) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-base-200 rounded-2xl shadow"
          >
            <div className="text-5xl font-extrabold mb-4">{s.step}</div>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
