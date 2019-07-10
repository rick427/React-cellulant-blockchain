import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Preloader from './components/Common/Preloader';
//  import Home from '../src/components/Pages/Home';
import HomeTwo from './components/Pages/HomeTwo';


class App extends React.Component {

    state = {
        loading: true
    };

    componentDidMount(){
        this.demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 2000));
    }

    hashLinkScroll = () => {
        const { hash } = window.location;
        if (hash !== '') {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) element.scrollIntoView();
            }, 0);
        }
    }

    render() {
        return (
            <Router onUpdate={this.hashLinkScroll}>
                <React.Fragment>
                    {this.state.loading ? <Preloader /> : ''}
                    <Navigation />
                     {/* <Route path="/" exact component={Home} />   */}
                    <Route path="/" exact component={HomeTwo} />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
