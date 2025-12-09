import React from "react";

const OurProducts = () => {
//       const axiosPublic = useAxiosPublic();

  
//   const { data: products = [] } = useQuery({
//     queryKey: ["home-products"],
//     queryFn: async () => {
//       const res = await axiosPublic.get("/products?limit=6");
//       return res.data;
//     },
//   });
  return (
    // <section className="px-6 md:px-16">
    //   <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>

    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    //     {products?.map((item) => (
    //       <motion.div
    //         key={item._id}
    //         initial={{ opacity: 0, scale: 0.9 }}
    //         whileInView={{ opacity: 1, scale: 1 }}
    //         transition={{ duration: 0.4 }}
    //         viewport={{ once: true }}
    //         className="card bg-base-100 shadow-xl rounded-xl"
    //       >
    //         <figure>
    //           <img
    //             src={item.image}
    //             alt={item.name}
    //             className="h-56 w-full object-cover"
    //           />
    //         </figure>

    //         <div className="card-body">
    //           <h3 className="text-xl font-semibold">{item.name}</h3>
    //           <p className="text-gray-600">{item.shortDesc}</p>
    //           <p className="font-bold">Price: ${item.price}</p>

    //           <Link
    //             to={`/product/${item._id}`}
    //             className="btn btn-primary btn-sm w-full"
    //           >
    //             View Details
    //           </Link>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </section>
  );
};

export default OurProducts;
