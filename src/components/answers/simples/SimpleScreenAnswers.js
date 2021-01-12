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
        <div className="col-lg-12 animated fadeIn">
            <section className="panel">
                <header className="panel-heading">
                    PRUEBAS
                </header>
                <div className='step-progress'>
                    <StepZilla steps={ steps }/>
                </div>
            </section>
        </div>
    )
}
