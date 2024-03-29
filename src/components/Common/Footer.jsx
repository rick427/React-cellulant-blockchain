import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/cell-logo.png';
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <img className="h-25 mb-3" src={logo} alt="logo"/>
                            <h4><Link to="/"><span>b</span>lockchain</Link></h4>
                            <ul>
                                <li><Link to="#" className="fa fa-facebook"></Link></li>
                                <li><Link to="#" className="fa fa-twitter"></Link></li>
                                <li><Link to="#" className="fa fa-skype"></Link></li>
                                <li><Link to="#" className="fa fa-instagram"></Link></li>
                                <li><Link to="#" className="fa fa-linkedin"></Link></li>
                            </ul>
                            <p>Copyright <i className="fa fa-copyright"></i> 2019 All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;