import { Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useState } from "react";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import SugarProducts from "./components/Products/SugarProducts";
import SugarFreeProducts from "./components/Products/SugarFreeProducts";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import UserProfile from "./components/UserProfile/UserProfile";
import { useUserStore } from "./state/userState";


const App = () => {
  return (
    <>
      <Navbar />
      <HelmetProvider>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/account/:type' element={<SignUp />} />
            <Route path='/flavors'>
              <Route path='sugar' element={<SugarProducts />} />
              <Route path='sugar-free' element={<SugarFreeProducts />} />
            </Route>
            <Route path='/flavors/sugar/:flavor' element={<ProductDetails />} />
            <Route path='/flavors/sugar-free/:flavor' element={<ProductDetails />} />
            <Route path='profile' element={
              <RequireAuth redirectTo='/account/signin' />
            } />
        </Routes>
      </HelmetProvider>
      <Footer />
    </>
  );
}

const RequireAuth = ({ children, redirectTo }) => {
  let [isAuthed, setIsAuthed] = useState(true);
  
  const useParent = async () => {
    isAuthed = await useAuth();
    setIsAuthed(prev => isAuthed);
  }
  
  useParent();
  return isAuthed ? <UserProfile /> : <Navigate to={redirectTo} replace={true} />;
}

const useAuth = async () => {

  const userState = useUserStore(state => state.userState);

  const apiEndpoint = 'http://localhost:5000/api/users/info';
  const res = await fetch(
    apiEndpoint, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userState.token}`
      }
    }
  );

  return res.status === 200;
}

export default App;
