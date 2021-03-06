import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import {axiosInstance} from "../../axiosOption";
import * as d3 from "d3";
import NavClock from "./navClock";
import {RenderHex} from "./utils/renderHex";
// =========
// NAV ITEMS
// =========
export default class Navigation extends PureComponent{
    constructor(props){
        super(props);
        this.state = {show: this.props.show, showNav:this.props.showNav, navdata:[]};
        this.wrapperSelector =".wrapper";
        this.overlaySelector = ".menu-overlay";
        this.activeClass = "active";
        this.menuBtnText=".menu-text";
        this.hexSelector=".hex-btn";
        this.hexmarginTop=-22;
        this.hexmarginLeft=-22;
        this.hexMTop=-22;
        this.hexMLeft=-22;
        this.hexRadius= 24;
        this.hexWidth = 48;
        this.hexHeight = 48;
    }
    componentDidMount(){
        axiosInstance.get("navdata.json")
            .then((res)=> {
                this.setState({
                    navdata : res.data
                });
            }).catch((err)=>{
            console.log(err);
        });
        RenderHex(this.hexSelector,this.hexMTop,this.hexMLeft,this.hexRadius, this.hexWidth, this.hexHeight,"hex-btn-path"," ");
    }
    toggleShow (){
        const currentState = this.state.active;
        const currentNav = this.state.showNav;
        this.setState({ active: !currentState,showNav:!currentNav, show: !this.state.show});
    }
    clickHandle(){
        this.toggleShow();
        this.toggleClasses();
    }
    toggleClasses(){
        const currentNav = this.state.showNav;
        if(currentNav === true){
            document.querySelector(this.overlaySelector).classList.add(this.activeClass);
            document.querySelector(this.menuBtnText).classList.add(this.activeClass);
        } else{
            document.querySelector(this.wrapperSelector).classList.remove(this.openMenuSelector);
            document.querySelector(this.overlaySelector).classList.remove(this.activeClass);
            document.querySelector(this.menuBtnText).classList.remove(this.activeClass);
        }
    }
    renderHexBtn(selector,marginTop,marginLeft,radius,hexWidth,hexHeight){
        let margins = {top: marginTop, left: marginLeft};
        let _sq32 = (Math.sqrt(3) / 2), menuRad = radius, menX = hexWidth, menY = hexHeight;
        const drawHexagon =  d3.line()
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; })
            .curve(d3.curveCardinalClosed.tension(1));
        const hexagonData = [
            { "x": menuRad + menX, "y": menY},
            { "x": menuRad / 2 + menX, "y": menuRad * _sq32 + menY},
            { "x": -menuRad / 2 + menX, "y": menuRad * _sq32 + menY},
            { "x": -menuRad + menX, "y": menY},
            { "x": -menuRad / 2 + menX,  "y": -menuRad * _sq32 + menY},
            { "x": menuRad / 2 + menX, "y": -menuRad * _sq32 + menY}];
        let strokeW = 2, fill = "transparent";
        let menuBtn = d3.select(selector);
        let menuBtnElements = menuBtn.select("path")
            .attr("d", drawHexagon(hexagonData))
            .attr("transform", "translate(" + [margins.left, margins.top] + ")")
            .attr("fill", fill)
            .attr("stroke-width", strokeW);
    }
    render() {
        const navLink = this.state.navdata.map((navlink) => {
            if (this.state.show) {
                if(navlink.url !== "" && navlink.type !== ""){
                    return (<NavLink onClick={this.clickHandle.bind(this)} className="has-text-centered is-white" key={navlink.url} exact={navlink.exact} to={navlink.url} > {navlink.text}</NavLink>);
                }

            }
        });
        return (
            <nav>
                <div className="holder-btn block__absolute">
                <button className={this.state.active ? "menu-btn dropdown-btn hamburger hamburger--spin is-active":"menu-btn dropdown-btn hamburger hamburger--spin"} onClick={this.clickHandle.bind(this)}>
                    <svg className={"hex-btn"}><path></path></svg>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                    <span className="menu-text has-text-centered">Menu</span>
                    <NavClock></NavClock>
                </div>
                <div className={this.state.active ? "dropdown is-shadowless active " : "dropdown is-shadowless"}>
                        <div className={this.state.active ? "dropdown-content-wrapper active" : "dropdown-content"}>
                            <div className={this.state.active ? "dropdown-content is-shadowless active" : "dropdown-content"}>
                                {navLink}
                            </div>
                        </div>
                </div>
            </nav>
        )
    }

}
Navigation.defaultProps = {
    show: false,
    showNav: true
};