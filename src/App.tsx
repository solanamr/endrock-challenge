import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import Detail from "./components/Detail/Detail";


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
