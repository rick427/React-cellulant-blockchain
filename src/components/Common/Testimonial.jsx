import React from 'react';
import clientImgOne from '../../assets/images/client-avatar1.jpg';
import clientImgTwo from '../../assets/images/client-avatar2.jpg';
import clientImgThree from '../../assets/images/client-avatar3.jpg';
 
class Testimonial extends React.Component {
    render(){
        return (
            <section className="testimonials-area ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Clients <span>Feedback</span></h2>
                        <p>Check out what our users have to say about us so far.</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feedback">
                                <div className="client-info">
                                    <div className="client-pic">
                                        <img src={clientImgOne} alt="client-avatar" />
                                    </div>

                                    <div className="client-title">
                                        <h4>Harrison Kafui</h4>
                                        <h5>CTO of Gwarinpa</h5>
                                    </div>
                                </div>

                                <p>The platform shows a lot of promise, growth and financial wise. 
                                    The platform breathtakingly simple and fluid to use. 
                                    Really recommend it to others.
                                </p>

                                <span><i className="fa fa-quote-left"></i></span>
                            </div>
                        </div>
                            
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feedback">
                                <div className="client-info">
                                    <div className="client-pic">
                                        <img src={clientImgTwo} alt="client-avatar" />
                                    </div>

                                    <div className="client-title">
                                        <h4>Alex Smith</h4>
                                        <h5>CEO of Twitter</h5>
                                    </div>
                                </div>

                                <p>One word, AMAZING. This is a wonderful platform, everything ranging from security, transactions, smart contracts etc are top notch.</p>

                                <span><i className="fa fa-quote-right"></i></span>
                            </div>
                        </div>
                            
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feedback">
                                <div className="client-info">
                                    <div className="client-pic">
                                        <img src={clientImgThree} alt="client-avatar" />
                                    </div>

                                    <div className="client-title">
                                        <h4>Chijoke Herod</h4>
                                        <h5>Farmer in KingsLanding</h5>
                                    </div>
                                </div>

                                <p>Cheers guys for making this wonderful platform while keeping us in mind.</p>

                                <span><i className="fa fa-quote-left"></i></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Testimonial;