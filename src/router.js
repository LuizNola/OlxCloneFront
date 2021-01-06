import react from 'react';
import { Switch } from 'react-router-dom'

import RouterHandler  from './components/RouterHandler'

import Home from './pages/Home/index'
import About from './pages/About/index'
import NotFound from './pages/NotFound/index'
import SingIn from './pages/SingIn/index'
import SingUp from './pages/SingUp/index'
import AdPage from './pages/AdPage/index'

export default () =>{
    return(
    <Switch>
        <RouterHandler exact path="/">
            <Home/>
        </RouterHandler>

        <RouterHandler exact path="/teste">
            <About/>
        </RouterHandler>

        <RouterHandler exact path="/signin">
            <SingIn/>
        </RouterHandler>
        
        <RouterHandler exact path="/signup">
            <SingUp/>
        </RouterHandler>

        <RouterHandler exact path="/ad/:id">
            <AdPage />
        </RouterHandler>

        
        <RouterHandler private exact path="/post-an-ad">
            <About />
        </RouterHandler>


        <RouterHandler>
            <NotFound/>
        </RouterHandler>
    </Switch>
    )
}