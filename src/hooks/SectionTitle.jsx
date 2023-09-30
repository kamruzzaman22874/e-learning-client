const SectionTitle = ({title,subTitle}) => {
    return (
        <div>
            <div className="mx-auto w-48 md:px-3 py-2 text-center md:w-[200px] my-8 bg-[#b966e7]  rounded-full ">
                <h2 className="text-center font-semibold text-white uppercase">{title}</h2>
            </div>
            <h1 className="text-center text-5xl font-extrabold">{subTitle}</h1>
        </div>
    );
};

export default SectionTitle;