import React from "react";
import { motion } from "framer-motion";

const ManagersInfo = () => {
  return (
    <section className="px-6 md:px-16 space-y-10">
      <h2 className="text-3xl font-bold text-center">Management Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            name: "Jamal Uddin",
            role: "Factory Manager",
            img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
          },
          {
            name: "Sabrina Rahman",
            role: "Production Head",
            img: "https://plus.unsplash.com/premium_photo-1673957923985-b814a9dbc03d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            name: "Hasan Ali",
            role: "Quality Supervisor",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
          },
        ].map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card bg-base-100 shadow-xl rounded-xl p-6 text-center"
          >
            <img
              src={m.img}
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              alt=""
            />
            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-gray-500">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ManagersInfo;
