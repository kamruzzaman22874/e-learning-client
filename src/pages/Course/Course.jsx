const Course = ({ course }) => {
    const { courseName, courseImage }= course;
    return (
        <section className="pt-10 overflow-hidden my-20 bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-6 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{courseName}</h2>
                        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                        <p className="mt-4 text-xl text-gray-600 md:mt-8">
                            <span className="relative inline-block">
                                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                                <span className="relative"> Have a question? </span>
                            </span>
                            <br className="block sm:hidden" />Ask me on <a href="#" title="" className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Twitter</a>
                        </p>
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