const Header = () => {
    return (
        <div className=" relative w-screen h-screen flex flex-col justify-start items-center">
            <img className="absolute z-0 h-screen w-screen object-cover" src="/images/mobile/image-header.jpg" alt="Image Header" />
            <nav className="z-10 flex w-screen justify-between px-8 py-6 items-center">
                <img className="w-28" src="/images/logo.svg" alt="Logo" />
                <img className="w-6" src="/images/icon-hamburger.svg" alt="Hamburger" />
            </nav>
            <h1 className="z-10 text-center text-5xl mb-14 mt-40 uppercase tracking-wide">we are creatives</h1>
            <img className="z-10 h-36" src="/images/icon-arrow-down.svg" alt="Icon Arrow Down" />
      </div>
    )
}

export default Header;