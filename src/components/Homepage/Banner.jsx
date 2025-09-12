const Banner = () => {
    return (
        <div className="container mx-auto ">
            <div className="carousel max-w-full h-[50vh] md:h-[90vh]  mt-2">
                {
                    banners.map((banner, index) => (
                        <div
                            style={{
                                backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.8), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)`
                            }}
                            key={index} id={`slide${index + 1}`} className="carousel-item relative w-full bg-top bg-no-repeat bg-cover rounded-2xl">
                            <div className="h-full w-full md:w-[700px] flex items-center md:px-36 text-white ">
                                <div className="">
                                    <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-7 ">{banner.title}</h1>
                                    <p className="mb-2 md:mb-7">{banner.description}</p>
                                    <button className="btn btn-primary mr-2 md:mr-6">Discover More</button>
                                    <button className="btn btn-primary btn-outline">Latest Project</button>
                                </div>

                            </div>

                            <div className="absolute flex bottom-0 right-0 transform justify-between">
                                <a href={banner.previous} className="btn btn-circle">❮</a>
                                <a href={banner.next} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const banners = [
    {
        title: "Affordable Price for Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide2",
        previous: "#slide4"
    },
    {
        title: "Affordable Price for Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide3",
        previous: "#slide1"
    },
    {
        title: "Affordable Price for Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide4",
        previous: "#slide2"
    },
    {
        title: "Affordable Price for Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide1",
        previous: "#slide3"
    },
]

export default Banner;