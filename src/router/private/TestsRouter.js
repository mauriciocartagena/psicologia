import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from '../../components/main/Layout';
import { RegisterScreen } from '../../components/test/RegisterScreen';
import { Register } from '../../components/test/shapes/Register';
import { ShapeScreen } from '../../components/test/shapes/ShapeScreen';
import { UpdatedScreen } from '../../components/test/shapes/UpdatedScreen';

export const TestsRouter = () => {

    document.body.style.backgroundColor = "";

    return (
        <Layout>
            <Switch>
                <Route
                    exact
                    path="/test/register"
                    component={RegisterScreen}
                />
                <Route
                    exact
                    path="/test/register/shapes"
                    component={Register}
                />
                <Route
                    exact
                    path="/test/register/shapes/screen"
                    component={ShapeScreen}
                />
                <Route
                    exact
                    path="/test/register/updated/shapes"
                    component={UpdatedScreen}
                />
                <Redirect to="/test/register" />
            </Switch>
        </Layout>

    )
}
