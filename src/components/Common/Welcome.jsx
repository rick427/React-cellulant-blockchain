import React from 'react';
import { Link } from 'react-router-dom';
 
class Welcome extends React.Component {
    render(){
        return (
            <section id="welcome" className="welcome-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h4>We are here Now</h4>
                        <h2>Welcome to the <span>Blockchain</span></h2>
                        <p>The blockchain is a brain for cellulant's 2 platforms; Agrikore and Tingg. Both of which are awesome by the way</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <i className="fa fa-pencil-square-o icon"></i>
                                <h3>Immutability</h3>
                                <p>The data structure in a blockchain is append-only. So, the data cannot be altered or deleted</p>
                                <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <i className="fa fa-laptop icon"></i>
                                <h3>Decentralization</h3>
                                <p>The decentralized nature of blockchain technology means that it doesn't rely on a central point of control.</p>
                                <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-box">
                                <i className="fa fa-life-ring icon"></i>
                                <h3>Security</h3>
                                <p>The transactions are recorded in chronological order. Thus, all the blocks in the blockchain are time stamped..</p>
                                <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Welcome;