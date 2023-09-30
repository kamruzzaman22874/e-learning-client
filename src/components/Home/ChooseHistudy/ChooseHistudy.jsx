import SectionTitle from "../../../hooks/SectionTitle";
import firstImg from "../../../assets/image/01.png"
import secondImg from "../../../assets/image/02.png"
import thirdImg from "../../../assets/image/03.png"
import banner from "../../../assets/image/sun-shadow-right.png"

const ChooseHistudy = () => {

    return (
        <div className="mb-5">
            <SectionTitle
                title="ALL IN ONE TEMPLATE"
                subTitle="Why Choose Histudy."
            ></SectionTitle>

            <div className="grid md:grid-cols-3 gap-8 w-full px-20 py-10 my-10">
                <div className="bg-no-repeat rounded w-full custom-gradient" style={{ backgroundImage: `url(${banner})`}}>
                    <div className="p-10 custom-gradient rounded h-[35rem]">
                        <div className="text-white text-center w-full">
                            <h2>FOR ONLINE COURSES</h2>
                            <h1 className="text-3xl">Create Your Online Courses Website.</h1>
                            <img className="w-56 mx-auto" src={firstImg} alt="" />
                        </div>
                        <div className="text-center space-y-6 text-white mt-5">
                            <p className="rounded shadow-sm w-3/4 mx-auto text-center p-1">Individual instructor</p>
                            <span className="flex gap-5 justify-center">
                                <p className="rounded shadow-sm p-2">Multiple Instructors</p>
                                <p className="rounded shadow-sm p-2">Marketplace</p>
                            </span>
                            <span className="flex justify-center gap-5">
                                <p className="rounded shadow-sm p-2">Single Course</p>
                                <p className="rounded shadow-sm p-2">Like Udemy</p>
                            </span>
                            <p className="rounded shadow-sm w-1/2 mx-auto p-2">& More...</p>
                        </div>
                        </div>
                </div>
                <div className="bg-no-repeat rounded w-full" style={{ backgroundImage: `url(${banner})`}}>
                    <div className="p-10 custom-middle-card rounded h-[35rem]">
                        <div className="text-white text-center w-full">
                            <h2>FOR ONLINE COURSES</h2>
                            <h1 className="text-3xl">Create Your <br /> Education <br /> Website.</h1>
                            <img className="w-56 mx-auto" src={secondImg} alt="" />
                        </div>
                        <div className="text-center space-y-6 text-white mt-5">
                            <span className="flex gap-5 justify-center">
                                <p className="rounded shadow-sm p-2">Higher education</p>
                                <p className="rounded shadow-sm p-2">Universitys</p>
                            </span>
                            <span className="flex justify-center gap-5">
                                <p className="rounded shadow-sm p-2">Kindergarden</p>
                                <p className="rounded shadow-sm p-2">Pre School</p>
                            </span>
                            <span className="flex gap-5 justify-center">
                                <p className="rounded shadow-smsm p-2">High School</p>
                                <p className="rounded shadow-smsm p-2">& More...</p>
                            </span>
                        </div>
                        </div>
                </div>
                <div className="bg-no-repeat rounded w-full" style={{ backgroundImage: `url(${banner})`}}>
                    <div className="p-10 custom-last-card rounded h-[35rem]">
                        <div className="text-white text-center w-full">
                            <h2>FOR ONLINE COURSES</h2>
                            <h1 className="text-3xl"> Create Your <br /> Coaching and <br /> Training Website.</h1>
                            <img className="w-40  mx-auto" src={thirdImg} alt="" />
                        </div>
                        <div className="text-center space-y-6 text-white mt-5">
                            <p className="rounded shadow-sm w-3/4 mx-auto text-center p-1">Language Academy</p>
                            <span className="flex gap-5 justify-center">
                                <p className="rounded shadow-sm p-2">Gym Coaching</p>
                                <p className="rounded shadow-sm p-2">Career Trenning</p>
                            </span>
                            <span className="flex justify-center gap-5">
                                <p className="rounded shadow-sm p-2">Life Coaching</p>
                                <p className="rounded shadow-sm w-1/2 mx-auto p-2">& More...</p>
                            </span>
                        </div>
                        </div>
                </div>
            </div>

        </div>
    );
};

export default ChooseHistudy;