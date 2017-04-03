import * as React from "react";
import * as ReactDOM from "react-dom";

import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

import { Provider } from "react-redux";
import { StoreWrapper } from "../redux/Store";
import { AppContainer } from "../view/AppContainer";

ReactDOM.render(
    <Provider store={StoreWrapper.getInstance().getStore()}>
        <AppContainer />
    </Provider>,
    document.getElementById("app"),
);
