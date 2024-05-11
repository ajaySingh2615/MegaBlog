import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authenticaton = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState();

  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //TODO: check authentication (make it more easy to understand)

    // let authValue = authStatus === true ? true : false;

    if (authenticaton && authStatus !== authenticaton) {
      navigate("/login");
    } else if (!authenticaton && authStatus !== authenticaton) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authenticaton]);

  return loader ? <h1>Loading.....</h1> : <>{children}</>;
}
