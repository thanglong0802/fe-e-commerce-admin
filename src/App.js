import { Route, Routes } from "react-router-dom";
import Category from "./components/category/Category";
import Layout from "./components/layout/Layout";
import Product from "./components/product/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="category/all-product/:id" element={<Category />} />
          <Route path="product" element={<Product />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
