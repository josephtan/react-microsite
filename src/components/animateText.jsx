import React, {Component} from "react";
import Anime from "react-anime";
import {anime} from "animejs";


export default class animateText extends Component{
    constructor(props){
        super(props);
        this.title = "Front End Developer";
        this.title2 = "Front End Engineer";
        this.title3 = "Fullstack Developer";
        this.aniOpacity = [0,1];
        this.scaleX = [4,1];
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
        let fsd ={};
        fsd.scaleIn = [0,1];
        fsd.duration =[800];
        fsd.durationOut= [600];
        return(
            <div>
                <p className="fed has-text-centered">
                    <Anime loop={true} scaleX={this.scaleX} opacity={this.aniOpacity} easing={"easeOutExpo"} duration={950} direction="alternate" delay={(el, index) => index * 80} >
                        {this.spanLettering(this.title)}
                    </Anime>

                </p>
                <p className="fee has-text-centered">
                    <Anime loop={true} scaleX={this.scaleX} translateY={"2em"} opacity={this.aniOpacity} easing={"easeOutExpo"} direction="alternate" duration={1200} delay={(el, index) => index * 180} >
                        {this.spanLettering(this.title2)}
                    </Anime>
                </p>
                <p className="fsd has-text-centered">
                    <Anime loop={true} scale={fsd.scaleIn} elasticity={600} duration={fsd.duration} direction="alternate" delay={(el, index) => {return 45 * (index+ 1)}}>
                        {this.spanLettering(this.title3)}
                    </Anime>
                 </p>
            </div>
        )
    }
}