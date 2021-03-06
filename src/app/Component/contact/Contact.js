import React from 'react'
import './_contact.scss'

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="section_container" style={{backgroundImage: "url('/images/section-7/bg_section_7.png')"}}>
                    <div className="section_block">
                        <h4>
                            Subscribe to get information, latest news and other
                            interesting offers about Jadoo
                        </h4>

                        <div className="form">
                            <div className=" input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6"
                                                stroke="#39425D" strokeLinecap="round" />
                                            <rect x="0.5" y="0.5" width="20" height="17" rx="4.5" stroke="#39425D" />
                                        </svg>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Your email" />

                            </div>
                            <button className="btn submit">
                                Subscribe
                            </button>
                        </div>
                        
                        <div className="section_messenger">
                            <button className="btn">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="url(#paint0_linear)" />
                                    <path
                                        d="M52.6105 23.9904C53.3018 25.1878 53.2092 26.6136 52.3677 27.711L33.8939 51.8182C33.1321 52.8123 31.8776 53.3191 30.5948 53.0729C29.3387 52.8313 28.3427 51.9156 27.997 50.6841L25.2635 40.9555L24.9789 39.9435L24.2449 39.191L17.1864 31.9595C16.2927 31.0444 15.9977 29.724 16.4166 28.5154C16.8311 27.3206 17.8708 26.4536 19.1527 26.2856L49.267 22.3404C50.6381 22.1604 51.9192 22.793 52.6105 23.9904Z"
                                        fill="white" />
                                    <path
                                        d="M25.2636 40.9555L27.997 50.6841C28.3427 51.9157 29.3386 52.8313 30.5948 53.0729C31.8776 53.3192 33.1321 52.8124 33.8939 51.8182L52.3677 27.7111C53.2092 26.6137 53.3018 25.1879 52.6105 23.9905L24.9789 39.9436L25.2636 40.9555Z"
                                        fill="white" />
                                    <path
                                        d="M36.2231 33.4515C36.5043 33.9385 36.3379 34.5616 35.8503 34.8431L25.2636 40.9553L24.9789 39.9434L24.2449 39.1909L34.8316 33.0787C35.3192 32.7973 35.942 32.9646 36.2231 33.4515Z"
                                        fill="url(#paint1_linear)" />
                                    <path
                                        d="M25.2637 40.9554L35.8504 34.8432C36.338 34.5617 36.5045 33.9387 36.2233 33.4517L24.979 39.9435L25.2637 40.9554Z"
                                        fill="url(#paint2_linear)" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="49.6467" y1="1.96393" x2="19.564" y2="77.7643"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#747DEF" />
                                            <stop offset="1" stopColor="#5E3BE1" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear" x1="32.4077" y1="34.5441" x2="33.5452" y2="36.8251"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#747DEF" />
                                            <stop offset="1" stopColor="#5E3BE1" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear" x1="32.9029" y1="35.4017" x2="33.507" y2="36.5259"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#747DEF" />
                                            <stop offset="1" stopColor="#5E3BE1" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                        
                        <div className="section_plus">
                            <svg width="153" height="166" viewBox="0 0 153 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.19727 152.61H11.5586V154.49H7.19727V159.432H5.19922V154.49H0.837891V152.61H5.19922V148.045H7.19727V152.61Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M42.1973 117.61H46.5586V119.49H42.1973V124.432H40.1992V119.49H35.8379V117.61H40.1992V113.045H42.1973V117.61Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M77.1973 12.6104H81.5586V14.4902H77.1973V19.4316H75.1992V14.4902H70.8379V12.6104H75.1992V8.04492H77.1973V12.6104Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M77.1973 47.6104H81.5586V49.4902H77.1973V54.4316H75.1992V49.4902H70.8379V47.6104H75.1992V43.0449H77.1973V47.6104Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M77.1973 82.6104H81.5586V84.4902H77.1973V89.4316H75.1992V84.4902H70.8379V82.6104H75.1992V78.0449H77.1973V82.6104Z"
                                    fill="#6246E5" />
                                <path
                                    d="M77.1973 117.61H81.5586V119.49H77.1973V124.432H75.1992V119.49H70.8379V117.61H75.1992V113.045H77.1973V117.61Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M77.1973 152.61H81.5586V154.49H77.1973V159.432H75.1992V154.49H70.8379V152.61H75.1992V148.045H77.1973V152.61Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M112.197 12.6104H116.559V14.4902H112.197V19.4316H110.199V14.4902H105.838V12.6104H110.199V8.04492H112.197V12.6104Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M112.197 47.6104H116.559V49.4902H112.197V54.4316H110.199V49.4902H105.838V47.6104H110.199V43.0449H112.197V47.6104Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M112.197 82.6104H116.559V84.4902H112.197V89.4316H110.199V84.4902H105.838V82.6104H110.199V78.0449H112.197V82.6104Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M112.197 117.61H116.559V119.49H112.197V124.432H110.199V119.49H105.838V117.61H110.199V113.045H112.197V117.61Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M112.197 152.61H116.559V154.49H112.197V159.432H110.199V154.49H105.838V152.61H110.199V148.045H112.197V152.61Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M147.197 12.6104H151.559V14.4902H147.197V19.4316H145.199V14.4902H140.838V12.6104H145.199V8.04492H147.197V12.6104Z"
                                    fill="#FF7152" />
                                <path
                                    d="M147.197 47.6104H151.559V49.4902H147.197V54.4316H145.199V49.4902H140.838V47.6104H145.199V43.0449H147.197V47.6104Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M147.197 82.6104H151.559V84.4902H147.197V89.4316H145.199V84.4902H140.838V82.6104H145.199V78.0449H147.197V82.6104Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M147.197 117.61H151.559V119.49H147.197V124.432H145.199V119.49H140.838V117.61H145.199V113.045H147.197V117.61Z"
                                    fill="#E5E5E5" />
                                <path
                                    d="M147.197 152.61H151.559V154.49H147.197V159.432H145.199V154.49H140.838V152.61H145.199V148.045H147.197V152.61Z"
                                    fill="#E5E5E5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
