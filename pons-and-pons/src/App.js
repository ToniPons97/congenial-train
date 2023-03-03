import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import Products from "./components/Products/Products";

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
          <Route path='sugar' element={<Products />} />
          <Route path='sugar-free' element={<Products />} />
          <Route path=':flavor' element={<></>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
