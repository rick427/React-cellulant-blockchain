import React from 'react';
import imgOne from '../../assets/images/services-img1.jpg';
import imgTwo from '../../assets/images/services-img2.jpg';
import imgThree from '../../assets/images/services-img3.jpg';
import imgFour from '../../assets/images/services-img4.jpg';
import imgFive from '../../assets/images/services-img5.jpg';
import imgSix from '../../assets/images/services-img6.jpg';
 
class Services extends React.Component {
    render(){
        return (
            <section id="services" className="services-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Our <span>Services</span></h2>
                        <p>Our blockchain offers a plethora of services</p>
                    </div>
                
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgOne} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-pencil-square-o"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Payment Security</h3>
                                    <p>Your transactions are properly secured using strong
                                        cryptography to secure your financial transactions.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgTwo} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-linode"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Smart Contracts</h3>
                                    <p>Create self executing contracts with the terms of the agreement between buyer and seller.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgThree} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-desktop"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Crypto-Assets</h3>
                                    <p>Our digital assets the MULA is designed to work as a medium of exchange in our ecosystem.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgFour} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-line-chart"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Analytics</h3>
                                    <p>Check out your orders, smart contracts, and much more via our analytics panel.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgFive} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-anchor"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Cash out</h3>
                                    <p>Dont feel like hoarding all that MULA's? You can easily cash out those MULA to either Dollars or Naira.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgSix} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-headphones"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Fast transactions</h3>
                                    <p>Via our blockchain, transactions are lightning fast giving you a fluid and seemless UX.</p>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Services;