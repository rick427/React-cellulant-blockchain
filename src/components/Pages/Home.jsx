import React from 'react'
import MainBanner from '../PageBanners/MainBanner';
import Welcome from '../Common/Welcome';
import About from '../Common/About';
import WhoWeAre from '../Common/WhoWeAre';
import Funfact from '../Common/Funfact';
import Services from '../Common/Services';
import Faq from '../Common/Faq';
import Testimonial from '../Common/Testimonial';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';
import GoTop from '../Common/GoTop';
 
class Home extends React.Component {
    render(){
        return (
            <React.Fragment>

                {/* Main Banner */}
                <MainBanner />

                {/* Welcome Area */}
                <Welcome />

                {/* About Area */}
                <About />
                

                {/* Who We Are Area */}
                <WhoWeAre />


                {/* Fact Area */}
                <Funfact />

                {/* Team Area */}
                {/* <Team /> */}


                {/* Services Area */}
                <Services />

              

                {/* FAQ Area */}
                <Faq />
                {/* Testimonials Area */}
                <Testimonial />


                {/* Contact Area */}
                <Contact />
                {/* Footer Area */}
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}
 
export default Home;