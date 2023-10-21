import React from "react";

import "./not-found-page.css";

function NotFoundPage() {
  return (
    <div className="nfp">
      <div className="container">
        <div className="row">
          <div className="mx-auto">
            <div className="nfp-number">404</div>
            <div className="nfp-text">
              Page not found
              <p>This may not mean anything.</p>
              <p> I'm probably working on something that has blown up.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
