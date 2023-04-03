const SecondComp = ({ image, heading, paragraph, color }) => {
    return (
        <div className="sm:grid sm:grid-cols-2 sm:grid-rows-1 bg-white w-screen h-screen text-very-dark-desat-blue flex flex-col justify-start items-center">
            <img className="h-1/2 w-full object-cover sm:h-full sm:col-start-2 sm:row-start-1 sm:object-contain" src={image} alt="Image Transform" />
            <div className="h-1/2 flex flex-col justify-center items-center px-8 sm:col-start-1 sm:row-start-1 sm:px-20 sm:w-full sm:h-full">
                <h1 className=" text-3xl font-black text-center">{heading}</h1>
                <p className=" text-base font-barlow text-very-dark-grayish-blue text-center my-6">{paragraph}</p>
                <button id="button" className="hover:text-white transition border-2 rounded-full border-solid border-opacity-50 bg-transparent">Learn More</button>
            </div>
      </div>
    )
}

export default SecondComp;