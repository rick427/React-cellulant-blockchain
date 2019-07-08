import React from 'react';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/imx.jpeg';
 
class About extends React.Component {
    state = {
        isOpen: false
    }

    openModal = () => {
        this.setState({isOpen: true})
    }
    render(){
        return (
            <section id="about" className="about-area ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>About <span>Blockchain</span></h2>
                        <p>Blockchain is the most trusted and fastest growing crypto company, helping millions across the globe have an easy and safe way to access cryptocurrencies</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-addax">
                                <div className="section-title">
                                    <h2>We Are Digital <span>Marketing & Branding</span></h2>
                                    <p>We are the eye in the storm of africa's agricultural ecosystem. We are Here.</p>
                                </div>

                                <ul className="pull-left">
                                    <li><i className="fa fa-check"></i>Creative Payments</li>
                                    <li><i className="fa fa-check"></i>Value Chain</li>
                                    <li><i className="fa fa-check"></i>Supply Chain</li>
                                </ul>

                                <ul>
                                    <li><i className="fa fa-check"></i>Modern Design</li>
                                    <li><i className="fa fa-check"></i>Awesome Platforms</li>
                                    <li><i className="fa fa-check"></i>Digital Marketing & Branding</li>
                                </ul>

                                <Link to="#" className="btn btn-primary">Read More</Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="about-video">
                                <img src={aboutImg} alt="about" />
                                <div className="video-btn">
                                    <Link 
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        to="#" 
                                        className="popup-youtube"
                                    >
                                        <i className="fa fa-play"></i>
                                    </Link>
                                    <ModalVideo 
                                        channel='youtube' 
                                        isOpen={this.state.isOpen} 
                                        videoId='mgM5rUPhAjI' 
                                        onClose={() => this.setState({isOpen: false})} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;