import React from "react";
import { Link } from "react-router";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <TbError404 className="text-9xl text-error mb-4" />

      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>

      <p className="text-gray-500 text-center max-w-md mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
