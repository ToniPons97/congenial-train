import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import SugarGelato from "./components/SugarGelato/SugarGelato";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/account/:type' element={<SignUp />} />
        <Route path='/account/:type' element={<SignUp />} />
        <Route path='/products' element={<SugarGelato />}>
          <Route path=':sugar' element={<SugarGelato />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
