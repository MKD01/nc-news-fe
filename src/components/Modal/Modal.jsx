import { useEffect, useState } from "react";
import { checkServerStatus } from "../../utils/api";

const Modal = () => {
  const [serverStatus, setServerStatus] = useState("");

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setServerStatus(
        "This app can take up to 50 seconds to load as the backend api is hosted on the free tier of render"
      );
    }, 5000);

    checkServerStatus().finally(() => {
      setServerStatus("");
      clearTimeout(timeoutID);
    });

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  if (serverStatus) {
    return (
      <div id='modal-container'>
        <div id='modal'>
          <h4>
            This app can take up to 50 seconds to load as the backend api is
            hosted on the free tier of render
          </h4>
        </div>
      </div>
    );
  }
};

export default Modal;
