import foody from "../assets/images/foody.png";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import { useEffect, useState } from "react";

export const Header = ({ cartCount }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('User Id');
        window.dispatchEvent(new Event("storage"));
        navigate("/");
    };

    useEffect(() => {
        const checkAuthToken = () => {
            const token = sessionStorage.getItem('Auth token');
            if (token) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        };

        window.addEventListener('storage', checkAuthToken);

        return () => {
            window.removeEventListener('storage', checkAuthToken);
        };
    }, []);

    return (
        <header className="w-full">
            {/* Top half with logo and store title */}
            <div className="bg-[#FE889F] text-white py-3"> {/* Reduced height */}
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo aligned to the left */}
                    <div className="logo-wrapper pl-4">
                        <img src={foody} alt="logo" className="w-14 h-14 object-cover" /> {/* Logo smaller */}
                    </div>
                    {/* Store Title centered */}
                    <div className="absolute left-1/2 transform -translate-x-1/2"> 
                        <h1 className="text-3xl font-bold">AndSprinkles.</h1> {/* Title centered */}
                    </div>
                </div>
            </div>

            {/* Bottom half with navigation links */}
            <div className="bg-white text-black py-2">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Centered Navigation Links */}
                    <div className="mx-auto">
                        <div className="nav-menu-wrapper flex space-x-10 ml-40">
                            <Link to="/" className="text-lg hover:text-pink-600">Home</Link>
                            <Link to="#about-section" className="text-lg hover:text-pink-600">About</Link>
                        </div>
                    </div>

                    {/* Cart and Auth Section (slightly moved left) */}
                    <div className="flex items-center space-x-4">
                        {/* Cart Icon */}
                        <Link to="/cart" className="relative">
                            <img src={cartIcon} alt="cart" className="w-8 h-8" />
                            {cartCount > 0 && (
                                <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-6 h-6 text-sm absolute -top-1 -right-1">
                                    {cartCount}
                                </div>
                            )}
                        </Link>

                        {/* Authentication Buttons */}
                        {isLoggedIn ? (
                            <Button onClick={handleLogout} className="bg-pink-500 text-white hover:bg-pink-400">Log Out</Button>
                        ) : (
                            <>
                                <Link to="/login" className="text-lg hover:text-pink-600">Log In</Link>
                                <Link to="/register" className="text-lg hover:text-pink-600">Sign Up</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};
