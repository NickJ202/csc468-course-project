import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import {GlobalStyle} from "./app/styles";
import {App} from "./app";

import {store, persistor} from "./redux/store";
import {theme} from "./themes";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <BrowserRouter>
                    <GlobalStyle/>
                    <App/>
                </BrowserRouter>
            </React.StrictMode>
        </ThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);