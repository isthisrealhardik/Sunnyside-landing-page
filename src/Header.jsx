import NavPop from "./NavPop";

const Header = () => {
    const clickMe = () => {
        let navPop = document.getElementById("navPop");
        navPop.classList.toggle("hidden");
        navPop.classList.toggle("flex");
    }

    return (
        <div className=" relative w-screen h-screen flex flex-col justify-start items-center">
            <img className="absolute z-0 h-screen w-screen object-cover sm:hidden" src="/images/mobile/image-header.jpg" alt="Image Header" />
            <img className="z-0 hidden sm:block absolute w-screen object-cover" src="/images/desktop/image-header.jpg" alt="Image Header" />
            <nav className="sm:hidden z-10 flex w-screen justify-between px-8 py-6 items-center">
                <img className="w-28" src="/images/logo.svg" alt="Logo" />
                <img onClick={clickMe} className="w-6" src="/images/icon-hamburger.svg" alt="Hamburger" />
                <NavPop />
            </nav>
            <nav className="hidden sm:flex font-barlow text-white justify-between px-12 py-6 items-center z-30 w-screen">
                <img className="w-36" src="/images/logo.svg" alt="Logo" />
                <ul className="flex items-center space-x-10">
                    <li className="hover:text-very-dark-desat-blue">About</li>
                    <li className="hover:text-very-dark-desat-blue">Services</li>
                    <li className="hover:text-very-dark-desat-blue">Projects</li>
                    <button className="font-fraunces bg-white bg-opacity-50 rounded-full hover:bg-opacity-100 hover:text-very-dark-desat-blue transition">Contact</button>
                </ul>
            </nav>
            <h1 className="z-0 text-center text-5xl mb-14 mt-40 sm:mt-48 uppercase tracking-wide sm:text-6xl sm:tracking-widest">we are creatives</h1>
            <img className="z-10 h-36 md:h-28" src="/images/icon-arrow-down.svg" alt="Icon Arrow Down" />
      </div>
    )
}

export default Header;