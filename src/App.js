import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./OrderSummary";
import { AuthProvider } from "./components/auth";
import NoMatch from "./components/NoMatch";
import Product from "./components/Product";
import FeaturedProduct from "./components/featuredProduct";
import NewProduct from "./components/newProduct";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Login from "./components/Login";
const LazyAbout = React.lazy(()=>import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<React.Suspense fallback="Loading..."><LazyAbout /></React.Suspense>}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>

        <Route path="product" element={<Product />}>
        <Route index element={<FeaturedProduct/>}/>
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="user" element={<User/>}>
        <Route path=":userId" element={<UserDetails/>}/>
        <Route path="admin" element={<Admin/>}></Route>
        </Route>
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="login" element={<Login/>}>
        </Route>

        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </AuthProvider>
  )
}

export default App;
