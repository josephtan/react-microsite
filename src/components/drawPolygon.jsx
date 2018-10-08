import React, { Component } from "react";
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
    }
    componentDidMount(){
        this.renderHex(this.polygonSelector);
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
        let strokeW = 2, fill = "transparent";
        let polygonSelector = d3.selectAll(polygon).append("svg");
             polygonSelector.attr("preserveAspectRatio","none");
             polygonSelector.append("clipPath")
            .attr("id","maskPath")
            .append("path")
            .attr("class", "hex-path")
            .attr("d", drawHexagon(hexagonData))
            .attr("transform", "translate(" + [margins.left, margins.top] + ")")
            .attr("fill", fill)
            .attr("stroke-width", strokeW);
    }
    render(){
        return(
            <div className="block__relative home-skillsets">
                <div className="draw-hex">
                    <div className="masked-div">
                        <span className="font-fa fa-github"></span>
                    </div>
                </div>
                <div className="draw-hex">
                    <div className="masked-div">
                    <span className="font-fa fa-github"></span>
                    </div>
                </div>
                <div className="draw-hex">
                    <div className="masked-div">
                        <span className="font-fa fa-github"></span>
                    </div>
                </div>
            </div>
        );
    }
}