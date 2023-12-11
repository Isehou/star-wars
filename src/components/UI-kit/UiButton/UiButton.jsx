import React from "react";

import "./ui-button.css";

function UiButton({ text, onclick, disabled, theme = "dark", classes }) {
  return (
    <div className="buttons">
      <button
        onClick={onclick}
        disabled={disabled}
        className={`${theme} button ${classes}`}
      >
        {text}
      </button>
    </div>
  );
}

export default UiButton;
