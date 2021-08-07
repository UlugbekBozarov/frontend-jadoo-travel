import React, { useEffect } from 'react';
import Navbar from '../Component/shared/Navbar';
import Header from '../Component/Header';
import Section5 from '../Component/Section5';
import Section6 from '../Component/Section6';
import Footer from '../Component/shared/Footer';
import Services from '../Component/Services';
import Destination from '../Component/Destination';
import EasyAndFast from '../Component/EasyAndFast';

const LandingPage = () => {

    const onScroll = (e) => {
        if (e.target.documentElement.scrollTop > 50) {
            document.getElementsByTagName("nav")[0].classList.add("f_top");
        } else {
            document.getElementsByTagName("nav")[0].classList.remove("f_top");
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    },[]);

    return (
        <div style={{paddingTop: "100px"}}>
            <Navbar />
            <Header />
            <Services />
            <Destination />
            <EasyAndFast />
            <Section5 />
            <Section6 />
            <Footer />
            <div className="bg_circle"></div>
            <div className="bg_img">
                <svg width="704" height="724" viewBox="0 0 704 724" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3069 222C-18.0931 153.2 5.4736 13.3333 22.3069 -48L701.807 -149L766.307 122.5L727.807 723.5C649.14 724.5 473.707 717 401.307 679C310.807 631.5 351.807 555 276.807 515C201.807 475 244.807 369.5 218.807 329.5C192.807 289.5 72.8069 308 22.3069 222Z" fill="#FFF1DA" />
                </svg>
            </div>
        </div>
    )
}

export default LandingPage
