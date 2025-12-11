import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { _id, name, category, price, quantity, images } = product;

  return (
    <div className="card bg-base-100 shadow-xl rounded-xl hover:shadow-2xl duration-300">
      {/* IMAGE */}
      <figure>
        <img
          src={images[0]}
          alt={name}
          className="h-56 w-full object-cover rounded-t-xl"
        />
      </figure>

      {/* BODY */}
      <div className="card-body space-y-2">
        <h2 className="text-xl font-semibold">{name}</h2>

        <p className="text-gray-600">
          <span className="font-semibold">Category:</span> {category}
        </p>

        <p className="font-bold text-lg">Price: ${price}</p>

        <p className="text-gray-700">
          <span className="font-semibold">Available:</span> {quantity} pcs
        </p>

        <div className="card-actions justify-end pt-2">
          <Link
            to={`/product/${_id}`}
            className="btn btn-primary btn-sm w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
