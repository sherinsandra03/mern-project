import { AddProduct } from "./AddProducts";

export const ProductPreviewCard = ({ product, onAddProduct }) => {
    return (
        <div className="w-full p-6 m-2 rounded text-white bg-gradient-to-b from-pink-500 to-pink-300 text-center">
            <div className="product-card">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-lg"
                />
                <h3 className="text-lg font-bold mt-4">{product.name}</h3>
                <p className="text-sm mt-2">{product.description}</p>
                <p className="font-semibold mt-2">₹{product.price}</p>
                <button
                    onClick={() => onAddProduct(product)}
                    className="bg-yellow-400 text-black px-4 py-2 rounded mt-4"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
