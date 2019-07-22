import React from 'react';
import WaterWave from 'react-water-wave';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import image from '../../assets/images/bitcoin.jpg';

const MainBannerTwo = React.memo(() => (
    <WaterWave
        style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
        imageUrl={image}>
        {() => (
            <div id="home" className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="main-banner-text">
                                        <h4>We Are Cellulant</h4>
                                        <h1>Your Gateway <span> To Online</span> Payments</h1>
                                        <p>The brain that cordinates and secures the Agrikore and Tingg platforms respectively.</p>
                                        <AnchorLink href="#welcome" className="btn btn-primary btn1">Get Started</AnchorLink>
                                        <a
                                            href="http://41.73.252.236:9083/signin"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary view-work"
                                        >
                                            Login
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </WaterWave>
));

export default MainBannerTwo;