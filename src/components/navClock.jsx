import React, {Component} from "react";

export default class NavClock extends Component{
    constructor(props){
     super(props);
     this.state = {date : new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval( () => this.ticks(), 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    ticks() {
        this.setState({
            date: new Date()
        });
    }
    render(){
        return(<div className="nav-clock has-text-centered">{this.state.date.toLocaleTimeString()}</div>);
    }

}