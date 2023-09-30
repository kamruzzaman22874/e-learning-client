const Course = ({ course }) => {
    const { courseName, courseContent, courseImage }= course;
    return (
        <section className="pt-10 overflow-hidden my-20 bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-6 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-3xl">{courseContent}</h2>
                        <h2 className="py-5 font-semibold">{courseName}</h2>
                        <div className="my-10">
                            <button className="custom-gradient px-6 py-3 rounded text-white">Course Details</button>
                        </div>
                    </div>

                    <div className="relative">
                        <img className="relative rounded w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={courseImage} alt="" />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Course;