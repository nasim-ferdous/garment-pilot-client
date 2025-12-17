import React from "react";
import { Link } from "react-router";
import forbiddenAnimation from "../../assets/lottie/forbidden.json";
import Lottie from "lottie-react";

const Forbidden = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4">
      {/* Lottie Animation */}
      <div className="max-w-md w-full">
        <Lottie animationData={forbiddenAnimation} loop={true} />
      </div>

      {/* Text Content */}
      <h1 className="text-4xl font-bold text-error mt-6">
        403 - Access Denied
      </h1>

      <p className="text-gray-500 mt-3 text-center max-w-md">
        Sorry, you don’t have permission to access this page. Please contact the
        administrator or go back to your dashboard.
      </p>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-3">
        <Link to="/">
          <button className="btn btn-primary btn-sm">Go Home</button>
        </Link>

        <Link to="/dashboard">
          <button className="btn btn-outline btn-sm">Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
