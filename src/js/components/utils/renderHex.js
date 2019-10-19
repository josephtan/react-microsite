import React from "react";
import * as d3 from "d3";

const RenderHex = function(polygonClassName, marginTop, marginLeft, radius, hexWidth, hexHeight,hexPathClass,clipPathId, bgImage,imageW,imageH){
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
    if(clipPathId === " ") {
        polygonSelector.attr("preserveAspectRatio", "none")
            .append("path")
            .attr("d", drawHexagon(hexagonData))
            .attr("transform", "translate(" + [margins.left, margins.top] + ")");
    }
    if(clipPathId !== null && clipPathId !==" " && bgImage ===" "){
        polygonSelector.attr("preserveAspectRatio", "none")
            .append("defs")
            .append("clipPath")
            .attr("id", clipPathId)
            .append("path")
            .attr("class", hexPathClass)
            .attr("d", drawHexagon(hexagonData))
            .attr("transform", "translate(" + [margins.left, margins.top] + ")");
    }

    if(clipPathId !== null && clipPathId !==" " && bgImage !== " "){
        polygonSelector
            .attr("xmlns","http://www.w3.org/2000/svg")
            .attr("version","1.1");
        polygonSelector.append("image")
            .attr("xlink:href",bgImage)
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", imageW)
            .attr("height", imageH);
        polygonSelector.append("path")
            .attr("class", hexPathClass)
            .attr("d", drawHexagon(hexagonData))
            .attr("x", 0)
            .attr("y", 0)
            .attr("fill","url("+clipPathId+")");
    }
};

export {RenderHex};