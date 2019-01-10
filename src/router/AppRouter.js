import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Contact from '../components/Contact';
import About from '../components/About';
import Projects from '../components/Projects';
import Recources from '../components/Recources';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/recources" component={Recources} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;