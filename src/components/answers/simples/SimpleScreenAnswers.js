import React from 'react';
import StepZilla from 'react-stepzilla';
import { FirstPage } from './FirstPage';
import { SecondPage } from './SecondPage';

export const SimpleScreenAnswers = () => {

    const steps =
    [
      { name: 'Page 1', component: <FirstPage />},
      { name: 'Second 2', component: <SecondPage />},
    ];

    return (
        <div>
            <h1>Welcome SimpleScreenAnswers</h1>
            <div className='step-progress'>
                <StepZilla steps={ steps }/>
            </div>
        </div>
    )
}
