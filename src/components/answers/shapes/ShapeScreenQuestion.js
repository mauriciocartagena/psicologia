import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { answersShapeRegister } from '../../../actions/answersShape';
import { useFetchQuestionShapeFindAll } from '../../../hooks/QuestionShape/useFetchQuestionShapeFindAll';

export const ShapeScreenQuestion = () => {

    const INITIAL_LIMIT = 0;
    const VALUEDEFAULT = [];
    
    const { shape } = useSelector( state => state.answerShape );

    const dispatch = useDispatch();

    const { uid } = useSelector( state => state.auth );

    const [ limit, setLimit ] = useState( INITIAL_LIMIT );

    const { questionsShape } = useFetchQuestionShapeFindAll( shape, limit, setLimit );

    const [ disabledFinish, setDisabledFinish ] = useState( false );

    const [ disabledStart, setDisabledStart ] = useState( false );

    const [ question, setQuestion ] = useState([]);

    const [ images, setImages ] = useState([]);

    const [ idQuestion, setIdQuestion ] = useState(0);

    const [ limitAnswers, setLimitAnswers ] = useState(0);
    
    const [ answersShape, setAnswersShape ] = useState({
        data : VALUEDEFAULT
    });

    const handleNextQuestion = () => {
        
        setLimit( limit + 1 );
        setLimitAnswers( limitAnswers + 1 );

    }
    const handlePrevQuestion = () => {
        setLimit( limit - 1 );
        setLimitAnswers( limitAnswers - 1 );

    }

    const handleSelect = ( e ) => {
        handleOfChangeTheValue( e.target.id );
    }

    useEffect(()=>{

        if ( limit === 1 ) {
            return( 
                setDisabledStart( true ),
                setDisabledFinish( false )
            );
        }
        else if( questionsShape.length === 0 ) {
            
            return ( 
                setDisabledFinish( true ),
                setDisabledStart( false )
            );
        }
        return( 
            setDisabledFinish( false),
            setDisabledStart( false )
         )

    },[ questionsShape, limit ]);

    const handleOfChangeTheValue = ( questionCorrect ) => {

        const answersData = answersShape.data;

        const index = answersData.findIndex( answers  => answers.id === questionsShape[0].id_pregunta );
        
        const respuesta_correcta = questionsShape[0].respuesta_correcta;

        if ( questionCorrect !== null ) {
            
            filterDataAnswers( index, respuesta_correcta, questionCorrect );
        }
        else {
            filterDataAnswers( index, respuesta_correcta, questionCorrect );
        }
    }

    const filterDataAnswers = ( index, respuesta_correcta, questionCorrect ) => {

        if ( respuesta_correcta !== null && questionCorrect !== null ) {

            if ( respuesta_correcta.toString() === questionCorrect.toString() ) {
                
                correctAnswer( index, 1, respuesta_correcta, questionCorrect );

            }
            else{
                correctAnswer( index, 0, respuesta_correcta, questionCorrect );
            }
            
        }else{
            if ( respuesta_correcta === null || undefined || '' ) {
                
                correctAnswer( index, 0, 1, 0 );
            }
            else if(  questionCorrect === null || undefined || '' ){

                correctAnswer( index, 0, respuesta_correcta, 0 );
            }
        }

    }

    const correctAnswer = ( index, value, respuesta_correcta, questionCorrect) => {

        if ( index.toString() === '-1' ) {

            if ( respuesta_correcta.toString() === questionCorrect.toString() ) {
            
                const { data } = answersShape;

                const newData = [

                    ...data,
                    {
                        id: questionsShape[0].id_pregunta,
                        bien_mal: value,
                    }

                ];
                setAnswersShape({ data : newData });
                
            }
            else {

                const { data } = answersShape;

                const newData = [

                    ...data,
                    {
                        id: questionsShape[0].id_pregunta,
                        bien_mal: value,
                    }

                ];
                setAnswersShape({ data : newData });
            }
            
        }else {

            const { data } = answersShape;
            
            const dataFilter = data.map(function( dato ){
            if( dato.id === questionsShape[0].id_pregunta ){
                dato.bien_mal = value;
            }
            
            return dato;
            });

            setAnswersShape({ data : dataFilter });

        } 
    }

    const changeAnswerData = () => {


            const questions   = new Buffer.from( questionsShape[0].pregunta.data ).toString("ascii");

            const optionOne   = new Buffer.from( questionsShape[0].op1.data ).toString("ascii");
            const optionTwo   = new Buffer.from( questionsShape[0].op2.data ).toString('ascii');
            const optionThree = new Buffer.from( questionsShape[0].op3.data ).toString('ascii');
            const optionFour  = new Buffer.from( questionsShape[0].op4.data ).toString('ascii');
            const optionFive  = new Buffer.from( questionsShape[0].op5.data ).toString('ascii');
            const optionSix   = new Buffer.from( questionsShape[0].op6.data ).toString('ascii');

            const Options = [
                optionOne,
                optionTwo,
                optionThree,
                optionFour,
                optionFive,
                optionSix
            ];
            setQuestion( questions );
            setImages( Options );

            handleOfChangeTheValue( null );
        
    }

    const handleAnswersShapeRegister = () => {
        
        dispatch( answersShapeRegister(  uid, answersShape.data ) );
    }

    useEffect(() => {

        if( questionsShape[0] !== undefined ) changeAnswerData();

    },[ questionsShape ]);


    return (
        <>
            {
                ( questionsShape.length !== 1  && disabledFinish === true ) ? 
                    <div>
                        <div className="col-sm-6">
                            <button className="btn btn-primary"
                                onClick={ handleAnswersShapeRegister } 
                            >Enviar Respuestas</button>
                        </div>
                    </div>
                :
                <section className="panel">
                    <header className="panel-heading">
                        PRUEBAS FORMAS
                    </header>

                    {
                        ( questionsShape.length !== 1 ) ? 
                            <div>
                                <div className="col-sm-6">
                                    Cargando ...
                                </div>
                            </div>
                        :
                        <div className="panel-body" style={{ textAlign:'center' }} >
                            <div className="row">
                                <div className="col-sm-12" style={{ paddingLeft: '5%' }}>
                                    <div className="row">
                                        <div className="col-sm-4 form-group text-center" />
                                            <div className="col-sm-4 form-group text-center">
                                                <section className="panel">
                                                    <div id="gallery" className="media-gal isotope" style={{textAlign:'center' }} >
                                                        <div className="images item  isotope-item" >
                                                            <img 
                                                                src={ question }
                                                                alt="Option1" />
                                                            <h2 >Pregunta</h2>
                                                        </div>
                                                    </div> 
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12" style={{ paddingLeft: '5%' }} >
                                    <div className="row">

                                        {
                                            ( images !== [] ) ?

                                                images.map(( e, key )=> 
                                                (
                                                    
                                                    <div className="col-sm-4 form-group text-center" key={ key } >
                                                        <section className="panel">
                                                            <div id="gallery" className="media-gal isotope" style={{ textAlign:'center' }} >
                                                                <div className="images item  isotope-item" >
                                                                    <img 
                                                                        src={ e }
                                                                    />
                                                                    <h2 >Opción { key + 1 }</h2>
                                                                    <button className="btn btn-info" 
                                                                        onClick={ handleSelect }
                                                                        id={ key + 1 }
                                                                    >Seleccionar</button>
                                                                </div>
                                                            </div> 
                                                        </section>
                                                    </div>

                                                )
                                                )
                                            :
                                            <div>
                                                Cargando...
                                            </div>
                                        }
                                    </div>
                                    <div className="d-grid gap-2">
                                        <div className="col-sm-6">
                                            <button className="btn btn-primary" 
                                                onClick={ handlePrevQuestion }
                                                disabled={ disabledStart }
                                            >Anterior</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button className="btn btn-success" 
                                                onClick={ handleNextQuestion } 
                                                disabled={ disabledFinish }
                                                >Siguiente</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </section>
            }
            
        </>
    )
}
