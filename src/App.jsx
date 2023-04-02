import Footer from "./Footer"
import Header from "./Header"
import SecondComp from "./SecondComp"
import Testimonials from "./Testimonials"
import ThirdComp from "./ThirdComp"

function App() {
  const info = [
    {
      image: '/images/mobile/image-transform.jpg',
      heading: 'Transform your band',
      paragraph: 'We are full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you',
      color: ['text-yellow', 'hover:bg-yellow', 'border-yellow'],
    },
    {
      image: '/images/mobile/image-stand-out.jpg',
      heading: 'Stand out to the right audience in the right places',
      paragraph: 'Using a collaborative formula of designers, researchers, and copywriters, we"ll build and extend your brand in digital spaces and in the internet for the wide accesss',
      color: 'soft-red',
    }
  ]

  const infoTwo = [
    {
      image: '/images/mobile/image-graphic-design.jpg',
      heading: 'Graphic Design',
      paragraph: 'Great design makes you memorable. We deliver artwork that underscores your brand message and capture potiential client"s attention',
      color: 'text-dark-desat-cyan',
    },
    {
      image: '/images/mobile/image-photography.jpg',
      heading: 'Photography',
      paragraph: 'Increase your credibiiity by getting the most stunning, high-quality photos that improve your business image',
      color: 'text-dark-blue',
    }
  ]
  return (
    // don't touch the div below
    <div className=" text-main font-fraunces text-white"> 
      <Header />
      {info.map(obj => (
        <SecondComp image={obj.image} heading={obj.heading} paragraph={obj.paragraph} color={obj.color} />
      ))}
      {infoTwo.map(obj => (
        <ThirdComp heading={obj.heading} paragraph={obj.paragraph} image={obj.image} color={obj.color} />
      ))}
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
