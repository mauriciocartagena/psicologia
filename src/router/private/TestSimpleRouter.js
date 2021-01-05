import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Layout } from '../../components/main/Layout';
import { CategoryScreen } from '../../components/test/simple/category/CategoryScreen';
import { SimpleScreen } from '../../components/test/simple/SimpleScreen';
import { SimpleScreenRegister } from '../../components/test/simple/SimpleScreenRegister';
import { TestScreenSimple } from '../../components/test/simple/test/TestScreenSimple';

export const TestSimpleRouter = () => {

    document.body.style.backgroundColor = "";

    return (
        <Layout>
            <Switch>
                <Route
                    exact
                    path="/test-simple"
                    component={ SimpleScreen }
                />
                <Route
                    exact
                    path="/test-simple/register"
                    component={ SimpleScreenRegister }
                />
                <Route
                    exact
                    path="/test-simple/category"
                    component={ CategoryScreen }
                />
                 <Route
                    exact
                    path="/test-simple/tsimple"
                    component={ TestScreenSimple }
                />
            </Switch>
        </Layout>
    )
}
