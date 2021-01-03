import React, { useEffect, useState } from 'react';
import { PanelBody } from './PanelBody';

export const TestShapeCard = ({ questionData, option }) => {

    const [ dataOption, setDataOption ] = useState([])
    const  { id_pregunta, pregunta, nombre, id_test, op1, op2, op3, op4, op5, op6, respuesta_correcta, createdAt, updatedAt, test_formas } = questionData;
    const { nombre: nombreTest } = test_formas;
    
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

    useEffect(() => {
        
        setDataOption( option );
        
    }, [ option ]);

    return (
        <div className="animated fadeIn" >
            <div className="panel-body profile-information">
               <PanelBody 
                   questions = { questions }
                   nombre = { nombre }
                   createdAt = { createdAt }
                   updatedAt = { updatedAt }
                   respuesta_correcta = { respuesta_correcta }
                   nombreTest = { nombreTest }
                   id_pregunta = { id_pregunta }
                   id_test = { id_test }
                   filterData = { dataOption }
                   setFilterData = { setDataOption }
               />
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
    );
}
