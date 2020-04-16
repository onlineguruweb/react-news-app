import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Business from './business'
import Entertainment from './entertainment';
import Health from './health';
import Science from './science';
import Sports from './sports';
import Technology from './technology';


export default class Navigation extends React.Component
{
    render(){
        return(
    <div>
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">News4You</a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/health">Health</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/science">Science</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/sports">Sports</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/business">Business</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/technology">Technology</a>
            </li>

            </ul>
            
        </div>
        </nav>
        <Route exact path="/" component={Entertainment}></Route>
        <Route exact path="/health" component={Health}></Route>
        <Route exact path="/science" component={Science}></Route>
        <Route exact path="/sports" component={Sports}></Route>
        <Route exact path="/business" component={Business}></Route>
        <Route exact path="/technology" component={Technology}></Route>
        </Router>
    </div>
        );
    }
}