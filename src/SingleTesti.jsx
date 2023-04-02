const SingleTesti = ({ image, name, position, testimonial }) => {
    return (
        <div className=" text-very-dark-desat-blue flex flex-col px-10 justify-center items-center my-10">    
            <img className=" rounded-full w-20 my-8" src={image} alt="Profile Pic" />
            <p className=" text-center text-base leading-7 text-very-dark-grayish-blue font-barlow">{testimonial}</p>
            <h1 className="text-base font-black mt-6 mb-1">{name}</h1>
            <h5 className=" font-barlow text-xs text-grayish-blue mb-4">{position}</h5>
        </div>
    )
}

export default SingleTesti;