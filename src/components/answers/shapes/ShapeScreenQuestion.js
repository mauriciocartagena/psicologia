import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useFetchQuestionShapeFindAll } from '../../../hooks/QuestionShape/useFetchQuestionShapeFindAll';

export const ShapeScreenQuestion = () => {

    const INITIAL_LIMIT = 1;
    
    const { shape } = useSelector( state => state.answerShape );

    const { questionsShape } = useFetchQuestionShapeFindAll( shape, INITIAL_LIMIT );

    const [ question, setQuestion ] = useState([]);

    const [ images, setImages ] = useState([]);

    useEffect(() => {
        
        if ( questionsShape[0] !== undefined ) {
            
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

        }

        
    }, [ questionsShape ])


    return (
        <>
                <section className="panel">
                    <header className="panel-heading">
                        PRUEBAS FORMAS
                    </header>
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

                                            images.map(( e, key )=> (

                                                <div className="col-sm-4 form-group text-center" >
                                                    <section className="panel">
                                                        <div id="gallery" className="media-gal isotope" style={{ textAlign:'center' }} >
                                                            <div className="images item  isotope-item" >
                                                                <img 
                                                                    src={ e }
                                                                    alt={ key } />
                                                                <h2 >Pregunta { key + 1 }</h2>
                                                            </div>
                                                        </div> 
                                                    </section>
                                                </div>

                                            ))
                                        :
                                        <div>
                                            Cargando...
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}
