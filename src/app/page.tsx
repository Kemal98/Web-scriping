'use client'

import Hero from "@/components/Hero";
import "./globals.css";
import HeaderMain from "@/components/HeaderMain";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

// 


export default function Home() {
  const [product, setProduct] = useState([])

  return (
    <main>
       <HeaderMain setProduct={setProduct} />
       <Hero product={product}/>
    </main>
  );
}
