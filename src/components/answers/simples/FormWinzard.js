import React from 'react';

export const FormWinzard = ({ pregunta }) => {

    return (
         <div className="panel-body">
            <div className="position-center">
                <h3>Pregunta</h3>
                { pregunta }
            </div>
        </div>
    )
}
