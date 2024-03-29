import React from 'react';
import { Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import 'isomorphic-fetch';

const CustomComponent = ({ text }) => <div><img src="http://ruralshores.com/assets/marker-icon.png" alt="map" /></div>;
 
class Contact extends React.Component {
    static defaultProps = {
        center: {
            lat: 9.0765,
            lng: 7.3986
        },
        zoom: 11
    };

    state = {
        submitting: false,
        submitted: false,
        buttonState: '',
        formFields: {
            name: '',
            email: '',
            phone: '',
            text: ''
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state.formFields;
        fetch('/api/contact', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (res.status === 200) {
                this.setState({ submitted: true })
            }
            let formFields = Object.assign({}, this.state.formFields);
            formFields.name = '';
            formFields.email = '';
            formFields.phone = '';
            formFields.text = '';
            this.setState({formFields});
        });
    }

    nameChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.name = e.target.value;
        this.setState({formFields});
    }

    emailChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.email = e.target.value;
        this.setState({formFields});
    }

    phoneChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.phone = e.target.value;
        this.setState({formFields});
    }

    textChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.text = e.target.value;
        this.setState({formFields});
    }

    onHideSuccess = () => {
        this.setState({submitted: false});
    }

    successMessage = () => {
        if (this.state.submitted){
            return (
                <div 
                    className="alert alert-success alert-dismissible fade show" 
                    style={{ marginTop: '14px' }}
                >
                    <strong>Thank you!</strong> Your message has been sent.
                    <button 
                        type="button" 
                        className="close"
                        onClick={this.onHideSuccess}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            );
        }
    }

    render(){
        return (
            <section id="contact" className="contact-area ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="section-title">
                        <h4>Get in Touch</h4>
                        <h2> Want to <span>Contact</span> Us</h2>
                        <p>Want to make a report or post a question? Fill the form below. You can find us by following the map below if you want a 1-on-1 audience.</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div id="map">
                                <div style={{ height: '100%', width: '100%' }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: 'AIzaSyDTWAxQ7Z4GNC28ljvgSDBAmTiZ-eYiGog' }}
                                        defaultCenter={this.props.center}
                                        defaultZoom={this.props.zoom}
                                    >
                                        <CustomComponent
                                            lat={9.0765}
                                            lng={7.3986}
                                            text="Marker"
                                        />
                                    </GoogleMapReact>
                                </div>
                            </div>
                            
                            <div className="contact-info">
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker"></i> Churchgate, Central Area, Abuja, Nigeria
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope"></i> 
                                        <Link to="#">blockchain@cellulant.com.ng</Link>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i> 
                                        <Link to="#">(+234)802-544-5515</Link>
                                    </li>
                                    <li>
                                        <i className="fa fa-fax"></i> 
                                        <Link to="#">617-241-60055</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-form">
                                <h4>Stay Connected</h4>
                                <form id="contactForm" onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="name" 
                                                    id="name" 
                                                    required={true}
                                                    data-error="Please enter your name" 
                                                    value={this.state.formFields.name}
                                                    onChange={this.nameChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    name="email" 
                                                    id="email" 
                                                    required={true}
                                                    data-error="Please enter your email" 
                                                    value={this.state.formFields.email}
                                                    onChange={this.emailChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="number">Phone Number</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="number" 
                                                    id="number" 
                                                    required={true}
                                                    data-error="Please enter your number" 
                                                    value={this.state.formFields.phone}
                                                    onChange={this.phoneChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea 
                                                    name="message" 
                                                    className="form-control" 
                                                    id="message" 
                                                    cols="30" 
                                                    rows="4" 
                                                    required={true}
                                                    data-error="Write your message" 
                                                    value={this.state.formFields.text}
                                                    onChange={this.textChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                            {this.successMessage()}
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Contact;