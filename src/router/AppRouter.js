import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { startChecking } from '../actions/auth';
import { AccountScreen } from '../components/Accounts/AccountScreen';
import { User } from '../components/Accounts/User';
import { LoginScreen } from '../components/auth/LoginScreen';
import { Layout } from '../components/main/Layout';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRouter';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {
       
        dispatch( startChecking() );
       
    }, [dispatch]);

    if ( checking ) {
        return ( <h5>Espere ...</h5> );
    }

    return (
        <Router>
            <div >
                <Switch>
                        <PublicRoute 
                            exact 
                            path="/login" 
                            component={ LoginScreen } 
                            isAuthenticated={ !!uid }
                        />
            
                        <Layout>
                            <PrivateRoute 
                                exact 
                                path="/"      
                                component={ AccountScreen }
                                isAuthenticated={ !!uid }
                                />
                            <PrivateRoute 
                                exact 
                                path="/user"      
                                component={ User }
                                isAuthenticated={ !!uid }
                            />
                        </Layout>
                        <Redirect to="/login" /> 
                </Switch>
            </div>
        </Router>
    )
}
