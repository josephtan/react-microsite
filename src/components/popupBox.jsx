import React, { Component } from "react";
import ReactDOM from "react-dom";
import axiosOption from "./axiosOption";
import {drawPolygon} from "./drawPolygon";

export default class PopupBox extends Component{
    constructor(props){
        super(props);
        this.state = {showPopUp:this.props.showPopUp, portfoliodata:[]};
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
        this.setState({ active: !currentState,showPopUp: items.index});
    }

    render(){
        const itemList = this.state.portfoliodata.map((items,i) => {
            return(<li key={i} onClick={this.clickHandle.bind(this,items)}>
                <img className="thumbnail" src={require("../images/".concat(items.thumb))} alt={items.text} />
                <div className={this.state.active === true && this.state.showPopUp === items.index  ? "popup active" : "popup"}>
                    <div className="popup-content">
                        <button onClick={this.clickHandle.bind(this,items)}>Close</button>
                        <img src={require("../images/".concat(items.image))} alt={items.text} width="800" height="600" />
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
