import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
// import { applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <GoogleOAuthProvider clientId="700515260401-j13v8sk0dc13k1bqhls8ll67ks4d1h9j.apps.googleusercontent.com"> */}
    <App />
    {/* </GoogleOAuthProvider> */};
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
