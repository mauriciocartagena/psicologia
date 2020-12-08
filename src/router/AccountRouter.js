import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AccountScreen } from '../components/Accounts/AccountScreen';
import { ChangePasswordScreen } from '../components/Accounts/ChangePasswordScreen';
import { UserScreen } from '../components/Accounts/UserScreen';
import { Layout } from '../components/main/Layout';



export const AccountRouter = () => {

    document.body.style.backgroundColor = "";

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
                <Route
                    exact
                    path="/user/settingp"
                    component={ ChangePasswordScreen }
                />
                <Redirect to="/user" />
            </Switch>
        </Layout>
        
    )
}
