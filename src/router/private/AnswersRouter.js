import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { ShapeScreeAnswers } from '../../components/answers/shapes/ShapeScreeAnswers';
import { SimpleScreenAnswers } from '../../components/answers/simples/SimpleScreenAnswers';
import { AnswersScreen } from '../../components/answers/AnswersScreen';
import { Layout } from '../../components/main/Layout';
import { SelectionTestScreen } from '../../components/answers/simples/SelectionTestScreen';

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
                <Route 
                    exact
                    path="/answers/selection"
                    component={ SelectionTestScreen }
                />
                <Redirect to="/answers" />
            </Switch>
        </Layout>
        
    )
}
