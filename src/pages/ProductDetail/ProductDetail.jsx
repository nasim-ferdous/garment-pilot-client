import React, { useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";
import useAuth from "../../hooks/useAuth";
import BookingModal from "../../components/BookingModal/BookingModal";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [openModal, setOpenModal] = useState(false);
  const { user } = useAuth();

  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["product-details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${id}`);
      return res.data;
    },
  });
  const handleBookingSubmit = async (bookingInfo) => {
    console.log("fromDetail", bookingInfo);
    if (bookingInfo.paymentOption === "stripe") {
      // redirect to payment page later
      axiosSecure.post("/create-checkout-session", bookingInfo).then((res) => {
        if (res.data.url) {
          window.location.assign(res.data.url);
        }
      });
    }
    // todo: save booking info to database
    const res = await axiosSecure.post("/orders", bookingInfo);
    console.log(res.data);

    if (res.data.orderId) {
      toast.success("Booking successful!");
      setOpenModal(false);
    }
  };

  if (isLoading) return <Loading></Loading>;

  return (
    <div>
      <div className="max-w-5xl mx-auto p-6 space-y-10">
        <title>{product.name}</title>
        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={product.images?.[0]}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
              alt={product.name}
            />
          </div>

          {/* Thumbnails if multiple images */}
          <div className="grid grid-cols-3 gap-4">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                className="h-32 w-full object-cover rounded-lg border shadow"
                alt="thumb"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-base-200 p-6 rounded-xl shadow-xl space-y-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <p className="text-gray-600">{product.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <p className="text-lg">
              <span className="font-bold">Category:</span> {product.category}
            </p>

            <p className="text-lg">
              <span className="font-bold">Price:</span> ${product.price}
            </p>

            <p className="text-lg">
              <span className="font-bold">Available Quantity:</span>{" "}
              {product.quantity}
            </p>

            <p className="text-lg">
              <span className="font-bold">Minimum Order Quantity:</span>{" "}
              {product.minimumOrderQuantity}
            </p>

            <p className="text-lg">
              <span className="font-bold">Payment Option:</span>{" "}
              {product.paymentOptions}
            </p>
          </div>

          {/* Order Button */}
          <button
            onClick={() => setOpenModal(true)}
            className="btn btn-primary btn-lg mt-6 w-full md:w-auto"
          >
            Book Now
          </button>
        </div>
      </div>
      {openModal && (
        <BookingModal
          product={product}
          user={user}
          onClose={() => setOpenModal(false)}
          onSubmitBooking={handleBookingSubmit}
        />
      )}
    </div>
  );
};

export default ProductDetail;
