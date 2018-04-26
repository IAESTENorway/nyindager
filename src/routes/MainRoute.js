import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from "../containers/Main"
import Event from "../containers/Event"
import Register from "../containers/Register";

const MainRoute = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/register' component={Register}/>
            <Route path='/:event' component={Event}/>
        </Switch>
    </main>
);

export default MainRoute