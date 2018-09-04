
import React, { Component} from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import client from "./client";
import * as d3 from "d3";

// =========
// NAV ITEMS
// =========


export default class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {show: this.props.show, showNav:this.props.showNav, navdata:[]};
    }

    componentDidMount(){
        client.get("navdata.json")
            .then((res)=> {
                this.setState({
                    navdata : res.data
                });
            }).catch((err)=>{
            console.log(err);
        });
       this.renderHex();
    }
    toggleShow (){
        const currentState = this.state.active;
        const currentNav = this.state.showNav;
        this.setState({ active: !currentState,showNav:!currentNav, show: !this.state.show});
        if(currentNav === true){
            document.getElementById("wrapper").classList.add("open-menu");
            document.getElementById("menuOverlay").classList.add("active");
        } else{
            document.getElementById("wrapper").classList.remove("open-menu");
            document.getElementById("menuOverlay").classList.remove("active");
        }
    }
    clickHandle(){
        this.toggleShow();
    }
    renderHex(){
        let margins = {top: -22, left: -22};
        let _sq32 = (Math.sqrt(3) / 2), menuRad = 24, menX = 48, menY = 48;
        const drawHexagon =  d3.line()
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; })
            .curve(d3.curveCardinalClosed.tension(1));
        const hexagonData = [
            { "x": menuRad + menX, "y": menY},
            { "x": menuRad / 2 + menX,  "y": menuRad * _sq32 + menY},
            { "x": -menuRad / 2 + menX,  "y": menuRad * _sq32 + menY},
            { "x": -menuRad + menX,  "y": menY},
            { "x": -menuRad / 2 + menX,  "y": -menuRad * _sq32 + menY},
            { "x": menuRad / 2 + menX, "y": -menuRad * _sq32 + menY}];
        let  strokeC = "#00e3ff", strokeW = 2, fill = "transparent";
        let menuBtn = d3.select(".menuBtnElements");
        let menuBtnElements = menuBtn.select("path")
            .attr("d", drawHexagon(hexagonData))
            .attr("transform", "translate(" + [margins.left, margins.top] + ")")
            .attr("fill", fill)
            .attr("stroke-width", strokeW);
    }
    render() {
        const navLink = this.state.navdata.map((navlink) => {
            if (this.state.show) {
                return (
                    <NavLink key={navlink.url} to={navlink.url}> {navlink.text}</NavLink>)}
        });
        return (
            <nav>

                    <div className={this.state.active ? "dropdown active" : "dropdown"}>
                        <button className={this.state.active ? "menuBtn dropdown-btn hamburger hamburger--spin is-active":"menuBtn dropdown-btn hamburger hamburger--spin"} onClick={this.clickHandle.bind(this)}>
                            <svg className={"menuBtnElements"}><path></path></svg>
                              <span className="hamburger-box">
                                  <span className="hamburger-inner"></span>
                                </span>
                        </button>
                        <div className={this.state.active ? "dropdown-content active" : "dropdown-content"}>
                            <div className={this.state.active ? "dropdown-content-wrapper active" : "dropdown-content-wrapper"}>
                                {navLink}
                            </div>
                        </div>
                </div>
            </nav>
        )
    }

}


Navigation.propTypes = {
    show: PropTypes.bool.isRequired,
    showNav: PropTypes.bool.isRequired
};

Navigation.defaultProps = {
    show: false,
    showNav: true
};