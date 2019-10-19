import React, { Component } from "react";
import ReactDOM from "react-dom";
import {RenderHex} from "./utils/renderHex";
import {classCycler} from "./utils/classCycler";

export default class DrawPolygon extends Component {
    constructor(props){
     super(props);
     this.polygonSelector = ".draw-hex";
     this.marginTop = -12;
     this.marginLeft = -14;
     this.hexWidth = 66;
     this.hexHeight = 66;
     this.hexRadius =  52;
     this.clipPathId = "maskPath";
     this.maskSelector1 = ".masked-div-1";
     this.maskSelector2 = ".masked-div-2";
     this.maskSelector3 = ".masked-div-3";
     this.maskmarginTop = -12;
     this.maskmarginLeft = -14;
     this.maskhexWidth = 64;
     this.maskhexHeight = 64;
     this.maskhexRadius =  50;
     this.maskclipPathId1 ="hexMask1";
     this.maskclipPathId2 ="hexMask2";
     this.maskclipPathId3 ="hexMask3";
     this.cycleinterval = 2000;
     this.classTimer = 3000;
    }
    componentDidMount(){
        let classCyclerSelector = ReactDOM.findDOMNode(this.refs.logoList);
        let classCyclerSelector2 = ReactDOM.findDOMNode(this.refs.logoList2);
        let classCyclerSelector3 = ReactDOM.findDOMNode(this.refs.logoList3);
        RenderHex(this.maskSelector1,this.maskmarginTop, this.maskmarginLeft, this.maskhexRadius, this.maskhexWidth, this.maskhexHeight,"hex-path",this.maskclipPathId1," ");
        RenderHex(this.maskSelector2,this.maskmarginTop, this.maskmarginLeft, this.maskhexRadius, this.maskhexWidth, this.maskhexHeight,"hex-path",this.maskclipPathId2," ");
        RenderHex(this.maskSelector3,this.maskmarginTop, this.maskmarginLeft, this.maskhexRadius, this.maskhexWidth, this.maskhexHeight,"hex-path",this.maskclipPathId3," ");
        classCycler(classCyclerSelector, this.cycleinterval, this.classTimer);
        classCycler(classCyclerSelector2, this.cycleinterval, this.classTimer);
        classCycler(classCyclerSelector3, this.cycleinterval, this.classTimer);

    }
    render(){
        return(
            <div>
            <div className="block__relative home-skillsets">
                <div className="draw-hex">
                    <div className="masked-div-1">
                        <ul className="logo-list no-liststyle" ref="logoList">
                            <li><span className="font-fa-brands fa-git"></span></li>
                            <li><span className="font-fa-brands fa-npm"></span></li>
                            <li><span className="font-fa-brands fa-aws"></span></li>
                            <li><span className="font-fa-brands fa-paypal"></span></li>
                            <li><span className="font-fa-brands fa-php"></span></li>
                        </ul>
                    </div>
                </div>
                <div className="draw-hex">
                    <div className="masked-div-2">
                        <ul className="logo-list no-liststyle" ref="logoList2">
                            <li><span className="font-fa-brands fa-html5"></span></li>
                            <li><span className="font-fa-brands fa-css3"></span></li>
                            <li><span className="font-fa-brands fa-sass"></span></li>
                        </ul>
                    </div>
                </div>
                <div className="draw-hex">
                    <div className="masked-div-3">
                        <ul className="logo-list no-liststyle" ref="logoList3">
                            <li><span className="font-fa-brands fa-js"></span></li>
                            <li><span className="font-fa-brands fa-node"></span></li>
                            <li><span className="font-fa-brands fa-vue"></span></li>
                            <li><span className="font-fa-brands fa-react"></span></li>
                            <li><span className="font-fa-brands fa-grunt"></span></li>
                            <li><span className="font-fa-brands fa-gulp"></span></li>
                            <li><span className="font-fa-brands fa-angular"></span></li>
                        </ul>
                    </div>
                </div>
            </div>
                <p className="has-text-centered">Technologies I have had hands on experience are animated above.</p>
            </div>
        );
    }
}