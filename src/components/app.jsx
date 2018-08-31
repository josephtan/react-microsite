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
        this.routemap = {routedata:[]};
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
        const RouteTags = this.routemap.routedata.map((route) => {
            return(<Route exact={route.exact} key={route.url} path={route.url} component={route.text}/>)
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
};

export default App;