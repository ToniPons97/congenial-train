import { Routes, Route, useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

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

  const navigate = useNavigate();
  const useParent = async () => {
    let isAuthenticated = await useAuth();
  
    console.log('isAuthed ' + isAuthenticated);
  
    // return isAuthenticated ? children : <Navigate to={redirectTo} />;


    setTimeout(() => {
      if (!isAuthenticated)
        navigate(redirectTo);
    }, 2000);
  }
  
  useParent();
  return <UserProfile />;


}

const useAuth = async () => {

  const userState = useUserStore(state => state.userState);
  // const setFullName = useUserStore(state => setFullName);
  console.log(userState);


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
  
  const json = await res.json();

  console.log(res.status);
  console.log(json);

  return res.status === 200 ? true : false
}

export default App;
