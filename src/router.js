import react from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/index'
import About from './pages/About/index'
import NotFound from './pages/NotFound/index'
import SingIn from './pages/SingIn/index'
import SingUp from './pages/SingUp/index'

export default () =>{
    return(
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>

        <Route exact path="/teste">
            <About/>
        </Route>

        <Route exact path="/signin">
            <SingIn/>
        </Route>
        
        <Route exact path="/signup">
            <SingUp/>
        </Route>

        <Route>
            <NotFound/>
        </Route>
    </Switch>
    )
}