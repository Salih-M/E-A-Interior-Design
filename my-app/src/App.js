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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppBar />}>
      <Route index element={<Home />} />
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
