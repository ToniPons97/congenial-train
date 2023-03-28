import { Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

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
              <RequireAuth redirectTo='/account/signin'>
                <UserProfile />
              </RequireAuth>
            } />
        </Routes>
      </HelmetProvider>
      <Footer />
    </>
  );
}

const RequireAuth = ({ children, redirectTo }) => {
  let isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

const useAuth = () => {

  const userState = useUserStore(state => state.userState);
  // const setFullName = useUserStore(state => setFullName);

  console.log(userState);


  return true;
}

export default App;
