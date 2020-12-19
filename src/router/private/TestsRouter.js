import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from '../../components/main/Layout';
import { RegisterScreen } from '../../components/test/RegisterScreen';
import { Register } from '../../components/test/shapes/Register';
import { TestScreen } from '../../components/test/TestScreen';



export const TestsRouter = () => {

    document.body.style.backgroundColor = "";

    return (
        <Layout>
            <Switch>
                <Route
                    exact
                    path="/test"
                    component={ TestScreen }
                />
                <Route
                    exact
                    path="/test/register"
                    component={ RegisterScreen }
                />
                <Route
                    exact
                    path="/test/register/shapes"
                    component={ Register }
                />
                <Redirect to="/test" />
            </Switch>
        </Layout>
        
    )
}
