import "./App.css";
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AppBar from "./components/Global/AppBar";
import Home from "./pages/Home";
import SteperDetail from "./pages/SteperDetail";
import MinimalisticPage from "./pages/MinimalisticPage"
import NordicPage from "./pages/NordicPage";
import ModernPage from "./pages/ModernPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppBar />}>
      <Route index element={<Home />} />
      <Route path="/detail/:id" element={<SteperDetail />} />
      <Route path="/minimalistic" element={<MinimalisticPage />} />
      <Route path="/nordic" element={<NordicPage />} />
      <Route path="/modern" element={<ModernPage />} />
    </Route>
  )
);
function App() {
  return (
    <div className="App font-custom  bg-customGray">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
