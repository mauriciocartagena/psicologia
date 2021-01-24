import React, { useState } from 'react';
import StepWizard from 'react-step-wizard';
import { FirstPage } from './FirstPage';
import { FormWinzard } from './FormWinzard';
import { SecondPage } from './SecondPage';


export const MapOfFormWinzard = ({ dataAnswers = []}) => {

    // const [ state, setState ] = useState({});
    
    return (
        <StepWizard >
            <FirstPage/>
            <SecondPage/>
            {/* {
                ( dataAnswers !== [] ) &&
                    dataAnswers.map( ( e ) =>{
                        return (
                            <FormWinzard 
                                pregunta={ e.pregunta } 
                                changeInitialStep={ setState } 
                                stateInitialStep={ state } 
                            />
                        )
                    })
            } */}
        </StepWizard>
    )
}
