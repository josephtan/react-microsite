import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
import Navigation from "./js/components/navigation";
import Home from "./js/views/home";
import Profile from "./js/views/profile";
import Portfolio from "./js/views/portfolio";
import Error from "./js/views/error";
import Footer from "./js/components/footer";
import {axiosInstance} from "./axiosOption";
import {spanLettering} from "./js/components/utils/spanLettering";
import './css/app.scss';
import Anime from "react-anime";

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {routedata:[],footdata:[],showHeader:true};
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
        this.detectCurrentPage();
    }
    detectCurrentPage(){
        let pathArray =  window.location.pathname.split('/');
        let currentPage = pathArray[1];

        if(currentPage === "" || currentPage === "/"){
            return currentPage + "active";
        } else{
            return ("");
        }

    }
    headerContent(){
        let text ={};
        text.scaleIn = [0,20];
        text.duration =[1000];
        text.durationOut= [600];
        text.elasticity = [600];

        return (<div className={this.detectCurrentPage() + " column block__relative"}>
            <h1 className="header-title has-text-centered">
                <Anime loop={true} translateY={text.scaleIn} elasticity={text.elasticity} duration={text.duration} direction="alternate" delay={(el, index) => {return 50 * (index+ 1)}}>
                    {spanLettering("Joseph Tan")}
                </Anime>
            </h1>
        </div>);

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
            if(routelink.text !== "Home"){
                this.state.showHeader = false;
            }
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
                        <div id="block__nav">
                            <Navigation />
                        </div>
                    {this.headerContent()}
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