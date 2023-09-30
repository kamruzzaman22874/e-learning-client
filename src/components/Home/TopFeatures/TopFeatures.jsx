import SectionTitle from "../../../hooks/SectionTitle";
import feature1 from "../../../assets/image/feature-03.png"
import feature2 from "../../../assets/image/feature-08.png"
import feature3 from "../../../assets/image/feature-04.png"
import feature4 from "../../../assets/image/feature-01.jpg"
import feature5 from "../../../assets/image/feature-06.png"

const TopFeatures = () => {
    return (
        <div className="mb-8 px-20 bg-[#FFFFFFAB]">
            <div className="my-10">
                <SectionTitle
                    title="TOP-NOTCH FEATURES"
                    subTitle="Everything you need to succeed."
                ></SectionTitle>
                <p className="text-center text-gray-500 font-semibold my-5">Histudy comes with interactive design tools and features that could <br /> leave you feeling like a pro after just a few clicks.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 ">
                <div className=" px-6 rounded bg-[#8053d4] shadow-lg">
                    <div className="my-5">
                        <h2 className="text-xl font-bold text-white">Complete Education Package.</h2>
                        <p className="text-xl font-semibold text-white">A complete education package <br /> for build any type of education website.</p>
                    </div>
                    <img className="ml-6 mt-6" src={feature1} alt="" />
                </div>
                <div className=" px-6 rounded bg-pink-300 shadow-lg">
                    <img className="mt-6 w-full" src={feature2} alt="" />
                    <div className="my-5">
                        <h2 className="text-xl font-sans text-white"><span className="text-black">Amazing Courses</span> Have a lots of course layout options for creating a online education website.</h2>
                        
                    </div>
                </div>
                <div className=" px-6 rounded bg-pink-100 h-full shadow-lg">
                    <img className=" mt-6 " src={feature3} alt="" />
                    <div className="my-5">
                        <h2 className="text-xl font-bold text-black">Sass Available. <span className="text-xl font-semibold text-gray-500">A complete education package <br /> for build any type of education website.</span> </h2>
                    </div>
                </div>
            </div>



            <div className="my-10 md:flex h-[400px] gap-8 ">
                <div className="md:w-[30%] h-full bg-[#111113] rounded">
                    <img src={feature4} alt="" />
                    <p className="text-gray-400"> <span className="text-xl ">Perfect Responsive.</span> Our Template is full Perfect for all device. You can visit our template all device easily.</p>
                </div>
                <div className="md:w-[75%] md:flex justify-center items-center px-10 shadow-lg rounded">
                    <div className="space-y-3">
                        <h1 className="text-3xl text-[#007aff] font-bold">Fast Loading Speed.</h1>
                        <p className="text-lg">Histudy is faster loading <br /> speed. Histudy create your template so much faster.</p>
                    </div>
                    <div className="w-full">
                        <img className=" w-full" src={feature5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFeatures;