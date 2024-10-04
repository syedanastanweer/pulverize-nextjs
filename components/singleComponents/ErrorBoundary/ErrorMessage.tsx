import React, { Dispatch, SetStateAction, useEffect } from "react";

export default function ErrorMessage() {
  return (
    <div className="error_message_container">
      <p className="error_message_text">
        Oh no! Something went wrong. Perhaps your device or browser is unable to
        run this experience. Please try again or upgrade your device for the
        full experience.
      </p>
    </div>
  );
}
