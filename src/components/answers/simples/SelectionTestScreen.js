import React, { useEffect, useState } from 'react'
import { useFetchTestSimple } from '../../../hooks/QuestionSimple/useFetchTestSimple';
import { useForm } from '../../../hooks/useForm';

export const SelectionTestScreen = () => {

    const [ state, setState ] = useState([]);

    const { questionsSimple } = useFetchTestSimple();

    const [ selectionDefault, setSelectionDefault ] = useState('');

    const [ formSelectionInputValues, handleSelectionInputValueChange ] = useForm({
        tSimple: selectionDefault
    });

    const  { tSimple } = formSelectionInputValues;

    const handleSubmitForm = ( e ) => {
        e.preventDefault();
        if ( tSimple === '' ) {
            console.log( selectionDefault );
        }
    }

    useEffect(() => {
        
        if ( questionsSimple !== [] ) {
            if ( questionsSimple[0] !== undefined ) {   
                
                const DEFAULTVALUE = questionsSimple[0].id_test;
                setSelectionDefault( DEFAULTVALUE );

            }
        }
        
        setState( questionsSimple );
        
    }, [ questionsSimple ]);

    return (
        <div className="row">
            <div className="col-sm-12  animated fadeIn">
                <section className="panel">
                    <header className="panel-heading">
                        SELECCIÓN DE LA PRUEBA SIMPLE
                    </header>
                    <div className="panel-body">
                        <div className="position-center">
                            <form onSubmit={ handleSubmitForm } >
                                <div className="form-group">
                                    <label>Prueba Simple</label>
                                    <select 
                                        formcontrolname="test-simple" 
                                        name="tSimple"
                                        value={ tSimple }
                                        onChange={ handleSelectionInputValueChange }   
                                        className="form-control ng-valid ng-dirty ng-touched"
                                        >
                                        {
                                            state.map(( e )=>(
                                                <option 
                                                    key={ e.id_test } 
                                                    value={ e.id_test } 
                                                >{ e.nombre_test }</option>
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
