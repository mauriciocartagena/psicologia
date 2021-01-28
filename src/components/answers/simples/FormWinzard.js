import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answersfilter, answersfilterActive } from '../../../actions/answersSimple';
import '../styles/simples/FormWinzard.css'

export const FormWinzard = ( props ) => {  

    const dispatch = useDispatch();
    const { answers } = useSelector( state => state.answerSimple );

    const array = new Array( props.length );

    const arrayLength = () => {
        
        let elements = [ props.current ];

        for ( let index = 0; index < array.length; index++ ) {
            
            elements[ index ] = { id: null, answers: '' };
        }

        return elements
    
    }

    const handleClick = ( e ) => {
        
        if ( answers === null ) {

            return (
                dispatch(  answersfilter( arrayLength() ) ),
                dispatch( answersfilterActive( { id: props.id, answers: e.target.id }, props.current - 1 ) )
            )
        }

        return (
            dispatch( answersfilterActive( { id: props.id, answers: e.target.id }, props.current - 1 ) )
        )


    }

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
                        <input id="yes" name="state-d" type="radio" 
                            onClick={ handleClick }
                            />
                            <label htmlFor="yes" >Si</label>
                        
                        <input id="no-know" name="state-d" type="radio" 
                            onClick={ handleClick } 
                            defaultChecked/>
                            <label htmlFor="no-know" >No se</label>

                        <input id="no" name="state-d" type="radio" 
                            onClick={ handleClick } 
                            />
                            <label htmlFor="no" >No</label>
                        <a href="/"> </a> 
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
