import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Layout } from '../../components/main/Layout';
import { TestShapeScreen } from '../../components/test/test-shape/TestShapeScreen';

export const TestShapeRouter = () => {

    document.body.style.backgroundColor = "";

    return (
        <Layout>
            <Switch>
                <Route
                    exact
                    path="/test-shape"
                    component={ TestShapeScreen }
                />
            </Switch>
        </Layout>
    );

}
