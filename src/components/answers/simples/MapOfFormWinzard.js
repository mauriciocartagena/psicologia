import React from 'react';
import { Steps, Step } from "react-step-builder"
import { FormWinzard } from './FormWinzard';


export const MapOfFormWinzard = ({ dataAnswers = []}) => {

    const Navigation = ( props ) => {
        return (
          <div>
            <button onClick={ props.prev }>Global Previous</button>
            <button onClick={ props.next }>Global Next</button>
          </div>
        );
    };

    const config = {
        navigation: {
          component: Navigation,
          location: "before",
        }
    };
      
    
    return (
        <div>
            <Steps config={ config } >
                {
                     dataAnswers.map( ( e ) =>{
                         return (
                             <Step 
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
