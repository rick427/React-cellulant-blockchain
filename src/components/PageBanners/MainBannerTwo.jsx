import React, {useState} from 'react';
import WaterWave from 'react-water-wave';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import image from '../../assets/images/bitcoin.jpg';

const MainBannerTwo = () => {
    const [toggle, setToggle] = useState(false);
    console.log('Outside flip State',toggle);

    const flip = e => {
        e.preventDefault()
        setToggle(prev => ({
            toggle: !prev.toggle
        }));
        console.log('Inside flip',toggle)
    };

    const LoginForm = () => {
        return (
            <div className="main-banner-text">
                <form className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Name"/>
                </form>
                <button onClick={flip}  className="btn btn-primary mt-3 view-work">Back</button>
            </div>
        )
    };

    return (
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
                                        {toggle ? (
                                            LoginForm()
                                        ):(
                                            <div className="main-banner-text" >
                                               <h4>We Are Cellulant</h4>
                                               <h1>Your Gateway <span> To Online</span> Payments</h1>
                                               <p>The brain that cordinates and secures the Agrikore and Tingg platforms respectively.</p>
                                               <AnchorLink href="#welcome" className="btn btn-primary btn1">Get Started</AnchorLink>
                                               <button onClick={flip}  className="btn btn-primary view-work">
                                                 Login
                                               </button>
                                           </div>      
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </WaterWave>

    )
};

export default MainBannerTwo;