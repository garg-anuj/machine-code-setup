import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";

import { URL } from "./config/Urls";
import "./App.css";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path={URL.HOME_PAGE} element={<ProductListing />} />
        <Route path={URL.CART} element={<Cart />} />
        <Route path={URL.PRODUCT_DETAIL} element={<ProductDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
// Header
// ahndle Routes
//  -home /
//  -myCart
// Footer
