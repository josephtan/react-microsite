import React, { Component } from "react";

import Navigation from "./navigation";

class App extends Component {
    render() {
        return (
            <div id="wrapper">
                <header className="header">
                    <div className="container columns">
                        <div id="navbar" className="column">
                            <nav>
                                <Navigation />
                            </nav>
                        </div>
                        <div className="column is-10">
                            <h1 className="header-title has-text-centered">Test</h1>
                        </div>
                        <div className="column">
                            <div id="social">
                                <nav>
                                    <Social/>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <main role="main" className="container">
                    <div id="hero-ad">
                        <small>banner ad</small>
                        <div className="desktop">
                            <img src="http://via.placeholder.com/768x90" />
                        </div>
                        <div className="tablet">
                            <img src="http://via.placeholder.com/320x250" />
                        </div>
                    </div>
                    {this.props.children}
                    <div id="footer-ad">
                        <small>banner ad</small>
                        <img src="http://via.placeholder.com/320x250"/>
                    </div>
                </main>
                <footer className="footer">
                    <div className="container">
                        <div className="has-text-centered">
                            <h4>test</h4>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default App;