import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./pages/index";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary, Web3ProviderNetwork } from "./context/web3provider";
import { RefreshContextProvider } from "./context/RefreshContext.jsx";
import React, { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./components/Loader";
import { ModalConfirmProvider } from "./components/ProviderPopUp/confirm";
import HeaderStyle2 from "./components/header/HeaderStyle2";

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <RefreshContextProvider>
          <Suspense fallback={<Loader />}>
            <ModalConfirmProvider>
              <div>
                <HeaderStyle2 />
                <Routes>
                  {routes.map((data, index) => (
                    <Route
                      onUpdate={() => window.scrollTo(0, 0)}
                      exact={true}
                      path={data.path}
                      element={data.component}
                      key={index}
                    />
                  ))}
                </Routes>
              </div>
            </ModalConfirmProvider>
          </Suspense>
        </RefreshContextProvider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
}

export default App;
