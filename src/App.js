import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./components/Home/Home";
import FrontData from "./components/Data/FrontData";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="frontData" element={<FrontData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}