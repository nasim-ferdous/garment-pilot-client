import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [previews, setPreviews] = useState([]);

  const MAX_IMAGES = 3;

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const willAdd = Math.min(files.length, MAX_IMAGES - previews.length);
    if (willAdd <= 0) {
      toast.error(`You can upload up to ${MAX_IMAGES} images.`);
      return;
    }

    const newPreviews = files.slice(0, willAdd).map((file) => {
      return {
        id: Math.random().toString(36).slice(2, 9), // simple id
        file,
        url: URL.createObjectURL(file),
      };
    });

    setPreviews((p) => [...p, ...newPreviews]);
  };

  const handleRemovePreview = (id) => {
    setPreviews((current) => {
      const toRemove = current.find((c) => c.id === id);
      if (toRemove) URL.revokeObjectURL(toRemove.url);
      return current.filter((c) => c.id !== id);
    });
  };

  useEffect(() => {
    return () => {
      previews.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, [previews]);

  const onSubmit = async (data) => {
    try {
      const filesToUpload = previews.map((p) => p.file);

      if (!filesToUpload.length) {
        toast.error("Please add at least one product photo.");
        return;
      }

      const uploadedUrls = [];

      for (const file of filesToUpload) {
        const formData = new FormData();
        formData.append("image", file);

        const photo_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_HOST_KEY
        }`;

        const res = await axios.post(photo_API_URL, formData);
        const url = res.data?.data?.display_url;
        if (url) uploadedUrls.push(url);
      }

      const productPayload = {
        name: data.name,
        description: data.description,
        category: data.category,
        price: data.price,
        quantity: data.quantity,
        minimumOrderQuantity: data.moq,
        images: uploadedUrls,
        paymentOptions: data.paymentOptions,
        showOnHomePage: data.showOnHomePage,
        createdAt: new Date().toLocaleString(),
        createdBy: user.email,
      };
      axiosSecure.post("/products", productPayload).then((res) => {
        if (res.data.insertedId) {
          toast.success("Product added successfully!");
        } else {
          toast.error("Failed to add product.");
        }
      });

      console.log("Product payload ready:", productPayload);
    } catch (err) {
      console.error("Upload error", err);
      toast.error("An error occurred while uploading images.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <title>Add-products</title>
      <h3 className="text-4xl text-center">Add your product</h3>
      <form className="w-full max-w-md mb-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="card bg-base-200 shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="input w-full"
                placeholder="Name"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Name is required
                </p>
              )}

              {/* Description  */}
              <label className="label">Description</label>
              <textarea
                {...register("description", { required: true })}
                className="textarea textarea-bordered w-full min-h-[120px] resize-y"
                placeholder="Description"
              />
              {errors.description?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Description is required
                </p>
              )}

              {/* category */}
              <label className="label">Category</label>
              <select
                {...register("category", { required: true })}
                className="select w-full"
              >
                <option value="">Category</option>
                <option value="shirt">shirt</option>
                <option value="pant">pant</option>
                <option value="jacket">jacket</option>
                <option value="hoodie">hoodie</option>
                <option value="Accessories"> accessories</option>
              </select>
              {errors.category?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Category is required
                </p>
              )}

              {/* price */}
              <label className="label">Price</label>
              <input
                {...register("price", { required: true })}
                type="number"
                className="input w-full"
                placeholder="Price"
              />
              {errors.price?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Price is required
                </p>
              )}

              {/* Available Quantity */}
              <label className="label">Available Quantity</label>
              <input
                {...register("quantity", { required: true })}
                type="number"
                className="input w-full"
                placeholder="Quantity"
              />
              {errors.quantity?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Quantity is required
                </p>
              )}

              {/* Minimum Order Quantity */}
              <label className="label">Minimum Order Quantity</label>
              <input
                {...register("moq", { required: true })}
                type="number"
                className="input w-full"
                placeholder="Minimum Order Quantity"
              />
              {errors.moq?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Minimum Order Quantity is required
                </p>
              )}

              {/* Photo - multiple + preview */}
              <label className="label">Photos (max {MAX_IMAGES})</label>
              <input
                // still register so it's available in data.photo on submit if you want
                {...register("photo")}
                type="file"
                onChange={handlePhotoChange}
                className="file-input w-full"
                multiple
                accept="image/*"
              />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {previews.map((p) => (
                  <div
                    key={p.id}
                    className="relative border rounded-lg overflow-hidden"
                  >
                    <img
                      src={p.url}
                      alt="preview"
                      className="h-24 w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemovePreview(p.id)}
                      className="absolute top-1 right-1 btn btn-xs btn-error"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* payment options */}
              <label className="label">Payment Options</label>
              <select
                {...register("paymentOptions", { required: true })}
                className="select w-full"
              >
                <option value="">Choose</option>
                <option value="cash on delivery">Cash on Delivery</option>
                <option value="stripe">Stripe</option>
              </select>
              {errors.paymentOptions?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Payment Options is required
                </p>
              )}

              {/* show on home page */}
              <label className="label">Show on Home Page</label>

              <input
                type="checkbox"
                {...register("showOnHomePage")}
                defaultChecked={false}
                className="checkbox checkbox-xl"
              />

              <button className="btn btn-primary mt-4">Submit</button>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
