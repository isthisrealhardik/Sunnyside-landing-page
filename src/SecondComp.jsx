const SecondComp = ({ image, heading, paragraph, color }) => {
    return (
        <div className=" bg-white w-screen h-screen text-very-dark-desat-blue flex flex-col justify-start items-center">
            <img className="h-1/2 w-full object-cover" src={image} alt="Image Transform" />
            <div className="h-1/2 flex flex-col justify-center items-center px-8">
                <h1 className=" text-3xl font-black text-center">{heading}</h1>
                <p className=" text-base font-barlow text-very-dark-grayish-blue text-center my-6">{paragraph}</p>
                <button id="button" className="hover:text-white transition border-2 rounded-full border-solid border-opacity-50 bg-transparent">Learn More</button>
            </div>
      </div>
    )
}

export default SecondComp;