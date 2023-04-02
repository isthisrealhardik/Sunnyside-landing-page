const ThirdComp = ({ image, heading, paragraph, color }) => {
    let textColor = `flex flex-col justify-end items-center px-8 h-screen ${color}`
    return(
        <div id='text' className={textColor}>
            <img className="h-screen absolute z-0" src={image} alt="Graphic Design" />
            <h1 className="z-10 text-center text-3xl pb-6">{heading}</h1>
            <p className="z-10 font-barlow text-base text-center pb-14">{paragraph}</p>
      </div>
    )
}

export default ThirdComp;