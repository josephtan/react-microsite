import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
import Navigation from "./js/components/navigation";
import Home from "./js/views/home";
import Profile from "./js/views/profile";
import Portfolio from "./js/views/portfolio";
import Error from "./js/views/error";
import Footer from "./js/components/footer";
import {axiosInstance} from "./axiosOption";
import './css/app.scss';

export default class App extends Component {

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
            "Profile" : Profile,
            "Portfolio": Portfolio,
            "Error" : Error
        };

        const RouteTags = this.state.routedata.map((routelink) => {
            let Routes = [];
            if(routelink.type !== ""){
                Routes = <Route exact={routelink.exact} key={routelink.index} path={routelink.url} component={componentRegistry[routelink.text]} strict={routelink.strict} />;
            }else{
                Routes = <Route key={routelink.index} component={componentRegistry[routelink.text]}  />
            }
            return Routes;
        });

        return(
            <div className="wrapper">
                <div className="menu-overlay"></div>
                <header className="container header block__relative">
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
                    <Switch>
                        {RouteTags}
                    </Switch>
                </main>
                <Footer/>
            </div>

        );
    }
}