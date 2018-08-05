import React, { Component } from "react";
import { browserHistory } from "react-router-dom";

class Home extends Component {
    componentDidMount() {
        browserHistory.push('/');
    }
    render() {
        return (
            <div id="home">
                <h1>Homepage</h1>
            </div>
        );
    }
}

export default Home;