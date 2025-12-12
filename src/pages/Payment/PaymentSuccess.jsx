import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const session_id = searchParams.get("session_id");


  const calledRef = useRef(false);

  useEffect(() => {
    if (session_id && !calledRef.current) {
      calledRef.current = true;

      axiosSecure
        .patch(`/success-payment?session_id=${session_id}`)
        .then((res) => {
          console.log(res.data);
        });
    }
  }, [session_id, axiosSecure]);

  return <div>payment successful</div>;
};

export default PaymentSuccess;
