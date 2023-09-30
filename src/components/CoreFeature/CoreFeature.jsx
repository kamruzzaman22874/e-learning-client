import SectionTitle from "../../hooks/SectionTitle";
import bootstrap from "../../assets/logo/bootstrap.png"
import google from "../../assets/logo/google.png"
import instragram from "../../assets/logo/instagram.png"
import mainchimp from "../../assets/logo/mainchimp.png"
import validation from "../../assets/logo/validation.png"
import isotop from "../../assets/logo/isotop.png"
import slider from "../../assets/logo/slider.png"
import contact from "../../assets/logo/contact.png"
import popup from "../../assets/logo/popup.png"
import seo from "../../assets/logo/seo.png"
import support from "../../assets/logo/support.png"
import animation from "../../assets/logo/animation.png"

const CoreFeature = () => {
    return (
        <div className="my-10">
            <SectionTitle
                title="CORE FEATURES"
                subTitle="Histudy Exclusive Features"
            ></SectionTitle>

            <div className="grid md:grid-cols-6 my-10 px-20">
                <div className="flex justify-center rounded-full mt-20">
                    <div>
                        <div className="rounded-full shadow-xl">
                            <img className="h-36" src={bootstrap} alt="" />
                        </div>
                        <div className="text-center space-y-3 py-2">
                            <h2 className="font-bold">Bootstrap5</h2>
                            <p className="bg-[#f3dbdbab] p-2 rounded">CSS Framework</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center rounded-full">
                    <div>
                        <div className=" rounded-full shadow-xl">
                            <img className="h-32" src={google} alt="" />
                        </div>
                        <div className="text-center space-y-3 py-2">
                            <h2 className="font-bold">Googlre Font</h2>
                            <p className="bg-[#f3dbdbab] p-2 rounded">Exclusive Fonts</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center rounded-full mt-20">
                    <div>
                        <div className="rounded-full shadow-xl">
                            <img className="h-36" src={instragram} alt="" />
                        </div>
                        <div className="text-center space-y-3 py-2">
                            <h2 className="font-bold">Instagram</h2>
                            <p className="bg-[#f3dbdbab] p-2 rounded">Photo and Video</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center rounded-full">
                    <div>
                        <div className="rounded-full shadow-xl">
                            <img className="h-32" src={mainchimp} alt="" />
                        </div>
                        <div className="text-center space-y-3 py-2">
                            <h2 className="font-bold">Mainchimp</h2>
                            <p className="bg-[#f3dbdbab] p-2 rounded">Email Platform</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center rounded-full mt-20">
                    <div>
                        <div className="rounded-full shadow-xl">
                            <img className="h-36" src={validation} alt="" />
                        </div>
                        <div className="text-center space-y-3 py-2">
                            <h2 className="font-bold">W3C Validation</h2>
                            <p className="bg-[#f3dbdbab] p-2 rounded">Markup Validity</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center rounded-full">
                    <div>
                        <div className="rounded-full shadow-xl">
                            <img className="h-32" src={isotop} alt="" />
                        </div>
                        <div className="text-center space-y-3 py-2">
                            <h2 className="font-bold">Isotop</h2>
                            <p className="bg-[#f3dbdbab] p-2 rounded">ImagesLoaded</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid md:grid-cols-6 my-10 px-20">
                <div className="flex justify-center rounded-full mt-20">
                    <div>
                        <div className="rounded-full shadow-xl">
                            <img className="h-36" src={slider} alt="" />
                        </div>
                        <div className="text-center space-y-3 py-2">
                            <h2 className="font-bold">Swiper Sldier</h2>
                            <p className="bg-[#f3dbdbab] p-2 rounded">Slider Plugin</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center rounded-full">
                    <div>
                        <div className=" rounded-full shadow-xl">
                            <img className="h-32" src={contact} alt="" />
                        </div>
                        <div className="text-center space-y-3 py-2">
                            <h2 className="font-bold">Contact Form</h2>
                            <p className="bg-[#f3dbdbab] p-2 rounded">Dynamic Form</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center rounded-full mt-20">
                    <div>
                        <div className="rounded-full shadow-xl">
                            <img className="h-36" src={popup} alt="" />
                        </div>
                        <div className="text-center space-y-3 py-2">
                            <h2 className="font-bold">Magnify Popup</h2>
                            <p className="bg-[#f3dbdbab] p-2 rounded">Lightbox & Dialog</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center rounded-full">
                    <div>
                        <div className="rounded-full shadow-xl">
                            <img className="h-32" src={seo} alt="" />
                        </div>
                        <div className="text-center space-y-3 py-2">
                            <h2 className="font-bold">SEO Friendly</h2>
                            <p className="bg-[#f3dbdbab] p-2 rounded">Search Engine</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center rounded-full mt-20">
                    <div>
                        <div className="rounded-full shadow-xl">
                            <img className="h-36" src={support} alt="" />
                        </div>
                        <div className="text-center space-y-3 py-2">
                            <h2 className="font-bold">Pro Support</h2>
                            <p className="bg-[#f3dbdbab] p-2 rounded">Pro Support</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center rounded-full">
                    <div>
                        <div className="rounded-full shadow-xl">
                            <img className="h-32" src={animation} alt="" />
                        </div>
                        <div className="text-center space-y-3 py-2">
                            <h2 className="font-bold">Animation</h2>
                            <p className="bg-[#f3dbdbab] p-2 rounded">Animation</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CoreFeature;