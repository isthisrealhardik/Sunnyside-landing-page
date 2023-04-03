const NavPop = () => {
    return(
        <div id="navPop" className=" transition z-100 text-very-dark-grayish-blue space-y-4 absolute bg-white hidden flex-col justify-center items-center top-[60px] left-[165px] p-8 font-barlow drop-shadow-2xl rounded-lg">
            <p className="hover:text-very-dark-desat-blue" href="#">About</p>
            <p className="hover:text-very-dark-desat-blue" href="#">Services</p>
            <p className="hover:text-very-dark-desat-blue" href="#">Projects</p>
            <button className="hover:border hover:border-solid hover:border-yellow hover:text-yellow hover:bg-transparent bg-yellow font-fraunces text-very-dark-desat-blue rounded-full text-center">Contact</button>
        </div>
    )
}

export default NavPop;