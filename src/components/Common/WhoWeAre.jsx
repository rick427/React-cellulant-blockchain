import React from 'react';

class WhoWeAre extends React.Component {
    render(){
        return (
            <section className="who-we-are ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Who We <span>Are</span></h2>
                        <p>We are cellualant and we are here. After releasing the agrikore and tingg platforms, the blockchain has arrived to make both platforms even better.</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-who-we-are">
                                <i className="fa fa-users"></i>
                                <h4>We are Professional</h4>
                                <p>We have an outstanding track record for professionalism. We take you seriously and expect the same.</p>
                                <span>1</span>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-who-we-are">
                                <i className="fa fa-lightbulb-o"></i>
                                <h4>We are Passionate</h4>
                                <p>We convey a passion in what we create and deliver. All to give back to a great audience.</p>
                                <span>2</span>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-who-we-are">
                                <i className="fa fa-tag"></i>
                                <h4>We are Creative</h4>
                                <p>We are creative enough to do deliver platforms like agrikore and Tingg.</p>
                                <span>3</span>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-who-we-are">
                                <i className="fa fa-scissors"></i>
                                <h4>We are Efficient</h4>
                                <p>We make effective and "on the dot" decisions. No time loss no fuss.</p>
                                <span>4</span>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-who-we-are">
                                <i className="fa fa-linode"></i>
                                <h4>We are Unique</h4>
                                <p>We provide a fresh new look in a field that has a mono view.</p>
                                <span>5</span>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-who-we-are">
                                <i className="fa fa-life-ring"></i>
                                <h4>We are Support</h4>
                                <p>We make sure that you our user base isn't left hanging. </p>
                                <span>6</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default WhoWeAre;