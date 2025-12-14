import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading/Loading";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import UpdateProductModal from "./UpdateProductModal";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchText, setSearchText] = useState("");
  const {
    data: products = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["manage-products", user.email, searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/manage-products?email=${user.email}&searchText=${searchText}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });
  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Delete Product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-product/${id}`).then((res) => {
          console.log(res.data);

          Swal.fire({
            title: "Deleted!",
            text: "Your Product has been deleted.",
            icon: "success",
          });
          refetch();
        });
      }
    });
  };

  {
    isLoading && <Loading />;
  }
  {
    isFetching && !isLoading && (
      <span className="loading loading-spinner loading-sm ml-2"></span>
    );
  }
  return (
    <div className="p-4 md:p-8">
      <title>Manage Products</title>
      <div className="flex justify-between items-center">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Manage Your Product</h2>
          <p className="text-gray-500 mt-1">
            Total Products: {products.length}
          </p>
        </div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="search"
              className="grow"
              placeholder="Search by name or category"
              value={searchText}
            />
          </label>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead className="bg-base-200 text-base">
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Payment Mode</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product, index) => (
                  <tr key={product._id}>
                    <td>{index + 1}</td>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={product?.images?.[0]}
                              alt={product.name}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold">{product.name}</div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="badge badge-success badge-sm">
                        ${product.price}
                      </span>
                    </td>

                    <td>
                      <span className="badge badge-info badge-sm">
                        {product.paymentOptions}
                      </span>
                    </td>

                    <td className="text-center">
                      <div className="flex justify-center gap-2">
                        <div className="tooltip" data-tip="Update Product">
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="btn btn-primary btn-xs"
                          >
                            <FaEdit className="text-lg" />
                          </button>
                        </div>

                        <div className="tooltip" data-tip="Delete Product">
                          <button
                            onClick={() => handleDeleteProduct(product._id)}
                            className="btn btn-error btn-xs"
                          >
                            <RiDeleteBin2Fill />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}

                {products.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center py-8 text-gray-500">
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {selectedProduct && (
        <UpdateProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageProducts;
