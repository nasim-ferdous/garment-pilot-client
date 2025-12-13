import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const [paymentInfo, setPaymentInfo] = useState({});
  const session_id = searchParams.get("session_id");

  const calledRef = useRef(false);

  useEffect(() => {
    if (session_id && !calledRef.current) {
      calledRef.current = true;

      axiosSecure
        .patch(`/success-payment?session_id=${session_id}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            trackingId: res.data.trackingId,
            transactionId: res.data.transactionId,
          });
        });
    }
  }, [session_id, axiosSecure]);

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold">payment successful</h2>
      <p className="text-2xl font-bold">
        Your Transaction ID: {paymentInfo.transactionId}
      </p>
      <p className="text-2xl font-bold">
        Your Tracking id: {paymentInfo.trackingId}
      </p>
    </div>
  );
};

export default PaymentSuccess;
