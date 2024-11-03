import React from "react";
import ReactDOM from "react-dom";
import App from './App'

// mount functio for start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//If we are in development and in islation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing_dev_root");

  if (devRoot) {
    mount(devRoot);
  }
}

//If we are running through container and we should export the mount function
export { mount };
