import React from "react";

const spanLettering = function (string){
    let stringArray = string.split("");
    const letters = stringArray.map((text,i)=>{
        if(text.match(/\s+/g) != null){
            return (<span key={i} className="letter">&nbsp;</span>);
        }else{
            return (<span key={i} className="letter">{text}</span>);
        }

    });
    return letters;

};

export {spanLettering};