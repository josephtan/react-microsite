import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter} from "react-router-dom";
import App from "./components/app";
import StarBackground from "./components/starbackground";
import "./css/app.scss";

ReactDom.render(<BrowserRouter>
    <App />
    </BrowserRouter>, document.querySelector("#app"));