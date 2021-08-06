import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row m-0 text-center text-md-start">
                    <div className="col-12 col-md-6 col-lg-3 order-1">
                        <h4 className="brand">Jadoo.</h4>
                        <p className="text">Book your trip in minute, get full Control for much longer.</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 order-2 order-md-3 order-lg-2">
                        <div className="link_block">
                            <h5>Company</h5>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/careers" className="nav-link">Careers</Link>
                            <Link to="/mobile" className="nav-link">Mobile</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 order-3 order-md-4 order-lg-3">
                        <div className="link_block">
                            <h5>Contact</h5>
                            <Link to="/help-faq" className="nav-link">Help/FAQ</Link>
                            <Link to="/press" className="nav-link">Press</Link>
                            <Link to="/affilates" className="nav-link">Affilates</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 order-4 order-md-5 order-lg-4">
                        <div className="link_block">
                            <h5>More</h5>
                            <Link to="/airlinefees" className="nav-link">Airlinefees</Link>
                            <Link to="/airline" className="nav-link">Airline</Link>
                            <Link to="/low-fare-tips" className="nav-link">Low fare tips</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 order-5 order-md-2 order-lg-5 mb-0 mb-md-4 mb-lg-0">
                        <div className="messenger_block"
                            style={{ height: "47px", marginBottom: "10px" }}>
                            <a href="https://facebook.com" className="nav-link messenger_icon">
                                <svg className="c_dark" width="7" height="13" viewBox="0 0 7 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M6.10837 2.24446C5.78831 2.14321 5.42023 2.0757 5.08417 2.0757C4.66809 2.0757 3.77191 2.36259 3.77191 2.91948V4.25266H5.90033V6.49712H3.77191V12.6905H1.6275V6.49712H0.571289V4.25266H1.6275V3.12199C1.6275 1.41755 2.36364 0 4.13999 0C4.7481 0 5.83632 0.0337513 6.42843 0.253134L6.10837 2.24446Z"
                                        fill="#080809" />
                                </svg>
                                <svg className="c_white" width="7" height="13" viewBox="0 0 7 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M6.10837 2.24446C5.78831 2.14321 5.42023 2.0757 5.08417 2.0757C4.66809 2.0757 3.77191 2.36259 3.77191 2.91948V4.25266H5.90033V6.49712H3.77191V12.6905H1.6275V6.49712H0.571289V4.25266H1.6275V3.12199C1.6275 1.41755 2.36364 0 4.13999 0C4.7481 0 5.83632 0.0337513 6.42843 0.253134L6.10837 2.24446Z"
                                        fill="white" />
                                </svg>
                            </a>
                            <a href="https://instagram.com" className="nav-link messenger_icon">
                                <svg className="c_dark" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.6562 0H2.34375C1.05156 0 0 1.05156 0 2.34375V13.6562C0 14.9487 1.05156 16 2.34375 16H13.6562C14.9487 16 16 14.9487 16 13.6562V2.34375C16 1.05156 14.9487 0 13.6562 0ZM15.0625 13.6562C15.0625 14.4316 14.4316 15.0625 13.6562 15.0625H2.34375C1.56844 15.0625 0.9375 14.4316 0.9375 13.6562V2.34375C0.9375 1.56844 1.56844 0.9375 2.34375 0.9375H13.6562C14.4316 0.9375 15.0625 1.56844 15.0625 2.34375V13.6562Z"
                                        fill="#080809" />
                                    <path
                                        d="M13.1562 1.90625C12.6394 1.90625 12.2188 2.32687 12.2188 2.84375C12.2188 3.36063 12.6394 3.78125 13.1562 3.78125C13.6731 3.78125 14.0938 3.36063 14.0938 2.84375C14.0938 2.32687 13.6731 1.90625 13.1562 1.90625Z"
                                        fill="#080809" />
                                    <path
                                        d="M8 3.78125C5.67375 3.78125 3.78125 5.67375 3.78125 8C3.78125 10.3263 5.67375 12.2188 8 12.2188C10.3263 12.2188 12.2188 10.3263 12.2188 8C12.2188 5.67375 10.3263 3.78125 8 3.78125ZM8 11.2812C6.19062 11.2812 4.71875 9.80937 4.71875 8C4.71875 6.19062 6.19062 4.71875 8 4.71875C9.80937 4.71875 11.2812 6.19062 11.2812 8C11.2812 9.80937 9.80937 11.2812 8 11.2812Z"
                                        fill="#080809" />
                                </svg>
                                <svg className="c_white" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.6562 0H2.34375C1.05156 0 0 1.05156 0 2.34375V13.6562C0 14.9487 1.05156 16 2.34375 16H13.6562C14.9487 16 16 14.9487 16 13.6562V2.34375C16 1.05156 14.9487 0 13.6562 0ZM15.0625 13.6562C15.0625 14.4316 14.4316 15.0625 13.6562 15.0625H2.34375C1.56844 15.0625 0.9375 14.4316 0.9375 13.6562V2.34375C0.9375 1.56844 1.56844 0.9375 2.34375 0.9375H13.6562C14.4316 0.9375 15.0625 1.56844 15.0625 2.34375V13.6562Z"
                                        fill="white" />
                                    <path
                                        d="M13.1562 1.90625C12.6394 1.90625 12.2188 2.32687 12.2188 2.84375C12.2188 3.36063 12.6394 3.78125 13.1562 3.78125C13.6731 3.78125 14.0938 3.36063 14.0938 2.84375C14.0938 2.32687 13.6731 1.90625 13.1562 1.90625Z"
                                        fill="white" />
                                    <path
                                        d="M8 3.78125C5.67375 3.78125 3.78125 5.67375 3.78125 8C3.78125 10.3263 5.67375 12.2188 8 12.2188C10.3263 12.2188 12.2188 10.3263 12.2188 8C12.2188 5.67375 10.3263 3.78125 8 3.78125ZM8 11.2812C6.19062 11.2812 4.71875 9.80937 4.71875 8C4.71875 6.19062 6.19062 4.71875 8 4.71875C9.80937 4.71875 11.2812 6.19062 11.2812 8C11.2812 9.80937 9.80937 11.2812 8 11.2812Z"
                                        fill="white" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" className="nav-link messenger_icon">
                                <svg className="c_dark" width="16" height="13" viewBox="0 0 16 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 1.539C15.405 1.8 14.771 1.973 14.11 2.057C14.79 1.651 15.309 1.013 15.553 0.244C14.919 0.622 14.219 0.889 13.473 1.038C12.871 0.397 12.013 0 11.077 0C9.261 0 7.799 1.474 7.799 3.281C7.799 3.541 7.821 3.791 7.875 4.029C5.148 3.896 2.735 2.589 1.114 0.598C0.831 1.089 0.665 1.651 0.665 2.256C0.665 3.392 1.25 4.399 2.122 4.982C1.595 4.972 1.078 4.819 0.64 4.578C0.64 4.588 0.64 4.601 0.64 4.614C0.64 6.208 1.777 7.532 3.268 7.837C3.001 7.91 2.71 7.945 2.408 7.945C2.198 7.945 1.986 7.933 1.787 7.889C2.212 9.188 3.418 10.143 4.852 10.174C3.736 11.047 2.319 11.573 0.785 11.573C0.516 11.573 0.258 11.561 0 11.528C1.453 12.465 3.175 13 5.032 13C11.068 13 14.368 8 14.368 3.666C14.368 3.521 14.363 3.381 14.356 3.242C15.007 2.78 15.554 2.203 16 1.539Z"
                                        fill="#080809" />
                                </svg>
                                <svg className="c_white" width="16" height="13" viewBox="0 0 16 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 1.539C15.405 1.8 14.771 1.973 14.11 2.057C14.79 1.651 15.309 1.013 15.553 0.244C14.919 0.622 14.219 0.889 13.473 1.038C12.871 0.397 12.013 0 11.077 0C9.261 0 7.799 1.474 7.799 3.281C7.799 3.541 7.821 3.791 7.875 4.029C5.148 3.896 2.735 2.589 1.114 0.598C0.831 1.089 0.665 1.651 0.665 2.256C0.665 3.392 1.25 4.399 2.122 4.982C1.595 4.972 1.078 4.819 0.64 4.578C0.64 4.588 0.64 4.601 0.64 4.614C0.64 6.208 1.777 7.532 3.268 7.837C3.001 7.91 2.71 7.945 2.408 7.945C2.198 7.945 1.986 7.933 1.787 7.889C2.212 9.188 3.418 10.143 4.852 10.174C3.736 11.047 2.319 11.573 0.785 11.573C0.516 11.573 0.258 11.561 0 11.528C1.453 12.465 3.175 13 5.032 13C11.068 13 14.368 8 14.368 3.666C14.368 3.521 14.363 3.381 14.356 3.242C15.007 2.78 15.554 2.203 16 1.539Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </div>
                        <h5 className="discover">
                            Discover our app
                        </h5>
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <a href="https://playmarket.com" className="playmarket_apple mr-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path
                                            d="M11.5075 10.0018L1.46393 19.673C0.993605 19.3516 0.714365 18.817 0.719303 18.2473V1.75626C0.714365 1.18663 0.993605 0.65199 1.46393 0.330566L11.5075 10.0018Z"
                                            fill="#2196F3" />
                                        <path
                                            d="M15.0217 6.62364L11.5074 10.0018L1.46387 0.330532C1.50171 0.301203 1.54113 0.273918 1.58191 0.248803C2.11272 -0.0729183 2.77574 -0.0833047 3.31639 0.22156L15.0217 6.62364Z"
                                            fill="#4CAF50" />
                                        <path
                                            d="M19.2806 10.0017C19.2872 10.6447 18.9377 11.2387 18.3725 11.5454L15.0217 13.3798L11.5073 10.0017L15.0217 6.62354L18.3725 8.45788C18.9377 8.76462 19.2872 9.3586 19.2806 10.0017Z"
                                            fill="#F0BB1F" />
                                        <path
                                            d="M15.0217 13.3801L3.31639 19.7822C2.77455 20.0823 2.11404 20.0719 1.58191 19.7549C1.54113 19.7298 1.50171 19.7025 1.46387 19.6732L11.5074 10.002L15.0217 13.3801Z"
                                            fill="#F15A2B" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg width="54" height="16" viewBox="0 0 54 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.02399 2.88009H3.21599V4.00009H4.71199C4.51199 4.53609 4.02399 4.86409 3.27999 4.86409C2.19199 4.86409 1.51999 4.16809 1.51999 3.21609C1.51999 2.23209 2.22399 1.53609 3.16799 1.53609C3.79999 1.53609 4.30399 1.82409 4.53599 2.19209L5.62399 1.56809C5.15199 0.816086 4.24799 0.288086 3.17599 0.288086C1.52799 0.288086 0.23999 1.58409 0.23999 3.20809C0.23999 4.81609 1.50399 6.11209 3.26399 6.11209C4.83199 6.11209 6.02399 5.07209 6.02399 3.36009V2.88009Z"
                                        fill="white" />
                                    <path
                                        d="M7.62562 4.76809V3.77609H9.62562V2.56009H7.62562V1.63209H9.82561V0.400086H6.34562V6.00009H9.86561V4.76809H7.62562Z"
                                        fill="white" />
                                    <path
                                        d="M13.9478 0.400086H9.7878V1.63209H11.2278V6.00009H12.5078V1.63209H13.9478V0.400086Z"
                                        fill="white" />
                                    <path d="M15.7081 0.400086V6.00009H16.9881V0.400086H15.7081Z" fill="white" />
                                    <path
                                        d="M21.3103 0.400086H17.1503V1.63209H18.5903V6.00009H19.8703V1.63209H21.3103V0.400086Z"
                                        fill="white" />
                                    <path
                                        d="M25.7426 6.11209C27.3506 6.11209 28.6546 4.84809 28.6546 3.20009C28.6546 1.55209 27.3506 0.288086 25.7426 0.288086C24.1346 0.288086 22.8306 1.55209 22.8306 3.20009C22.8306 4.84809 24.1346 6.11209 25.7426 6.11209ZM25.7426 4.86409C24.8306 4.86409 24.1106 4.20009 24.1106 3.20009C24.1106 2.20009 24.8306 1.53609 25.7426 1.53609C26.6546 1.53609 27.3746 2.20009 27.3746 3.20009C27.3746 4.20009 26.6546 4.86409 25.7426 4.86409Z"
                                        fill="white" />
                                    <path
                                        d="M32.0953 0.400086V3.44009L29.9353 0.400086H28.9753V6.00009H30.2553V2.96009L32.4153 6.00009H33.3753V0.400086H32.0953Z"
                                        fill="white" />
                                    <path
                                        d="M6.02399 12.3921V12.6081C6.02399 13.3068 5.77599 13.8961 5.27999 14.3761C4.78399 14.8508 4.13066 15.0881 3.31999 15.0881C2.46666 15.0881 1.76266 14.8108 1.20799 14.2561C0.653324 13.6961 0.37599 13.0108 0.37599 12.2001C0.37599 11.3894 0.650657 10.7068 1.19999 10.1521C1.74932 9.59209 2.44532 9.31209 3.28799 9.31209C3.79999 9.31209 4.26932 9.43475 4.69599 9.68009C5.12799 9.92542 5.46132 10.2534 5.69599 10.6641L5.31999 10.8881C5.13332 10.5361 4.85599 10.2534 4.48799 10.0401C4.12532 9.82675 3.72532 9.72009 3.28799 9.72009C2.56266 9.72009 1.96532 9.96009 1.49599 10.4401C1.03199 10.9148 0.79999 11.5014 0.79999 12.2001C0.79999 12.8988 1.03466 13.4881 1.50399 13.9681C1.97332 14.4428 2.57866 14.6801 3.31999 14.6801C3.97599 14.6801 4.50666 14.5014 4.91199 14.1441C5.31732 13.7868 5.54399 13.3361 5.59199 12.7921H3.21599V12.3921H6.02399Z"
                                        fill="white" />
                                    <path
                                        d="M11.7026 14.2481C11.1426 14.8081 10.4599 15.0881 9.65462 15.0881C8.84928 15.0881 8.16662 14.8081 7.60662 14.2481C7.04662 13.6828 6.76662 13.0001 6.76662 12.2001C6.76662 11.4001 7.04662 10.7201 7.60662 10.1601C8.16662 9.59475 8.84928 9.31209 9.65462 9.31209C10.4599 9.31209 11.1426 9.59475 11.7026 10.1601C12.2626 10.7201 12.5426 11.4001 12.5426 12.2001C12.5426 13.0001 12.2626 13.6828 11.7026 14.2481ZM7.90262 13.9601C8.38262 14.4401 8.96662 14.6801 9.65462 14.6801C10.3426 14.6801 10.9239 14.4401 11.3986 13.9601C11.8786 13.4748 12.1186 12.8881 12.1186 12.2001C12.1186 11.5121 11.8786 10.9281 11.3986 10.4481C10.9239 9.96275 10.3426 9.72009 9.65462 9.72009C8.96662 9.72009 8.38262 9.96275 7.90262 10.4481C7.42795 10.9281 7.19062 11.5121 7.19062 12.2001C7.19062 12.8881 7.42795 13.4748 7.90262 13.9601Z"
                                        fill="white" />
                                    <path
                                        d="M18.2339 14.2481C17.6739 14.8081 16.9912 15.0881 16.1859 15.0881C15.3805 15.0881 14.6979 14.8081 14.1379 14.2481C13.5779 13.6828 13.2979 13.0001 13.2979 12.2001C13.2979 11.4001 13.5779 10.7201 14.1379 10.1601C14.6979 9.59475 15.3805 9.31209 16.1859 9.31209C16.9912 9.31209 17.6739 9.59475 18.2339 10.1601C18.7939 10.7201 19.0739 11.4001 19.0739 12.2001C19.0739 13.0001 18.7939 13.6828 18.2339 14.2481ZM14.4339 13.9601C14.9139 14.4401 15.4979 14.6801 16.1859 14.6801C16.8739 14.6801 17.4552 14.4401 17.9299 13.9601C18.4099 13.4748 18.6499 12.8881 18.6499 12.2001C18.6499 11.5121 18.4099 10.9281 17.9299 10.4481C17.4552 9.96275 16.8739 9.72009 16.1859 9.72009C15.4979 9.72009 14.9139 9.96275 14.4339 10.4481C13.9592 10.9281 13.7219 11.5121 13.7219 12.2001C13.7219 12.8881 13.9592 13.4748 14.4339 13.9601Z"
                                        fill="white" />
                                    <path
                                        d="M25.4771 12.3921V12.6081C25.4771 13.3068 25.2291 13.8961 24.7331 14.3761C24.2371 14.8508 23.5838 15.0881 22.7731 15.0881C21.9198 15.0881 21.2158 14.8108 20.6611 14.2561C20.1064 13.6961 19.8291 13.0108 19.8291 12.2001C19.8291 11.3894 20.1038 10.7068 20.6531 10.1521C21.2024 9.59209 21.8984 9.31209 22.7411 9.31209C23.2531 9.31209 23.7224 9.43475 24.1491 9.68009C24.5811 9.92542 24.9144 10.2534 25.1491 10.6641L24.7731 10.8881C24.5864 10.5361 24.3091 10.2534 23.9411 10.0401C23.5784 9.82675 23.1784 9.72009 22.7411 9.72009C22.0158 9.72009 21.4184 9.96009 20.9491 10.4401C20.4851 10.9148 20.2531 11.5014 20.2531 12.2001C20.2531 12.8988 20.4878 13.4881 20.9571 13.9681C21.4264 14.4428 22.0318 14.6801 22.7731 14.6801C23.4291 14.6801 23.9598 14.5014 24.3651 14.1441C24.7705 13.7868 24.9971 13.3361 25.0451 12.7921H22.6691V12.3921H25.4771Z"
                                        fill="white" />
                                    <path d="M26.9637 14.6001H29.6037V15.0001H26.5397V9.40009H26.9637V14.6001Z"
                                        fill="white" />
                                    <path
                                        d="M30.9091 14.6001H33.7091V15.0001H30.4851V9.40009H33.6691V9.80009H30.9091V11.9761H33.4691V12.3761H30.9091V14.6001Z"
                                        fill="white" />
                                    <path
                                        d="M38.7875 9.40009C39.2888 9.40009 39.7048 9.56542 40.0355 9.89609C40.3662 10.2268 40.5315 10.6401 40.5315 11.1361C40.5315 11.6321 40.3662 12.0454 40.0355 12.3761C39.7048 12.7014 39.2888 12.8641 38.7875 12.8641H37.3075V15.0001H36.8835V9.40009H38.7875ZM38.7875 12.4641C39.1715 12.4641 39.4862 12.3388 39.7315 12.0881C39.9822 11.8374 40.1075 11.5201 40.1075 11.1361C40.1075 10.7468 39.9822 10.4268 39.7315 10.1761C39.4862 9.92542 39.1715 9.80009 38.7875 9.80009H37.3075V12.4641H38.7875Z"
                                        fill="white" />
                                    <path d="M42.0028 14.6001H44.6428V15.0001H41.5788V9.40009H42.0028V14.6001Z"
                                        fill="white" />
                                    <path
                                        d="M49.4484 15.0001L48.9044 13.5761H46.0964L45.5524 15.0001H45.1044L47.2804 9.40009H47.7284L49.8964 15.0001H49.4484ZM46.2564 13.1761H48.7524L47.5044 9.92009L46.2564 13.1761Z"
                                        fill="white" />
                                    <path
                                        d="M53.8809 9.40009L51.8409 12.6961V15.0001H51.4169V12.6961L49.3769 9.40009H49.8569L51.6329 12.2881L53.4009 9.40009H53.8809Z"
                                        fill="white" />
                                </svg>
                            </a>
                            <a href="https://app-storage.com" className="playmarket_apple">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.78926 15.9998C2.40798 15.9861 0.438232 11.1251 0.438232 8.64954C0.438232 4.60566 3.47183 3.72035 4.64095 3.72035C5.16783 3.72035 5.73042 3.92725 6.22664 4.11035C6.57364 4.23807 6.93251 4.36991 7.13211 4.36991C7.25158 4.36991 7.53311 4.25775 7.78167 4.15935C8.31176 3.94832 8.97139 3.68604 9.73951 3.68604C9.74089 3.68604 9.74273 3.68604 9.74408 3.68604C10.3176 3.68604 12.0567 3.81191 13.1022 5.38204L13.3471 5.75007L12.9947 6.01604C12.4911 6.39597 11.5724 7.08904 11.5724 8.46188C11.5724 10.0878 12.6129 10.7132 13.1128 11.0139C13.3334 11.1467 13.5618 11.2835 13.5618 11.5829C13.5618 11.7784 12.0018 15.9756 9.7363 15.9756C9.18195 15.9756 8.79011 15.809 8.44448 15.662C8.09476 15.5133 7.79308 15.3851 7.29458 15.3851C7.04189 15.3851 6.72236 15.5046 6.38408 15.6314C5.9218 15.8039 5.39855 15.9998 4.80483 15.9998H4.78926Z"
                                        fill="white" />
                                    <path
                                        d="M9.97954 0C10.0385 2.12737 8.51713 3.60325 6.9975 3.51069C6.74709 1.81297 8.51694 0 9.97954 0Z"
                                        fill="white" />
                                </svg>
                                <svg width="55" height="18" viewBox="0 0 55 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.03 5.00012H4.08L2.652 0.800117H1.428L0 5.00012H1.05L1.26 4.34012H2.82L3.03 5.00012ZM1.548 3.44012L2.04 1.89812L2.532 3.44012H1.548Z"
                                        fill="white" />
                                    <path
                                        d="M6.20494 2.00012L5.58094 3.90212L4.95694 2.00012H3.96094L5.07094 5.00012H6.09094L7.20094 2.00012H6.20494Z"
                                        fill="white" />
                                    <path
                                        d="M9.59198 2.00012V2.28212C9.39398 2.05412 9.09999 1.91612 8.69798 1.91612C7.91198 1.91612 7.26398 2.60612 7.26398 3.50012C7.26398 4.39412 7.91198 5.08412 8.69798 5.08412C9.09999 5.08412 9.39398 4.94612 9.59198 4.71812V5.00012H10.492V2.00012H9.59198ZM8.87799 4.23212C8.46398 4.23212 8.16398 3.95012 8.16398 3.50012C8.16398 3.05012 8.46398 2.76812 8.87799 2.76812C9.29198 2.76812 9.59198 3.05012 9.59198 3.50012C9.59198 3.95012 9.29198 4.23212 8.87799 4.23212Z"
                                        fill="white" />
                                    <path d="M11.1523 5.00012H12.0523V0.620117H11.1523V5.00012Z" fill="white" />
                                    <path
                                        d="M13.1609 1.73612C13.4549 1.73612 13.7009 1.49012 13.7009 1.19612C13.7009 0.902117 13.4549 0.656117 13.1609 0.656117C12.8669 0.656117 12.6209 0.902117 12.6209 1.19612C12.6209 1.49012 12.8669 1.73612 13.1609 1.73612ZM12.7109 5.00012H13.6109V2.00012H12.7109V5.00012Z"
                                        fill="white" />
                                    <path
                                        d="M16.0635 1.91612C15.6615 1.91612 15.3675 2.05412 15.1695 2.28212V0.800117H14.2695V5.00012H15.1695V4.71812C15.3675 4.94612 15.6615 5.08412 16.0635 5.08412C16.8495 5.08412 17.4975 4.39412 17.4975 3.50012C17.4975 2.60612 16.8495 1.91612 16.0635 1.91612ZM15.8835 4.23212C15.4695 4.23212 15.1695 3.95012 15.1695 3.50012C15.1695 3.05012 15.4695 2.76812 15.8835 2.76812C16.2975 2.76812 16.5975 3.05012 16.5975 3.50012C16.5975 3.95012 16.2975 4.23212 15.8835 4.23212Z"
                                        fill="white" />
                                    <path d="M18.0077 5.00012H18.9077V0.620117H18.0077V5.00012Z" fill="white" />
                                    <path
                                        d="M20.3703 3.86012H22.5003C22.5243 3.74612 22.5363 3.62612 22.5363 3.50012C22.5363 2.59412 21.8883 1.91612 21.0123 1.91612C20.0643 1.91612 19.4163 2.60612 19.4163 3.50012C19.4163 4.39412 20.0523 5.08412 21.0783 5.08412C21.6483 5.08412 22.0923 4.87412 22.3863 4.46612L21.6663 4.05212C21.5463 4.18412 21.3363 4.28012 21.0903 4.28012C20.7603 4.28012 20.4843 4.17212 20.3703 3.86012ZM20.3523 3.18812C20.4363 2.88212 20.6643 2.71412 21.0063 2.71412C21.2763 2.71412 21.5463 2.84012 21.6423 3.18812H20.3523Z"
                                        fill="white" />
                                    <path
                                        d="M25.9868 5.08412C26.8688 5.08412 27.5768 4.39412 27.5768 3.50012C27.5768 2.60612 26.8688 1.91612 25.9868 1.91612C25.1048 1.91612 24.3968 2.60612 24.3968 3.50012C24.3968 4.39412 25.1048 5.08412 25.9868 5.08412ZM25.9868 4.20812C25.5968 4.20812 25.2968 3.92612 25.2968 3.50012C25.2968 3.07412 25.5968 2.79212 25.9868 2.79212C26.3768 2.79212 26.6768 3.07412 26.6768 3.50012C26.6768 3.92612 26.3768 4.20812 25.9868 4.20812Z"
                                        fill="white" />
                                    <path
                                        d="M29.8439 1.91612C29.4479 1.91612 29.1479 2.06012 28.9859 2.28212V2.00012H28.0859V5.00012H28.9859V3.36212C28.9859 2.93612 29.2139 2.74412 29.5439 2.74412C29.8319 2.74412 30.0659 2.91812 30.0659 3.29012V5.00012H30.9659V3.15812C30.9659 2.34812 30.4499 1.91612 29.8439 1.91612Z"
                                        fill="white" />
                                    <path
                                        d="M34.8419 2.86412V2.00012H34.2239V1.16012L33.3239 1.43012V2.00012H32.8439V2.86412H33.3239V3.92612C33.3239 4.76612 33.6659 5.12012 34.8419 5.00012V4.18412C34.4459 4.20812 34.2239 4.18412 34.2239 3.92612V2.86412H34.8419Z"
                                        fill="white" />
                                    <path
                                        d="M37.1095 1.91612C36.7135 1.91612 36.4135 2.06012 36.2515 2.28212V0.800117H35.3515V5.00012H36.2515V3.36212C36.2515 2.93612 36.4795 2.74412 36.8095 2.74412C37.0975 2.74412 37.3315 2.91812 37.3315 3.29012V5.00012H38.2315V3.15812C38.2315 2.34812 37.7155 1.91612 37.1095 1.91612Z"
                                        fill="white" />
                                    <path
                                        d="M39.6535 3.86012H41.7835C41.8075 3.74612 41.8195 3.62612 41.8195 3.50012C41.8195 2.59412 41.1715 1.91612 40.2955 1.91612C39.3475 1.91612 38.6995 2.60612 38.6995 3.50012C38.6995 4.39412 39.3355 5.08412 40.3615 5.08412C40.9315 5.08412 41.3755 4.87412 41.6695 4.46612L40.9495 4.05212C40.8295 4.18412 40.6195 4.28012 40.3735 4.28012C40.0435 4.28012 39.7675 4.17212 39.6535 3.86012ZM39.6355 3.18812C39.7195 2.88212 39.9475 2.71412 40.2895 2.71412C40.5595 2.71412 40.8295 2.84012 40.9255 3.18812H39.6355Z"
                                        fill="white" />
                                    <path
                                        d="M5.05 16.0001H6.8L4.42 9.00012H2.38L0 16.0001H1.75L2.1 14.9001H4.7L5.05 16.0001ZM2.58 13.4001L3.4 10.8301L4.22 13.4001H2.58Z"
                                        fill="white" />
                                    <path
                                        d="M10.3369 10.8601C9.66687 10.8601 9.17688 11.0901 8.84688 11.4701V11.0001H7.34688V18.0001H8.84688V15.5301C9.17688 15.9101 9.66687 16.1401 10.3369 16.1401C11.6469 16.1401 12.7269 14.9901 12.7269 13.5001C12.7269 12.0101 11.6469 10.8601 10.3369 10.8601ZM10.0369 14.7201C9.34688 14.7201 8.84688 14.2501 8.84688 13.5001C8.84688 12.7501 9.34688 12.2801 10.0369 12.2801C10.7269 12.2801 11.2269 12.7501 11.2269 13.5001C11.2269 14.2501 10.7269 14.7201 10.0369 14.7201Z"
                                        fill="white" />
                                    <path
                                        d="M16.5673 10.8601C15.8973 10.8601 15.4073 11.0901 15.0773 11.4701V11.0001H13.5773V18.0001H15.0773V15.5301C15.4073 15.9101 15.8973 16.1401 16.5673 16.1401C17.8773 16.1401 18.9573 14.9901 18.9573 13.5001C18.9573 12.0101 17.8773 10.8601 16.5673 10.8601ZM16.2673 14.7201C15.5773 14.7201 15.0773 14.2501 15.0773 13.5001C15.0773 12.7501 15.5773 12.2801 16.2673 12.2801C16.9573 12.2801 17.4573 12.7501 17.4573 13.5001C17.4573 14.2501 16.9573 14.7201 16.2673 14.7201Z"
                                        fill="white" />
                                    <path d="M19.8078 16.0001H21.3078V8.70012H19.8078V16.0001Z" fill="white" />
                                    <path
                                        d="M23.7455 14.1001H27.2955C27.3355 13.9101 27.3555 13.7101 27.3555 13.5001C27.3555 11.9901 26.2755 10.8601 24.8155 10.8601C23.2355 10.8601 22.1555 12.0101 22.1555 13.5001C22.1555 14.9901 23.2155 16.1401 24.9255 16.1401C25.8755 16.1401 26.6155 15.7901 27.1055 15.1101L25.9055 14.4201C25.7055 14.6401 25.3555 14.8001 24.9455 14.8001C24.3955 14.8001 23.9355 14.6201 23.7455 14.1001ZM23.7155 12.9801C23.8555 12.4701 24.2355 12.1901 24.8055 12.1901C25.2555 12.1901 25.7055 12.4001 25.8655 12.9801H23.7155Z"
                                        fill="white" />
                                    <path
                                        d="M33.2062 16.1401C34.7262 16.1401 35.8063 15.3401 35.8063 13.9901C35.8063 12.5101 34.6163 12.1401 33.5563 11.8201C32.4663 11.4901 32.2962 11.2701 32.2962 10.9501C32.2962 10.6701 32.5462 10.4201 33.0462 10.4201C33.6862 10.4201 34.0162 10.7301 34.2562 11.2301L35.6063 10.4401C35.0963 9.41012 34.1963 8.86012 33.0462 8.86012C31.8363 8.86012 30.6963 9.64012 30.6963 10.9901C30.6963 12.3301 31.7162 12.8301 32.7562 13.1201C33.8062 13.4101 34.2062 13.5801 34.2062 14.0101C34.2062 14.2801 34.0162 14.5801 33.2562 14.5801C32.4662 14.5801 32.0363 14.1901 31.7862 13.6101L30.4062 14.4101C30.7962 15.4401 31.7362 16.1401 33.2062 16.1401Z"
                                        fill="white" />
                                    <path
                                        d="M39.3394 12.4401V11.0001H38.3094V9.60012L36.8094 10.0501V11.0001H36.0094V12.4401H36.8094V14.2101C36.8094 15.6101 37.3794 16.2001 39.3394 16.0001V14.6401C38.6794 14.6801 38.3094 14.6401 38.3094 14.2101V12.4401H39.3394Z"
                                        fill="white" />
                                    <path
                                        d="M42.491 16.1401C43.961 16.1401 45.141 14.9901 45.141 13.5001C45.141 12.0101 43.961 10.8601 42.491 10.8601C41.021 10.8601 39.841 12.0101 39.841 13.5001C39.841 14.9901 41.021 16.1401 42.491 16.1401ZM42.491 14.6801C41.841 14.6801 41.341 14.2101 41.341 13.5001C41.341 12.7901 41.841 12.3201 42.491 12.3201C43.141 12.3201 43.641 12.7901 43.641 13.5001C43.641 14.2101 43.141 14.6801 42.491 14.6801Z"
                                        fill="white" />
                                    <path
                                        d="M47.4895 11.8901V11.0001H45.9895V16.0001H47.4895V13.7401C47.4895 12.7501 48.3695 12.5001 48.9895 12.6001V10.9001C48.3595 10.9001 47.6895 11.2201 47.4895 11.8901Z"
                                        fill="white" />
                                    <path
                                        d="M50.8841 14.1001H54.4341C54.4741 13.9101 54.4941 13.7101 54.4941 13.5001C54.4941 11.9901 53.4141 10.8601 51.9541 10.8601C50.3741 10.8601 49.2941 12.0101 49.2941 13.5001C49.2941 14.9901 50.3541 16.1401 52.0641 16.1401C53.0141 16.1401 53.7541 15.7901 54.2441 15.1101L53.0441 14.4201C52.8441 14.6401 52.4941 14.8001 52.0841 14.8001C51.5341 14.8001 51.0741 14.6201 50.8841 14.1001ZM50.8541 12.9801C50.9941 12.4701 51.3741 12.1901 51.9441 12.1901C52.3941 12.1901 52.8441 12.4001 53.0041 12.9801H50.8541Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 footer_f">
                        <p>All rights reserved@jadoo.co</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer