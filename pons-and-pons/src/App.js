import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import SugarProducts from "./components/Products/SugarProducts";
import SugarFreeProducts from "./components/Products/SugarFreeProducts";
import ProductDetails from "./components/ProductDetails/ProductDetails";


function App() {
  return (
    <>
      <Navbar />
      <HelmetProvider>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/account/:type' element={<SignUp />} />
            <Route path='/account/:type' element={<SignUp />} />
            <Route path='/flavors'>
              <Route path='sugar' element={<SugarProducts />} />
              <Route path='sugar-free' element={<SugarFreeProducts />} />
            </Route>
            <Route path='/flavors/sugar/:flavor' element={<ProductDetails />} />
            <Route path='/flavors/sugar-free/:flavor' element={<ProductDetails />} />
        </Routes>
      </HelmetProvider>
      <Footer />
    </>
  );
}

export default App;
