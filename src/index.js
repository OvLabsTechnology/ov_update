import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//  import 'swiper/css/bundle';
import reportWebVitals from "./reportWebVitals";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
(function () {
  if (!window.EMBR) {
    const t = [];
    window.EMBR = { _init: t, mount: (e) => t.push(e) };
  }
})();
/* START EMBED CODE */
window.EMBR.mount({
  type: "CheckoutEmbed",
  options: {
    checkoutId: "01G5XJ86XCD16HBRFC6BQ1Y6SH",
    selector: "#checkout",
  },
});
/* END EMBED CODE */

root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
