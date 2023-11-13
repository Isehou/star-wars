import React, { useState } from "react";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";

export const withErrorApi = (View) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);
    return (
      <>
        {errorApi ? (
          <NotFoundPage />
        ) : (
          <View setErrorApi={setErrorApi} {...props} />
        )}
      </>
    );
  };
};
