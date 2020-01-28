import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from './Header'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

const App = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <Switch>
                <Route exact path='/' component={Projects}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/projects' component={Projects}></Route>
                <Route exact path='/contact' component={Contact}></Route>
            </Switch>
        </div >
    )    
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById("app"));