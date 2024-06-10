// utils
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/index.css";

// Pages
import Home from "@Pages/Home/Home";
import Add from "@Pages/Add/Add";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
