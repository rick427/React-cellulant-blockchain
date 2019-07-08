import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
 
class Funfact extends React.Component {
    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };

    render(){
        return (
            <section className="funFacts-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="funFact">
                                <i className="fa fa-address-book"></i>
                                <h2 className="count">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 500
                                                    : 0
                                            }
                                            duration={6}
                                        />
                                    </VisibilitySensor>
                                </h2>
                                <p>Wallets</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="funFact">
                                <i className="fa fa-paper-plane"></i>
                                <h2 className="count">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 38
                                                    : 0
                                            }
                                            duration={6}
                                        />
                                    </VisibilitySensor>
                                </h2>
                                <p>Countries</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="funFact">
                                <i className="fa fa-money"></i>
                                <h2 className="count">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 2340
                                                    : 0
                                            }
                                            duration={6}
                                        />
                                    </VisibilitySensor>
                                </h2>
                                <p>Transactions</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="funFact">
                                <i className="fa fa-users"></i>
                                <h2><span className="count">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 10
                                                    : 0
                                            }
                                            duration={6}
                                        />
                                    </VisibilitySensor>
                                </span></h2>
                                <p>Team Members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Funfact;