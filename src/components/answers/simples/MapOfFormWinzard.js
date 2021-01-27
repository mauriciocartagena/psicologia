import React from 'react';
import { Steps, Step } from "react-step-builder"
import { FormWinzard } from './FormWinzard';


export const MapOfFormWinzard = ({ dataAnswers = []}) => {

    const config = {
        navigation: {
          location: "before",
        }
    };
      
    
    return (
        <div>
            <Steps config={ config } >
                {
                     dataAnswers.map( ( e, key ) =>{
                         return (
                             <Step 
                                key={ key }
                                component={ FormWinzard }
                                data={ e.pregunta } 
                             />
                         )
                     })
                }
            </Steps>
        </div>
    )
}
