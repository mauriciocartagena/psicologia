import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { questionClearSimple, questionDeleteSimple, questionSetSimple } from '../../../../actions/questionSimple';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

moment.locale('es');

export const PanelBody = ({ setDataQuestion, setFilter = [], id_pregunta = '', id_categoria = '', id_test = '', pregunta = '', updatedAt = '', createdAt = '', categorias = '', test_simples = '' }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { nombre_categoria } = categorias;

    const { nombre_test } = test_simples;

    const handleActiveQuestionsSimple = (id_pregunta, pregunta, id_categoria, id_test) => {

        dispatch(questionClearSimple());
        dispatch(questionSetSimple(id_pregunta, pregunta, id_categoria, id_test));
        history.push('/test-simple/question/edit');
    }

    const handleDeleteQuestionSimple = (id_pregunta) => {

        dispatch(questionDeleteSimple(id_pregunta));
        setDataQuestion(
            setFilter.filter(
                e => (e.id_pregunta !== id_pregunta)
            ));
    }

    return (
        <React.Fragment>
            <div className="col-md-6">
                <div className="profile-desk">
                    <h1>Pregunta</h1>
                    <br />
                    {pregunta}
                    <span className="text-muted"></span>
                    <h1>Detalles</h1>
                    <br />
                    <span className="text-muted">
                        Creado : {moment(createdAt).format('LL, h:mm:ss a')}
                        <br />
                        Ultima Actualizacion : {moment(updatedAt).format('LL, h:mm:ss a')}
                        <br />
                    </span>
                    <br />
                    <button onClick={() => { handleActiveQuestionsSimple(id_pregunta, pregunta, id_categoria, id_test) }} className="btn btn-primary">Editar</button>
                    &nbsp;
                    <button onClick={() => { handleDeleteQuestionSimple(id_pregunta) }} className="btn btn-success">Eliminar</button>
                </div>
            </div>
            <div className="col-md-3">
                <div className="profile-statistics">
                    <h1>Categoria</h1>
                    <p>
                        {
                            nombre_categoria
                        }
                    </p>
                    <h1>Prueba Simple</h1>
                    <p>
                        {
                            nombre_test
                        }
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}
