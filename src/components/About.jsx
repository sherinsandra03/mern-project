import aboutImage from "../assets/images/about_image.jpeg";

export const About = () => {
    return (
        <div id="about-section" className="bg-pink">
            <div className="p-24 grid grid-cols-2">
                <div>
                    <h2 className="text-2xl font-medium">About Us</h2>
                    {/* Added a class to standardize font size across all <p> tags */}
                    <p className="text-lg">
                        Welcome to <i><b>AndSprinkles</b></i>, where every celebration is made sweeter with our delightful treats! From decadent cakes and cupcakes to mouth-watering cookies and desserts, our selection is crafted with love and the finest ingredients to ensure a memorable experience in every bite.
                    </p>
                    <p className="text-lg">
                        Our mission is to not only satisfy your sweet tooth but to bring smiles and create lasting memories. Whether you're celebrating a birthday, wedding, or any special moment, we’re here to make it extraordinary with our customized desserts tailored just for you.
                    </p>
                    <p className="text-lg">
                        Thank you for letting us be a part of your celebrations – we can’t wait to sprinkle joy into your next event!
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="About Us" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    );
};

export default About;
