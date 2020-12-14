import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { InstitutionScreen } from '../../components/institution/InstitutionScreen';
import { RegisterScreen } from '../../components/institution/RegisterScreen';
import { UpdateScreen } from '../../components/institution/UpdateScreen';
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
                <Route
                    exact
                    path="/institution/view"
                    component={ InstitutionScreen }
                />
                <Route
                    exact
                    path="/institution/update"
                    component={ UpdateScreen }
                />
                <Redirect to="/institution" />
            </Switch>
        </Layout>
    )
}
