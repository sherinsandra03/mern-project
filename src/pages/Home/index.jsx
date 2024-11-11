import React, { useRef } from "react";
import { Banner } from "../../components/Banner";
import { About } from "../../components/About";
import { ProductsPreview } from "../../components/ProductsPreview";

const Home = () => {
    const productsRef = useRef(null); // Create a reference for the product section

    const scrollToProducts = () => {
        productsRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the product preview
    };
    

    return (
        <div className="bg-[#FFB7C2]">
            <Banner scrollToProducts={scrollToProducts} /> {/* Pass the scroll function */}
            <h2 className="text-3xl font-bold text-center my-6">Products</h2>
            <ProductsPreview ref={productsRef} /> {/* Pass the ref */}
            <About />
        </div>
    );
};

export default Home;
