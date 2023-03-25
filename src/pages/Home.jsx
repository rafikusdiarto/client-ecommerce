import React from "react";
import Category from "../components/Category";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Testimonial from "../components/Testimonial";
import axios from "axios";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Header/>
      <Product/>
      <Category/>
      <Content/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
