import React, { Component } from "react";
import {Route} from "react-router-dom";
import Navigation from "./navigation";
import Home from "./views/home";
import Contact from "./views/contact";
import Profile from "./views/profile";
import Portfolio from "./views/portfolio";
import StarBackground from "./starbackground";
import client from "./client";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {routedata:[]};
    }
    componentDidMount(){
        client.get("navdata.json")
            .then((res)=> {
                this.setState({
                   routedata : res.data
                });
            }).catch((err)=>{
            console.log(err);
        });
    }
    render(){
        /** React Needs a component registry to render a HTML node https://stackoverflow.com/a/38903335/2796523  **/
    const componentRegistry = {
            "Home": Home,
            "Contact" :Contact,
            "Profile" :Profile,
            "Portfolio": Portfolio
    };

    const RouteTags = this.state.routedata.map((routelink) => {
            return(
                <Route exact={routelink.exact} path={routelink.url} component={componentRegistry[routelink.text]} />

            )
     });

    return(
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
                    </div>
                </header>
                <main role="main" className="container">
                    {RouteTags}

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