import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import WaterWave from 'react-water-wave';
import Typewriter from 'typewriter-effect';
import image from '../../assets/images/main-bg-3.jpg';
 
const MainBanner = React.memo(() => (
    <WaterWave 
        style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
        imageUrl={image}>
            {()=> (
                <div id="home" className="main-banner">
                    <div className="creative-banner-two"></div>
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="main-banner-text">
                                            <h4>The Agrikore Blockchain</h4>
                                            <h1>We Are 
                                                <Typewriter
                                                    options={{
                                                        strings: ['Professionals.', 'Passionate.', 'Creative.', 'Unique.'],
                                                        autoStart: true,
                                                        loop: true,
                                                    }}
                                                />
                                            </h1>
                                            <p>Enpowering and changing the African Agricultural Ecosystem</p>
                                            <AnchorLink href="#welcome" className="btn btn-primary">Get Started</AnchorLink>
                                            <AnchorLink href="#work" className="btn btn-primary view-work">View Work</AnchorLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </WaterWave>
))
 
export default MainBanner;