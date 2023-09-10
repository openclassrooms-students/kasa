import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Property from "../pages/Property";
import NotFound from "../pages/NotFound";
import Layout from "../components/layout/Layout";
import { Suspense } from "react";
import Spinner from "../components/ui/Spinner";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Spinner />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/property/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <Property />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
