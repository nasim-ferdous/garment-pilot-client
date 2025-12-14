import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateProductModal = ({ product, onClose, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      minimumOrderQuantity: product.minimumOrderQuantity,
      paymentOptions: product.paymentOptions,
      showOnHomePage: product.showOnHomePage,
    },
  });

  const onSubmit = async (data) => {
    await axiosSecure
      .patch(`/update-product/${product._id}`, data)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount === 1) {
          toast.success("Product updated successfully");
          refetch();
          onClose();
        }
      });
  };

  return (
    <dialog className="modal modal-open">
      <title>Update product</title>
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-lg mb-4">Update Product</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              {...register("name", { required: true })}
              className="input input-bordered w-full"
              placeholder="Product Name"
            />
            <label className="label">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered w-full"
              placeholder="Description"
            />
            <label className="label">Category</label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="">Category</option>
              <option value="shirt">shirt</option>
              <option value="pant">pant</option>
              <option value="jacket">jacket</option>
              <option value="hoodie">hoodie</option>
              <option value="Accessories"> accessories</option>
            </select>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="label">Price</label>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Price"
                />
              </div>
              <div>
                <label className="label">Quantity</label>
                <input
                  {...register("quantity", { required: true })}
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Quantity"
                />
              </div>
              <div>
                <label className="label">Minimum order quantity</label>
                <input
                  {...register("minimumOrderQuantity", { required: true })}
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Minimum order quantity"
                />
              </div>
            </div>
            <label className="label">Payment Options</label>
            <select
              {...register("paymentOptions", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="cash on delivery">Cash on Delivery</option>
              <option value="stripe">Stripe</option>
            </select>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                {...register("showOnHomePage")}
                className="checkbox"
              />
              Show on Home Page
            </label>

            <div className="modal-action">
              <button type="button" onClick={onClose} className="btn">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateProductModal;
