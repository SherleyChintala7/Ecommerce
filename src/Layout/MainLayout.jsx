import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { AppRouter } from "../Router/AppRouter";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  let location = useLocation();
  let hideComponent = ['/', '/Signup', '/Login'];
  let componentView = hideComponent.includes(location.pathname);

  return (
    <>
      {!componentView && <Header />}
      <AppRouter />
      {!componentView && <Footer />}
    </>
  );
};

export default MainLayout;

