import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { simpleEdit } from '../../../actions/questionSimple';
import { useFetchCategory } from '../../../hooks/QuestionSimple/useFetchCategory';
import { useFetchTestSimple } from '../../../hooks/QuestionSimple/useFetchTestSimple';
import { useForm } from '../../../hooks/useForm';

export const FormUpdatedQuestion = ( { id_pregunta = '', pregunta = '', id_categoria = '', id_test = ''  } ) => {

    const dispatch = useDispatch();

    const { questionsSimple } = useFetchTestSimple();
    const { data } = useFetchCategory();

    const [ state, setState ] = useState([]);
    const [ categoryData, setCategoryData ] = useState([]);
    const [ testName, setTestName ] = useState([]);
    const [ nameCategory, setNameCategory ] = useState([]);

    const [ formQuestionSimpleInputValues, handleQuestionSimpleInputValueChange ] = useForm({
        question: pregunta,
        tSimple: id_test,
        category: id_categoria
    });

    const  { question, tSimple, category } = formQuestionSimpleInputValues;

    const handleModified = ( e ) =>{
        e.preventDefault();
        if ( question !== '' && tSimple !== '' && category !== '' && question.trim().length !== 0 ) {
            dispatch( simpleEdit( id_pregunta, question, category, tSimple ) );
        }
        Swal.fire(':(','Todos los campos son necesarios verificar nuevamente', 'error');
    }

    useEffect(() => {
        
        setState( questionsSimple );
        setCategoryData( data );
        
        return(()=>{
            setState([]);
            setCategoryData([]);    
        })
        
    }, [ questionsSimple, data ]);

    
    useEffect(() => {
        
        setNameCategory( data.find( e => e.id_categoria.toString() === category ) );
        setTestName( questionsSimple.find( e => e.id_test.toString() === tSimple ) );

        return(()=>{
            setNameCategory([]);
            setTestName([]);
        })

    }, [ category, tSimple, data, questionsSimple ]);

    return (
        <div className="row">
            <div className="col-sm-12  animated fadeIn">
                <section className="panel">
                    <header className="panel-heading">
                        MODIFICAR PRUEBA SIMPLE
                    </header>
                
                        <div className="panel-body">
                            <div className="position-center">
                                <form onSubmit={ handleModified }>
                                <div className="form-group">
                                    <label>Pregunta</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="InputQuestion" 
                                        name="question"
                                        onChange={ handleQuestionSimpleInputValueChange } 
                                        value={ question }
                                        placeholder="Ingrese la pregunta" />
                                </div>
                                <div className="form-group">
                                    <label>Prueba Simple</label>
                                    <p>Prueba seleccionada : `{ ( testName !== undefined || '' ? testName.nombre_test : '') }`</p>
                                    <select 
                                        formcontrolname="test-simple" 
                                        name="tSimple"
                                        onChange={ handleQuestionSimpleInputValueChange } 
                                        className="form-control ng-valid ng-dirty ng-touched"
                                        value={ tSimple  }
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
                                <div className="form-group">
                                    <label>Categoria</label>
                                    <p>Categoria seleccionada : `{ ( nameCategory !== undefined || '' ? nameCategory.nombre_categoria : '') }`</p>
                                    <select 
                                        formcontrolname="curso" 
                                        name="category"
                                        onChange={ handleQuestionSimpleInputValueChange } 
                                        className="form-control ng-valid ng-dirty ng-touched"
                                        value={ category  }
                                        >
                                        {
                                            categoryData.map(( e )=>(
                                                <option 
                                                    key={ e.id_categoria } 
                                                    value={ e.id_categoria } 
                                                >{ e.nombre_categoria }</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <p className="help-block">Todos los campos son requeridos.</p>
                                <button type="submit" className="btn btn-success">Modificar</button>
                            </form>
                            </div>

                        </div>
                </section>
            </div>
        </div>
    )
}