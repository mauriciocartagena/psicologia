import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from '../../components/main/Layout';
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
                <Redirect to="/test" />
            </Switch>
        </Layout>
        
    )
}
