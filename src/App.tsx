import React from "react";
import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from "react-router-dom";
import Result from "./pages/result";
import Search from "./pages/search";

function App() {

  return (
    <Routes>
      <Route path="search" element={<Search />} />
      <Route path="result/*" element={<Result/>} />
      <Route path="*" element={<Navigate to="search" />} />
    </Routes>
  )
}

export default App
