import React from 'react';
import '../styles/simples/FormWinzard.css'

export const FormWinzard = ( props ) => {  

    return (
         <div className="panel-body">
            <div className="position-center" style={{ textAlign:"center" }}>
                <h3>Pregunta</h3>
                {
                    props.data
                }
                <br/>
                <br/>
           
                <div className="row" style={{ paddingTop:"10px" }} >
                    <div className="switch-toggle switch-3 switch-candy">
                        <input id="yes" name="state-d" type="radio" />
                            <label htmlFor="yes" >Si</label>
                        
                        <input id="no-know" name="state-d" type="radio" defaultChecked/>
                            <label htmlFor="no-know" >No se</label>

                        <input id="no" name="state-d" type="radio" />
                            <label htmlFor="no" >No</label>
                        <a></a>
                    </div>
                    <br/>
                    <br/>
                    <div className="col-sm-6" style={{ paddingBottom:"10px", textAlign:"center" }} >
                        <button className="btn btn-primary" disabled={props.isFirst()} onClick={props.prev}>
                            Anterior
                        </button> 
                    </div>
                    <div className="col-sm-6" style={{ textAlign:"center" }} >
                        <button className="btn btn-success" disabled={props.isLast()} onClick={props.next}>
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
