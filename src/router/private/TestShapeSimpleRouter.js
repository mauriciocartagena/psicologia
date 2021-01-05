import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Layout } from '../../components/main/Layout';
import { CategoryScreen } from '../../components/test/simple/category/CategoryScreen';
import { ShapeScreenRegister } from '../../components/test/simple/ShapeScreenRegister';
import { ShapeSimpleScreen } from '../../components/test/simple/ShapeSimpleScreen';
import { TestScreenSimple } from '../../components/test/simple/test/TestScreenSimple';

export const TestShapeSimpleRouter = () => {

    document.body.style.backgroundColor = "";

    return (
        <Layout>
            <Switch>
                <Route
                    exact
                    path="/test-shape-simple"
                    component={ ShapeSimpleScreen }
                />
                <Route
                    exact
                    path="/test-shape-simple/register"
                    component={ ShapeScreenRegister }
                />
                <Route
                    exact
                    path="/test-shape-simple/category"
                    component={ CategoryScreen }
                />
                 <Route
                    exact
                    path="/test-shape-simple/tsimple"
                    component={ TestScreenSimple }
                />
            </Switch>
        </Layout>
    )
}
