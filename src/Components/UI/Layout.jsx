import React from 'react'
import Header from '../AppLaout/Header';
import Footer from '../AppLaout/Footer';
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (<>
       <Header/>
       <Outlet/>
       <Footer/>
       </>)
}

export default Layout;
