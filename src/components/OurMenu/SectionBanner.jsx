
const SectionBanner = ({ bannerImg, primary, secondary }) => {
    return (
        <div className="hero h-[50vh]" style={ { backgroundImage: `url(${ bannerImg })` } }>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="w-1/2 text-center mx-auto bg-black/50  text-white py-12">
                <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl font-cinzel">{ primary }</h2>
                <p className='mx-20 text-sm mt-2'>{ secondary }</p>
            </div>
        </div>
    );
};

export default SectionBanner;
