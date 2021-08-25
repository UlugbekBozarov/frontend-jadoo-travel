import React from 'react'
import './_header.scss'

const Header = () => {
    return (
        <header id="header">
            <div className="container" style={{backgroundImage: "url('/images/header/travel-girl.png')"}}>
                <div className="row m-0">
                    <div className="col-12 col-6">
                        <div className="header_body">
                            <h6>Best Destinations around the world</h6>
                            <h1>
                                Travel,<span style={{backgroundImage: "url('/images/header/text-bottom.png')"}}> enjoy </span>
                                and live a new
                                and full life
                            </h1>
                            <p>
                                Built Wicket longer admire do barton vanity itself do in it.
                                Preferred to sportsmen it engrossed listening. Park gate
                                sell they west hard for the.
                            </p>
                            <div className="button_block">
                                <button className="btn find_out_more">
                                    Find out more
                                </button>
                                <button className="btn play_demo">
                                    <span className="play">
                                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z" fill="white" />
                                        </svg>
                                    </span>
                                    Play Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
