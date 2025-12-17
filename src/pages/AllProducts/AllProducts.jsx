import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../../components/Loading/Loading";
import useAxiosInstance from "../../hooks/UseAxiosInstance";

const AllProducts = () => {
  const axiosInstance = useAxiosInstance();
  const [page, setPage] = useState(1);
  const limit = 9;

  const { data, isLoading } = useQuery({
    queryKey: ["all-products", page],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/products?page=${page}&limit=${limit}`
      );
      return res.data;
    },
  });
  const { products = [], totalPages = 0 } = data || {};
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-6 md:px-16 py-10">
      <title>All Products</title>
      <h3 className="text-3xl font-bold mb-6">
        All Products: {products.length}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="btn btn-sm"
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`btn btn-sm ${page === index + 1 ? "btn-primary" : ""}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className="btn btn-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
