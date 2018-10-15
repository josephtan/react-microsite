import React, { Component } from "react";
import axiosOption from "./axiosOption";
import {drawPolygon} from "./drawPolygon";

export default class PopupBox extends Component{
    constructor(props){
        super(props);
        this.state = {currentPopUp:this.props.currentPopUp, activePopUp:this.props.activePopUp, thisMouseOver:this.props.thisMouseOver, portfoliodata:[]};
        this.wrapperSelector =".wrapper";
        this.overlaySelector = ".menu-overlay";
        this.openMenuSelector = "open-menu";
        this.activeClass = "active";
    }
    componentDidMount(){
        axiosOption.get("portfoliodata.json")
            .then((res)=> {
                this.setState({
                    portfoliodata : res.data
                });
            }).catch((err)=>{
            console.log(err);
        });
    }
    clickHandle(items){
        this.togglePopUp(items);
    }
    togglePopUp(items){
        const currentState = this.state.active;
        const activePopup = this.state.activePopUp;
        const currentPopUp = items.index;
        this.setState({ active: !currentState, activePopUp: !activePopup, currentPopUp: currentPopUp});

        if(activePopup === true) {
            document.querySelector(this.wrapperSelector).classList.add(this.openMenuSelector);
            document.querySelector(this.overlaySelector).classList.add(this.activeClass);
        }else{
            document.querySelector(this.wrapperSelector).classList.remove(this.openMenuSelector);
            document.querySelector(this.overlaySelector).classList.remove(this.activeClass);
        }
    }
    mouseOver(items){
        document.querySelector(".popup-tooltip").classList.remove("slidedown");
       const currentPopUp = items.index;
       this.setState({thisMouseOver: true, currentPopUp:currentPopUp});

    }
    mouseOut(items){
        const currentPopUp = items.index;
        this.setState({thisMouseOver:false,currentPopUp:currentPopUp});
        document.querySelector(".popup-tooltip").classList.add("slidedown");
    }
    render(){
        const itemList = this.state.portfoliodata.map((items,i) => {
            return(<li key={i}>
                <a href="#" key={i} onClick={this.clickHandle.bind(this,items)} onMouseOver={this.mouseOver.bind(this,items)} onMouseOut={this.mouseOut.bind(this,items)}>
                    <img className="thumbnail" src={require("../images/".concat(items.thumb))} alt={items.text} />
                    <div className={this.state.thisMouseOver === true && this.state.currentPopUp === items.index ? "popup-tooltip slideup":"popup-tooltip"}><span className="has-text-centered">{items.text}</span></div>
                </a>
                <div className={this.state.active === true && this.state.currentPopUp === items.index  ? "popup active" : "popup"}>
                    <div className="popup-content">
                        <button onClick={this.clickHandle.bind(this,items)}>
                            <span className="font-fa-solid fa-times is-borderless"></span>
                        </button>
                        <img src={require("../images/".concat(items.image))} alt={items.text} width="800" height="600" />
                        <p>{items.description}</p>
                    </div>
                </div>
            </li>);
        });
        return(
            <div className="portfolio-thumbnails">
                <ul className="no-liststyle">
                    {itemList}
                </ul>
            </div>
        )
    }}
PopupBox.defaultProps = {
    activePopUp: true,
    thisMouseOver: false
};