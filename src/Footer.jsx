const Footer = () => {
    return (
        <div className=" text-dark-mod-cyan space-y-12 bg-light-mod-cyan w-screen h-screen flex-col flex items-center justify-start">
            <div className="grid grid-cols-2 grid-rows-2">
                <img className="" src="/images/mobile/image-gallery-cone.jpg" alt="Cone" />
                <img className=" col-start-1 row-start-1" src="/images/mobile/image-gallery-milkbottles.jpg" alt="Milkbottles" />
                <img className=" col-start-2 row-start-1" src="/images/mobile/image-gallery-orange.jpg" alt="Orange" />
                <img className="" src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="Sugar Cubes" />
            </div>
            <h1 className="text-4xl">Sunnyside</h1>
            <div className="flex space-x-6">
                <h3>About</h3>
                <h3>Services</h3>
                <h3>Projects</h3>
            </div>
            <div className="flex space-x-4">
                <img src="/images/icon-facebook.svg" alt="Facebook" />
                <img src="/images/icon-instagram.svg" alt="Instagram" />
                <img src="/images/icon-pinterest.svg" alt="Pinterest" />
                <img src="/images/icon-twitter.svg" alt="Twitter" />
            </div>
        </div>
    )
}

export default Footer;