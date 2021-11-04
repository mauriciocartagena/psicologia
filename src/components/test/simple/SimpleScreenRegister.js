import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { simpleRegister } from '../../../actions/questionSimple';
import { useFetchCategory } from '../../../hooks/QuestionSimple/useFetchCategory';
import { useFetchTestSimple } from '../../../hooks/QuestionSimple/useFetchTestSimple';
import { useForm } from '../../../hooks/useForm';

export const SimpleScreenRegister = () => {

    const dispatch = useDispatch();

    const { questionsSimple } = useFetchTestSimple();

    const { data } = useFetchCategory();

    const [state, setState] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [testName, setTestName] = useState([]);
    const [nameCategory, setNameCategory] = useState([]);

    const [formQuestionSimpleInputValues, handleQuestionSimpleInputValueChange] = useForm({
        question: '',
        tSimple: '',
        category: ''
    });

    const { question, tSimple, category } = formQuestionSimpleInputValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (question !== '' && tSimple !== '' && category !== '') {
            dispatch(simpleRegister(question, tSimple, category));
        }
        Swal.fire(':(', 'Todos los campos son necesarios verificar nuevamente', 'error');
    }

    useEffect(() => {

        setState(questionsSimple);
        setCategoryData(data);

    }, [questionsSimple, data]);


    useEffect(() => {

        setNameCategory(data.find(e => e.id_categoria.toString() === category));
        setTestName(questionsSimple.find(e => e.id_test.toString() === tSimple));

    }, [category, tSimple, data, questionsSimple]);

    return (
        <div className="row">
            <div className="col-sm-12  animated fadeIn">
                <section className="panel">
                    <header className="panel-heading">
                        REGISTRO DE PRUEBAS SIMPLES
                    </header>

                    <div className="panel-body">
                        <div className="position-center">

                            {


                                questionsSimple.length !== 0 ?



                                    <form onSubmit={handleRegister}>
                                        <div className="form-group">
                                            <label>Pregunta</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="InputQuestion"
                                                name="question"
                                                onChange={handleQuestionSimpleInputValueChange}
                                                value={question}
                                                placeholder="Ingrese la pregunta" />
                                        </div>

                                        <div className="form-group">
                                            <label>Prueba Simple</label>
                                            <p>Prueba seleccionada : `{(testName !== undefined || '' ? testName.nombre_test : '')}`</p>

                                            <select
                                                formcontrolname="test-simple"
                                                name="tSimple"
                                                onChange={handleQuestionSimpleInputValueChange}
                                                className="form-control ng-valid ng-dirty ng-touched"
                                                value={tSimple}
                                            >
                                                {

                                                    state.map((e) => (
                                                        <option
                                                            key={e.id_test}
                                                            value={e.id_test}
                                                        >
                                                            {
                                                                e.nombre_test
                                                            }
                                                        </option>
                                                    ))
                                                }
                                            </select>

                                        </div>
                                        <div className="form-group">
                                            <label>Categoria</label>
                                            <p>Categoria seleccionada : `{(nameCategory !== undefined || '' ? nameCategory.nombre_categoria : '')}`</p>
                                            <select
                                                formcontrolname="curso"
                                                name="category"
                                                onChange={handleQuestionSimpleInputValueChange}
                                                className="form-control ng-valid ng-dirty ng-touched"
                                                value={category}
                                            >
                                                {
                                                    categoryData.map((e) => (
                                                        <option
                                                            key={e.id_categoria}
                                                            value={e.id_categoria}
                                                        >{e.nombre_categoria}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <p className="help-block">Todos los campos son requeridos.</p>
                                        <button type="submit" className="btn btn-success">Registrar</button>
                                    </form>

                                    : <div>cargando ...</div>
                            }

                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}