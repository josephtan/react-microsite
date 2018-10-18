import React, { Component } from "react";
import {Route} from "react-router-dom";
import Navigation from "./navigation";
import Home from "./views/home";
import Contact from "./views/contact";
import Profile from "./views/profile";
import Blog from "./views/blog";
import Portfolio from "./views/portfolio";
import {axiosInstance} from "../axiosOption";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {routedata:[],footdata:[]};
    }
    componentDidMount(){
        axiosInstance.get("navdata.json")
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
            "Blog" : Blog,
            "Portfolio": Portfolio
    };

    const RouteTags = this.state.routedata.map((routelink) => {
            return(<Route exact={routelink.exact} key={routelink.index} path={routelink.url} component={componentRegistry[routelink.text]} />)
     });

    return(
            <div className="wrapper">
                <div className="menu-overlay"></div>
                <header className="header block__relative">
                    <div>
                        <div id="block__nav">
                           <Navigation />
                        </div>
                        <div className="column block__relative">
                            <h1 className="header-title has-text-centered">Joseph Tan</h1>
                        </div>
                    </div>
                </header>
                <main role="main" className="main-container container">
                    {RouteTags}

                </main>
                <footer className="footer block__relative text-white">
                    <div className="has-text-centered">
                        <p>Web activities and external links that I can be contacted:</p>
                        <ul className="no-liststyle list-inline white-link font-smaller">
                            <li><a href="https://github.com/josephtan" target="_blank"><span className="font-fa-brands fa-github"></span></a></li>
                            <li><a href="https://codepen.io/josephtan/"  target="_blank"><span className="font-fa-brands fa-codepen"></span></a></li>
                            <li><a href="https://www.meetup.com/" target="_blank"><span className="font-fa-brands fa-meetup"></span></a></li>
                            <li><a href="https://www.slack.com/" target="_blank"><span className="font-fa-brands fa-slack"></span></a></li>
                            <li><a href="https://jsfiddle.net/user/JosephTan/fiddles/" target="_blank"><span className="font-fa-brands fa-fiddle"></span></a></li>
                            <li><a href="https://www.linkedin.com/in/joetan83/" target="_blank"><span className="font-fa-brands fa-linkedin"></span></a></li>
                        </ul>
                    </div>
                    <div className="container">
                        <div className="has-text-centered">
                            <h4>Joseph Tan portfolio site build with Webpack 4.16, React 1.6, React Router 4.3, axios.js, d3.js &amp; react-anime.js</h4>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}

export default App;