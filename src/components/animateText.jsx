import React, {Component} from "react";
import Anime from "react-anime";
import {anime} from "animejs";


export default class animateText extends Component{
    constructor(props){
        super(props);
        this.title = "Front End Developer";
        this.title2 ="Front End Engineer";
        this.title3 = "Fullstack Developer"
    }
    componentDidUpdate(){
        this.spanLettering();
    }
    spanLettering(string){
        let stringArray = string.split("");
        const letters = stringArray.map((text,i)=>{
            return (<span key={i} className="letter">{text}</span>);
        });
        return letters;

    }
    render(){
        return(
            <div>
                <p className="fed has-text-centered">
                    <Anime loop={true} scale={[4,1]} opacity={[0,1]} easing={"easeOutExpo"} duration={950} direction="alternate" delay={(el, index) => index * 100}>
                        {this.spanLettering(this.title)}
                    </Anime>

                </p>
            </div>
        )
    }
}