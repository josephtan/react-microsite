import React from "react";

const classCycler = function (classSelector, cycleintervals, timer){
    let countlist = classSelector.childNodes,
        listlength = countlist.length,
        interval = cycleintervals,
        currentList = -1,
        itemList = countlist;
    window.setInterval(function () {
        if( itemList[currentList] !== undefined && itemList[currentList].classList.contains("motion")){
            itemList[currentList].classList.remove("motion");
        }
        currentList++;
        if(currentList === listlength) currentList = 0;
        itemList[currentList].classList.add("motion");
    },Math.floor(Math.random() * timer) + interval);
};

export {classCycler};