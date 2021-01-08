import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { ShapeScreeAnswers } from '../../components/answers/shapes/ShapeScreeAnswers';
import { SimpleScreenAnswers } from '../../components/answers/simples/SimpleScreenAnswers';
import { AnswersScreen } from '../../components/answers/AnswersScreen';
import { Layout } from '../../components/main/Layout';

export const AnswersRouter = () => {
    return (
        <Layout>
            <Switch>
                <Route
                    exact
                    path="/answers"
                    component={ AnswersScreen }
                />
                <Route
                    exact
                    path="/answers/shape"
                    component={ ShapeScreeAnswers }
                />
                <Route
                    exact
                    path="/answers/simple"
                    component={ SimpleScreenAnswers }
                />
                <Redirect to="/answers" />
            </Switch>
        </Layout>
        
    )
}
