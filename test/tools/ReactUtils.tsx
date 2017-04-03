import * as React from "react";
import { Provider } from "react-redux";

import { StoreWrapper } from "../../src/redux/Store";

export function getComponent(element: JSX.Element) {
    return (
        <Provider store={StoreWrapper.configureStore()}>
            {element}
        </Provider>
    );
}
