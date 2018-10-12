import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import axiosOption from "./axiosOption";

export default class PopupBox extends Component{
    constructor(props){
        super(props);
        this.state = {show: this.props.show, showPopUp:this.props.showPopUp, portfoliodata:[]};
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
    togglePopUp(popupSelector){
        const currentState = this.state.active;
        const currentItem = this.state.showPopUp;
        this.setState({ active: !currentState,showPopUp:!currentItem, show: !this.state.show});
    }

    render(){
        const imagePath = require.context("./images/", true);
        const images =[
            "image-1.jpg",
            "image-2.jpg",
            "image-3.jpg",
            "image-4.jpg",
            "image-5.jpg",
        ];
        const itemList = this.state.portfoliodata.map((items) => {
                return(<li className="itemlist" key={items.index}><img src={"/images/".concat(items.image)}/></li>);
        });
        return(
            <div>
                <ul>
                    {itemList}
                </ul>
            </div>
        )
    }}

PopupBox.defaultProps = {
    show: false,
    showPopUp: false
};