import React from 'react'
import Home from "./components/public/Home"
import Login from "./components/public/Login"
import Products from "./components/private/Products"
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

function App() {
    const user = useSelector(state => state.auth.user)
    return (
        <BrowserRouter>
            {/*everybody can see*/}
            <Route path='/home' render={(props) => <Home {...props} />}/>
            {user ?
                <Switch>
                     {/*just login can see*/}
                    <Route path='/products' render={(props) => <Products {...props} />}/>
                    <Route path='/' render={(props) => <Redirect to={'/products'} {...props} />}/>
                </Switch> :
                <Switch>
                     {/*not login can see*/}
                    <Route path='/login' render={(props) => <Login {...props} />}/>
                    <Route path='/' render={(props) => <Redirect to={'/login'} {...props} />}/>
                </Switch>
            }

            <Products/>
        </BrowserRouter>
    );
}

export default App;
