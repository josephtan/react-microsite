import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter} from "react-router-dom";
import App from "./components/app";
import "./css/app.scss";
let {basePath} = require("./components/axiosOption");

ReactDom.render(<BrowserRouter basename={basePath}>
    <App />
    </BrowserRouter>, document.querySelector("#app"));