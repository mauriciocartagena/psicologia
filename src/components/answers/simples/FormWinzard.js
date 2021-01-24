import React from 'react';

export const FormWinzard = ( props ) => {    

    return (
         <div className="panel-body">
            <div className="position-center">
                <h3>Pregunta</h3>
                {
                    props.data
                }
                <br/>
                <p>
                <button disabled={props.isFirst()} onClick={props.prev}>
                    Previous
                </button>
                <button disabled={props.isLast()} onClick={props.next}>
                    Next
                </button>
            </p>
            </div>
        </div>
    )
}
