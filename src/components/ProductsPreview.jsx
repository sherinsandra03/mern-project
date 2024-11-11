import React, { useState, useEffect } from "react";
import { ProductPreviewCard } from "./ProductPreviewCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";

export const ProductsPreview = React.forwardRef((props, ref) => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data?.data))
            .catch(e => console.log(e))
    }, []);

    const onAddProduct = (product) => {
        dispatch(addToCart(product));
    }
    
    return (
        <div ref={ref} className="container mx-auto pb-4 w-2/3 text-white bg-[##FFB7C2]">
            <Carousel responsive={responsive}>
            {
                products.length > 0 && products.map((product, index) => {
                    return (
                        <div className="w-full p-3" key={index}>
                            <ProductPreviewCard product={product} onAddProduct={onAddProduct} />
                        </div>
                    )
                })
            }
            </Carousel>
        </div>
    )
});
