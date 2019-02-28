import React from "react";
import * as d3 from "d3";

const renderHex = function(polygonClassName, marginTop, marginLeft, radius, hexWidth, hexHeight,clipPathId){
    let margins = {top:marginTop, left:marginLeft};
    let _sq32 = (Math.sqrt(3) / 2), hexRad = radius, hexX = hexWidth , hexY = hexHeight;
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
    let polygonSelector = d3.selectAll(polygonClassName).append("svg");
    polygonSelector.attr("preserveAspectRatio","none");
    polygonSelector.append("defs")
        .append("clipPath")
        .attr("id",clipPathId)
        .append("path")
        .attr("class", "hex-path")
        .attr("d", drawHexagon(hexagonData))
        .attr("transform", "translate(" + [margins.left, margins.top] + ")");
};

export {renderHex};