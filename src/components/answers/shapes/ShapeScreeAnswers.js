import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useFetchTestShape } from '../../../hooks/Answers/Shape/useFetchTestShape';
import { useForm } from '../../../hooks/useForm';

export const ShapeScreeAnswers = () => {

    const history = useHistory();

    const [ state, setState ] = useState([]);


    const { dataShape } = useFetchTestShape();

    const [ selectionDefault, setSelectionDefault ] = useState('');

    const [ formSelectionInputValues, handleSelectionInputValueChange ] = useForm({
        tShape: selectionDefault
    });

    const { tShape } = formSelectionInputValues;


    const handleSubmitForm = (e) => {
        e.preventDefault();
        if ( tShape === '' ) {
            return (
                console.log(selectionDefault)
            )
        }
        return (
            console.log(tShape)
        )

    }

   useEffect(() => {
    
        if ( dataShape !== [] ) {
            if ( dataShape[0] !== undefined ) {   
                
                const DEFAULTVALUE = dataShape[0].id_test;
                setSelectionDefault( DEFAULTVALUE );

            }
        }
        setState( dataShape );

   }, [ dataShape ]);


    return (
        <div className="row">
            <div className="col-sm-12  animated fadeIn">
                <section className="panel">
                    <header className="panel-heading">
                        SELECCIÓN DE LA PRUEBA DE FORMA
                    </header>
                    <div className="panel-body">
                        <div className="position-center">
                            <form 
                                onSubmit={ handleSubmitForm } 
                            >
                                <div className="form-group">
                                    <label>Prueba forma</label>
                                    <select 
                                        formcontrolname="test-simple" 
                                        name="tShape"
                                        value={ tShape }
                                        onChange={ handleSelectionInputValueChange }   
                                        className="form-control ng-valid ng-dirty ng-touched"
                                        >
                                        {
                                            state.map(( e )=>(
                                                <option 
                                                    key={ e.id_test } 
                                                    value={ e.id_test } 
                                                >{ e.nombre }</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <button className="btn btn-primary btn-round btn-block">Continuar</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
