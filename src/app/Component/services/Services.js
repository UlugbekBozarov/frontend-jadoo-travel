import React, { useState } from 'react'
import './_services.scss'

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
                <div className="row justify-content-center m-0" style={{ marginBottom: "20px" }}>
                    {renderServices()}
                </div>
                <div className="bg_plus">
                    <svg width="153" height="166" viewBox="0 0 153 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.19727 12.6104H11.5586V14.4902H7.19727V19.4316H5.19922V14.4902H0.837891V12.6104H5.19922V8.04492H7.19727V12.6104Z" fill="#FF7152" />
                        <path d="M7.19727 47.6104H11.5586V49.4902H7.19727V54.4316H5.19922V49.4902H0.837891V47.6104H5.19922V43.0449H7.19727V47.6104Z" fill="#E5E5E5" />
                        <path d="M7.19727 82.6104H11.5586V84.4902H7.19727V89.4316H5.19922V84.4902H0.837891V82.6104H5.19922V78.0449H7.19727V82.6104Z" fill="#E5E5E5" />
                        <path d="M42.1973 12.6104H46.5586V14.4902H42.1973V19.4316H40.1992V14.4902H35.8379V12.6104H40.1992V8.04492H42.1973V12.6104Z" fill="#E5E5E5" />
                        <path d="M42.1973 47.6104H46.5586V49.4902H42.1973V54.4316H40.1992V49.4902H35.8379V47.6104H40.1992V43.0449H42.1973V47.6104Z" fill="#E5E5E5" />
                        <path d="M42.1973 82.6104H46.5586V84.4902H42.1973V89.4316H40.1992V84.4902H35.8379V82.6104H40.1992V78.0449H42.1973V82.6104Z" fill="#E5E5E5" />
                        <path d="M42.1973 117.61H46.5586V119.49H42.1973V124.432H40.1992V119.49H35.8379V117.61H40.1992V113.045H42.1973V117.61Z" fill="#E5E5E5" />
                        <path d="M77.1973 12.6104H81.5586V14.4902H77.1973V19.4316H75.1992V14.4902H70.8379V12.6104H75.1992V8.04492H77.1973V12.6104Z" fill="#E5E5E5" />
                        <path d="M77.1973 47.6104H81.5586V49.4902H77.1973V54.4316H75.1992V49.4902H70.8379V47.6104H75.1992V43.0449H77.1973V47.6104Z" fill="#E5E5E5" />
                        <path d="M77.1973 82.6104H81.5586V84.4902H77.1973V89.4316H75.1992V84.4902H70.8379V82.6104H75.1992V78.0449H77.1973V82.6104Z" fill="#6246E5" />
                        <path d="M77.1973 117.61H81.5586V119.49H77.1973V124.432H75.1992V119.49H70.8379V117.61H75.1992V113.045H77.1973V117.61Z" fill="#E5E5E5" />
                        <path d="M77.1973 152.61H81.5586V154.49H77.1973V159.432H75.1992V154.49H70.8379V152.61H75.1992V148.045H77.1973V152.61Z" fill="#E5E5E5" />
                        <path d="M112.197 12.6104H116.559V14.4902H112.197V19.4316H110.199V14.4902H105.838V12.6104H110.199V8.04492H112.197V12.6104Z" fill="#E5E5E5" />
                        <path d="M112.197 47.6104H116.559V49.4902H112.197V54.4316H110.199V49.4902H105.838V47.6104H110.199V43.0449H112.197V47.6104Z" fill="#E5E5E5" />
                        <path d="M112.197 82.6104H116.559V84.4902H112.197V89.4316H110.199V84.4902H105.838V82.6104H110.199V78.0449H112.197V82.6104Z" fill="#E5E5E5" />
                        <path d="M112.197 117.61H116.559V119.49H112.197V124.432H110.199V119.49H105.838V117.61H110.199V113.045H112.197V117.61Z" fill="#E5E5E5" />
                        <path d="M112.197 152.61H116.559V154.49H112.197V159.432H110.199V154.49H105.838V152.61H110.199V148.045H112.197V152.61Z" fill="#E5E5E5" />
                        <path d="M147.197 12.6104H151.559V14.4902H147.197V19.4316H145.199V14.4902H140.838V12.6104H145.199V8.04492H147.197V12.6104Z" fill="#E5E5E5" />
                        <path d="M147.197 47.6104H151.559V49.4902H147.197V54.4316H145.199V49.4902H140.838V47.6104H145.199V43.0449H147.197V47.6104Z" fill="#E5E5E5" />
                        <path d="M147.197 82.6104H151.559V84.4902H147.197V89.4316H145.199V84.4902H140.838V82.6104H145.199V78.0449H147.197V82.6104Z" fill="#E5E5E5" />
                        <path d="M147.197 117.61H151.559V119.49H147.197V124.432H145.199V119.49H140.838V117.61H145.199V113.045H147.197V117.61Z" fill="#E5E5E5" />
                        <path d="M147.197 152.61H151.559V154.49H147.197V159.432H145.199V154.49H140.838V152.61H145.199V148.045H147.197V152.61Z" fill="#E5E5E5" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Services
