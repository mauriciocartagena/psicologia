import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { startChecking } from '../actions/auth';
import { AccountRouter } from './AccountRouter';
import { AuthRouter } from './AuthRouter';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRouter';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {
       
        dispatch( startChecking() );
       
    }, [dispatch]);

    if ( checking ) {
        return ( 
            <div className="loader-wrapper" style={{ display:"block" }} >
                <div  className="loader"/>
            </div>
        );
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute  
                        path="/auth" 
                        component={ AuthRouter } 
                        isAuthenticated={ !!uid }
                    />
        
                    <PrivateRoute 
                        path="/"      
                        component={ AccountRouter }
                        isAuthenticated={ !!uid }
                    />
                    <Redirect to="/auth/login" /> 
                </Switch>
            </div>
        </Router>
    )
}
