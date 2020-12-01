import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AccountScreen } from '../components/Accounts/AccountScreen';
import { UserScreen } from '../components/Accounts/UserScreen';
import { Layout } from '../components/main/Layout';



export const AccountRouter = () => {
    return (
        <Layout>
            <Switch>
                <Route
                    exact
                    path="/user"
                    component={ AccountScreen }
                />
                <Route
                    exact
                    path="/user/setting"
                    component={ UserScreen }
                />
                <Redirect to="/user" />
            </Switch>
        </Layout>
        
    )
}
