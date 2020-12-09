import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { RegisterScreen } from '../../components/institution/RegisterScreen';
import { Layout } from '../../components/main/Layout';

export const InstitutionRouter = () => {

    document.body.style.backgroundColor = "";

    return (
        <Layout>
            <Switch>
                <Route 
                    exact
                    path="/institution"
                    component={ RegisterScreen }
                />
                <Redirect to="/institution" />
            </Switch>
        </Layout>
    )
}
