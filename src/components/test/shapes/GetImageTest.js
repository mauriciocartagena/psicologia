import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { useDispatch } from 'react-redux';
import { questionClearShape, questionSetShape } from '../../../actions/questionShape';
import { useHistory } from 'react-router-dom';

moment.locale('es');

export const GetImageTest = ({ options = [] } ) => {    

    const dispatch = useDispatch();

    const history = useHistory();

    const handleActiveQuestions = ( id_pregunta, nombre, id_test, id_resp ) => {

        dispatch( questionClearShape() );
        dispatch( questionSetShape( id_pregunta, nombre, id_test, id_resp ));

        history.push('/test/update/shapes/screen');

    }

    return (
        <div>
            {
                options.map( ( question, key )=> 
                    {
                        const { id_pregunta, pregunta, nombre, id_test, op1, op2, op3, op4, op5, op6, respuesta_correcta, createdAt, updatedAt } = question;

                        const { nombre: nombreTest } = question.test_formas;
                        
                        const questions   = new Buffer.from( pregunta.data ).toString("ascii");

                        const optionOne   = new Buffer.from( op1.data ).toString("ascii");
                        const optionTwo   = new Buffer.from( op2.data ).toString('ascii');
                        const optionThree = new Buffer.from( op3.data ).toString('ascii');
                        const optionFour  = new Buffer.from( op4.data ).toString('ascii');
                        const optionFive  = new Buffer.from( op5.data ).toString('ascii');
                        const optionSix   = new Buffer.from( op6.data ).toString('ascii');

                        const Options = [
                                optionOne,
                                optionTwo,
                                optionThree,
                                optionFour,
                                optionFive,
                                optionSix
                        ];
                        return (
                            <div key={ key } className="animated fadeIn" >
                                <div className="panel-body profile-information">
                                    <div className="col-md-3">
                                        <div className="profile-pic text-center">
                                            <img src={ questions } alt="question" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="profile-desk">
                                            <h1>Nombre</h1>
                                            <br/>
                                                <span className="text-muted">{ nombre }</span>
                                            <h1>Detalles</h1>
                                            <br/>
                                            <span className="text-muted">
                                                Creado : { moment(createdAt).format('LL, h:mm:ss a') }
                                                <br/>
                                                Ultima Actualizacion : { moment(updatedAt).format('LL, h:mm:ss a') }
                                                <br/>

                                            </span>
                                            <br/>
                                            <button onClick={ ()=> { handleActiveQuestions( id_pregunta, nombre, id_test, respuesta_correcta ) } } className="btn btn-primary">Editar</button>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="profile-statistics">
                                            <h1>Nombre</h1>
                                            <p>{ nombre } </p>
                                            <h1>Respuesta Correcta</h1>
                                            <p>Imagen : { respuesta_correcta }</p>
                                            <h1>Nombre de Prueba </h1>
                                            <p>{ nombreTest }</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div id="gallery" className="media-gal isotope" >

                                        {
                                            Options.map( ( e, id )=>(
                                                <div className="images item  isotope-item" key={ id }>
                                                    <img 
                                                        
                                                        src={ e } 
                                                        alt="Option1" />
                                                    <p>Opción { id + 1 } </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <hr/>
                            </div >
                        )

                    })
            }
        </div>
    )
}
