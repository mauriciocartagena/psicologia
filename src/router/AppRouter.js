import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { startChecking } from '../actions/auth';
import { AccountRouter } from './private/AccountRouter';
import { AuthRouter } from './public/AuthRouter';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRouter';
import { InstitutionRouter } from './private/InstitutionRouter';
import { TestsRouter } from './private/TestsRouter';
import { TestShapeRouter } from './private/TestShapeRouter';


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

                    {/* 
                        Rutas privadas 
                    */}
                    
                    <PrivateRoute 
                        path="/user"      
                        component={ AccountRouter }
                        isAuthenticated={ !!uid }
                    />
                    <PrivateRoute 
                        path="/institution"      
                        component={ InstitutionRouter }
                        isAuthenticated={ !!uid }
                    />
                     <PrivateRoute 
                        path="/test"      
                        component={ TestsRouter }
                        isAuthenticated={ !!uid }
                    />
                    <PrivateRoute 
                        path="/test-shape"      
                        component={ TestShapeRouter }
                        isAuthenticated={ !!uid }
                    />
                    <Redirect to="/auth/login" /> 
                </Switch>
            </div>
        </Router>
    )
}
