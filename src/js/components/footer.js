import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return(
            <footer className="footer block__relative text-white">
                <div className="container has-text-centered">
                    <p>Web activities and external links that I can be contacted:</p>
                    <ul className="no-liststyle list-inline white-link font-smaller external-links">
                        <li><a href="https://github.com/josephtan" rel="noreferrer" target="_blank"><span className="font-fa-brands fa-github"></span><span className="link-text">Github</span></a></li>
                        <li><a href="https://codepen.io/josephtan/" rel="noreferrer"  target="_blank"><span className="font-fa-brands fa-codepen"></span><span className="link-text">Codepen</span></a></li>
                        <li><a href="https://www.meetup.com/" rel="noreferrer" target="_blank"><span className="font-fa-brands fa-meetup"></span><span className="link-text">Meetup</span> </a></li>
                        <li><a href="https://www.slack.com/" rel="noreferrer" target="_blank"><span className="font-fa-brands fa-slack"></span><span className="link-text">Slack</span></a></li>
                        <li><a href="https://jsfiddle.net/user/JosephTan/fiddles/" rel="noreferrer" target="_blank"><span className="font-fa-brands fa-fiddle"></span><span className="link-text">jsFiddle</span></a></li>
                        <li><a href="https://www.linkedin.com/in/joetan83/" rel="noreferrer" target="_blank"><span className="font-fa-brands fa-linkedin"></span><span className="link-text">linkedIn</span></a></li>
                    </ul>
                </div>
                <div className="container">
                    <div className="has-text-centered">
                        <h4>Joseph Tan portfolio site build with Webpack 4.16, React 16.6.3, React Router 4.3, axios.js, d3.js &amp; react-anime.js</h4>
                    </div>
                </div>
            </footer>
        );
    }
}
