import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function QueryParams() {
  //   let location = useLocation();

  //   useEffect(() => {
  //     ga("send", "pageview");
  //   }, [location]);

  return new URLSearchParams(useLocation().search);
}

export default QueryParams;
