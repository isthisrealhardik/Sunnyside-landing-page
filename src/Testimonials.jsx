import SingleTesti from "./SingleTesti";

const Testimonials = () => {
    const testimonials = [
        {
            image: '/images/image-emily.jpg',
            name: 'Emily R.',
            position: 'Marketing Director',
            testomonialDes: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
        },
        {
            image: '/images/image-thomas.jpg',
            name: 'Thomas S.',
            position: 'Chief Operating Officer',
            testomonialDes: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience",      
        },
        {
            image: '/images/image-jennie.jpg',
            name: 'Jennie F.',
            position: 'Business Owner',
            testomonialDes: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended",
        }
    ]
    return(
        <div className="bg-white w-screen py-10 ">
            <h1 className=" text-center text-xl uppercase tracking-widest text-dark-grayish-blue">Client Testimonials</h1>
            {testimonials.map(obj => (
                <SingleTesti key={obj.name} image={obj.image} name={obj.name} position={obj.position} testimonial={obj.testomonialDes} />
            ))}
        </div>
    )
}

export default Testimonials;