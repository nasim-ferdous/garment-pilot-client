import React, { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const session_id = searchParams.get("session_id");
  const navigate = useNavigate();

  const calledRef = useRef(false);

  useEffect(() => {
    if (session_id && !calledRef.current) {
      calledRef.current = true;

      axiosSecure
        .patch(`/success-payment?session_id=${session_id}`)
        .then(() => {
          navigate("/dashboard/my-orders");
        });
    }
  }, [session_id, axiosSecure, navigate]);

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold">payment successful</h2>
    </div>
  );
};

export default PaymentSuccess;
