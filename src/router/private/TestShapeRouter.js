import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { ShapeScreenQuestion } from '../../components/answers/shapes/ShapeScreenQuestion';
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
                    component={TestShapeScreen}
                />
                <Route
                    exact
                    path="/test-shape/questions"
                    component={ShapeScreenQuestion}
                />
                <Redirect to="/test-shape" />
            </Switch>
        </Layout >
    );

}
