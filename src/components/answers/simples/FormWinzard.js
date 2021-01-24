import React from 'react';

export const FormWinzard = ({ pregunta, changeInitialStep, stateInitialStep } ) => {

    const handleChangeStep = () => {
        changeInitialStep( stateInitialStep + 1 );
    }
    

    return (
         <div className="panel-body">
            <div className="position-center">
                <h3>Pregunta</h3>
                { pregunta }
                <br/>
                <button 
                    className="btn btn-primary"  
                    onClick={ handleChangeStep } 
                >
                    Continuar
                </button>
            </div>
        </div>
    )
}
