import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/account/:type' element={<SignUp />} />
        <Route path='/account/:type' element={<SignUp />} />
        <Route path='/flavors' element={<Products />}>
          <Route path='sugar' element={<Products />}>
          </Route>
          {/* <Route path='sugar-free' element={<Products />}>
            <Route path=":flavor" element={<Products />} />
          </Route> */}
        </Route>
        <Route path='/flavors/sugar/:flavor' element={<ProductDetails />} />
        <Route path='/flavors/sugar-free/:flavor' element={<ProductDetails />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
