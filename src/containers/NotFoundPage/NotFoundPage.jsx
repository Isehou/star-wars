import React from "react";
import trooper from "../../static/404trooper.jpg";
import "./not-found-page.css";

function NotFoundPage() {
  return (
    <div className="nfp">
      <div className="nfp-container">
        <img className="img" src={trooper} alt="#" />
      </div>
    </div>
  );
}

export default NotFoundPage;
