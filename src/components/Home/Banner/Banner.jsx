import banner from "../../../assets/image/bg-banner.png"
import banner1 from "../../../assets/image/banner-group-image.png"
import { FaStar } from 'react-icons/fa';
import { GiPocketRadio } from 'react-icons/gi';
import { FaComputer, FaUserAstronaut } from 'react-icons/fa6';
import { LiaHandshake } from 'react-icons/lia';
const Banner = () => {
    return (
        <div className="my-20 w-full pb-5 bg-no-repeat" style={{ backgroundImage: `url(${banner})` }}>
            <div className="md:flex justify-center items-center px-10">
                <div className="md:w-1/2">
                    <div className="flex items-center gap-3 text-xl my-5">
                        <FaStar className="text-yellow-700" />
                        <FaStar className="text-yellow-700" />
                        <FaStar className="text-yellow-700" />
                        <FaStar className="text-yellow-700" />
                        <FaStar className="text-yellow-700" />
                        <h2>12500+ TRUST CUSTOMER</h2>

                    </div>
                    <h2 className="text-7xl font-semibold">Have your dream site in minutes<br />for online courses</h2>

                </div>

                <div className="md:w-1/2">
                    <img className="md:w-full" src={banner1} alt="" />
                </div>
            </div>

            <div className="grid md:grid-cols-4 gap-5  max-w-7xl mx-auto text-white bg-[#b966e7] bg-none p-1 rounded-lg">
                <div className="p-5 space-y-3 rounded-lg relative transition-transform transform hover:-translate-y-8 hover:bg-gray-800 transitaion-0.5">
                    <GiPocketRadio className="text-7xl cursor-pointer"/>
                    <h2 className="text-2xl">Fast Performace</h2>
                    <p>Optimized for a smaller build <br /> size, faster dev compilation and <br /> dozens of other improvements.</p>
                </div>
                <div className="p-5 border-l space-y-3 rounded-lg relative transition-transform transform hover:-translate-y-8 hover:bg-gray-800 transitaion-0.5">
                    <FaComputer className="text-7xl" />
                    <h2 className="text-2xl">Perfect Responsive</h2>
                    <p>Optimized for a smaller build <br /> size, faster dev compilation and <br /> dozens of other improvements.</p>
                </div>
                <div className="p-5 border-l space-y-3 rounded-lg relative transition-transform transform hover:-translate-y-8 hover:bg-gray-800 transitaion-0.5">
                    <FaUserAstronaut className="text-7xl" />
                    <h2 className="text-2xl">Fast & Friendly Support</h2>
                    <p>Optimized for a smaller build <br /> size, faster dev compilation and <br /> dozens of other improvements.</p>
                </div>
                <div className="p-5 border-l space-y-3 rounded-lg relative transition-transform transform hover:-translate-y-8 hover:bg-gray-800 transitaion-0.5">
                    <LiaHandshake className="text-7xl" />
                    <h2 className="text-2xl">Easy to Use</h2>
                    <p>Optimized for a smaller build <br /> size, faster dev compilation and <br /> dozens of other improvements.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;