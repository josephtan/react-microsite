
import React, { Component} from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import client from "./client";

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
    render() {
        const navLink = this.state.navdata.map((navlink) => {
            if (this.state.show) {
                return (
                    <NavLink key={navlink.url} to={navlink.url}> {navlink.text}</NavLink>)}
        });
        return (
            <nav>

                    <div className={this.state.active ? "dropdown active" : "dropdown"}>
                        <button className={this.state.active ? "menuBtn dropdown-btn hamburger hamburger--spin is-active": "menuBtn dropdown-btn hamburger hamburger--spin"} onClick={this.clickHandle.bind(this)}>
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