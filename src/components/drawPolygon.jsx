import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

export default class DrawPolygon extends Component {
    constructor(props){
     super(props);
     this.polygonSelector = ".draw-hex";
     this.marginTop = -12;
     this.marginLeft = -14;
     this.hexWidth = 66;
     this.hexHeight = 66;
     this.hexRadius =  52;
     this.maskSelector = ".masked-div";
     this.maskmarginTop = -12;
     this.maskmarginLeft = -14;
     this.maskhexWidth = 64;
     this.maskhexHeight = 64;
     this.maskhexRadius =  50;
     this.cycleinterval = 2000;
     this.cycleinterval2 = 2000;
     this.cycleinterval3 = 2000;
    }
    componentDidMount(){
        let classCyclerSelector = ReactDOM.findDOMNode(this.refs.logoList);
        let classCyclerSelector2 = ReactDOM.findDOMNode(this.refs.logoList2);
        let classCyclerSelector3 = ReactDOM.findDOMNode(this.refs.logoList3);
        this.renderHex(this.polygonSelector);
        this.renderHexMask(this.maskSelector);
        this.classCycler(classCyclerSelector, this.cycleinterval);
        this.classCycler(classCyclerSelector2, this.cycleinterval2);
        this.classCycler(classCyclerSelector3, this.cycleinterval3);

    }
    classCycler(classSelector, cycleintervals){
        let countlist = classSelector.childNodes,
            listlength = countlist.length,
            interval = cycleintervals,
            currentList = -1,
            itemList = countlist;
            window.setInterval(function () {
           if( itemList[currentList] != undefined && itemList[currentList].classList.contains("motion")){
               itemList[currentList].classList.remove("motion");
           }
            currentList++;
            if(currentList == listlength) currentList = 0;
            itemList[currentList].classList.add("motion");
        },Math.floor(Math.random() * 3000) + interval);
    }
    renderHex(polygon){
        let margins = {top:this.marginTop, left:this.marginLeft};
        let _sq32 = (Math.sqrt(3) / 2), hexRad = this.hexRadius, hexX = this.hexWidth , hexY = this.hexHeight;
        const drawHexagon =  d3.line()
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; })
            .curve(d3.curveCardinalClosed.tension(1));
        const hexagonData = [
            { "x": hexRad + hexX,"y": hexY},
            { "x": hexRad / 2 + hexX,"y": hexRad * _sq32 + hexY},
            { "x": -hexRad / 2 + hexX,"y": hexRad * _sq32 + hexY},
            { "x": -hexRad + hexX,"y": hexY},
            { "x": -hexRad / 2 + hexX,"y": -hexRad * _sq32 + hexY},
            { "x": hexRad / 2 + hexX,"y": -hexRad * _sq32 + hexY}];
        let polygonSelector = d3.selectAll(polygon).append("svg");
             polygonSelector.attr("preserveAspectRatio","none");
             polygonSelector.append("defs")
            .append("clipPath")
            .attr("id","maskPath")
            .append("path")
            .attr("class", "hex-path")
            .attr("d", drawHexagon(hexagonData))
            .attr("transform", "translate(" + [margins.left, margins.top] + ")");
    }
    renderHexMask(mask){
        let margins = {top:this.maskmarginTop, left:this.maskmarginLeft};
        let _sq32 = (Math.sqrt(3) / 2), hexRad = this.maskhexRadius, hexX = this.maskhexWidth , hexY = this.maskhexHeight;
        const drawHexagon =  d3.line()
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; })
            .curve(d3.curveCardinalClosed.tension(1));
        const hexagonData = [
            { "x": hexRad + hexX,"y": hexY},
            { "x": hexRad / 2 + hexX,"y": hexRad * _sq32 + hexY},
            { "x": -hexRad / 2 + hexX,"y": hexRad * _sq32 + hexY},
            { "x": -hexRad + hexX,"y": hexY},
            { "x": -hexRad / 2 + hexX,"y": -hexRad * _sq32 + hexY},
            { "x": hexRad / 2 + hexX,"y": -hexRad * _sq32 + hexY}];
        let maskSelector = d3.selectAll(mask).append("svg");
        maskSelector.attr("preserveAspectRatio","none");
        maskSelector.append("defs")
            .append("clipPath")
            .attr("id","hexMask")
            .append("path")
            .attr("class", "hex-path")
            .attr("d", drawHexagon(hexagonData))
            .attr("transform", "translate(" + [margins.left, margins.top] + ")");
    }
    render(){
        return(
            <div>
            <div className="block__relative home-skillsets">
                <div className="draw-hex">
                    <div className="masked-div">
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
                    <div className="masked-div">
                        <ul className="logo-list no-liststyle" ref="logoList2">
                            <li><span className="font-fa-brands fa-html5"></span></li>
                            <li><span className="font-fa-brands fa-css3"></span></li>
                            <li><span className="font-fa-brands fa-sass"></span></li>
                        </ul>
                    </div>
                </div>
                <div className="draw-hex">
                    <div className="masked-div">
                        <ul className="logo-list no-liststyle" ref="logoList3">
                            <li><span className="font-fa-brands fa-js"></span></li>
                            <li><span className="font-fa-brands fa-node"></span></li>
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