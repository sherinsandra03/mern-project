export const Banner = ({ scrollToProducts }) => {
    return (
        <div className="banner w-full px-7 mx-auto relative flex items-center justify-between bg-[#FFB7C2]">
            <div className="banner-description w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    In Every Bite There Is A Sprinkle Of Happiness
                </h2>
                <p className="font-semibold text-lg text-pink-700 py-2">
                    Get Yours Today!
                </p>
                <div className="btn-container">
                    <button className="bg-pink-500 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded" onClick={scrollToProducts}>
                        Order Now
                    </button>
                    <a href="/menu" className="text-pink-500 hover:text-pink-100 font-bold text-decoration-line px-3">
                        See Menu
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3">
                <img src={require("../assets/images/cake_banner.png")} alt="banner" className="max-h-95" />
            </div>
        </div>
    );
}
