import React, { useState } from 'react'

const Services = () => {

    const [services] = useState([
        {
            img: {
                src: "/images/services/calculate_weather.png",
                alt: "CalculatedWeather"
            },
            title: "Calculated Weather",
            description: "Built Wicket longer admire do barton vanity itself do in it."
        },
        {
            img: {
                src: "/images/services/best_flights.png",
                alt: "BestFlights"
            },
            title: "Best Flights",
            description: "Engrossed listening. Park gate sell they west hard for the."
        },
        {
            img: {
                src: "/images/services/local_events.png",
                alt: "LocalEvents"
            },
            title: "Local Events",
            description: "Barton vanity itself do in it. Preferd to men it engrossed listening. "
        },
        {
            img: {
                src: "/images/services/customization.png",
                alt: "Customization"
            },
            title: "Customization",
            description: "We deliver outsourced aviation services for military customers"
        }
    ])

    const renderServices = () => {
        return (
            services.map((s, i) => {
                return (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
                        <div className="services_card">
                            <div className="card_header">
                                <img src={s.img.src} alt={s.img.alt} />
                            </div>
                            <div className="card_body">
                                <h5>{s.title}</h5>
                                <p>{s.description}</p>
                            </div>
                            <div className="hover_svg">
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 30C0 13.4315 13.4315 0 30 0H100V90C100 95.5228 95.5229 100 90 100H0V30Z" fill="#DF6951" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
    return (
        <section id="services">
            <div className="container">
                <div className="title text-center">
                    <p>CATEGORY</p>
                    <h1>We Offer Best Services</h1>
                </div>
                <div className="row justify-content-center m-0" style={{marginBottom: "20px"}}>
                    {renderServices()}
                </div>
            </div>
        </section>
    )
}

export default Services
