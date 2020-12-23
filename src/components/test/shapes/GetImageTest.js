import React from 'react';

export const GetImageTest = ({ options = [] } ) => {    

    return (
        <div>
            {
                options.map( ( question, key )=> 
                    {
                        const  { pregunta, nombre, op1, op2, op3, op4, op5, op6, respuesta_correcta } = question;
                        
                        const questions = new Buffer.from( pregunta.data ).toString("ascii");

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

                                <div className="feed-box text-center">
                                    <div className="panel-body">
                                        <img 
                                            style={{ height:"100%", width:200 }} 
                                            src={ questions } alt="Questions"  
                                        />
                                        <div className="profile-desk">
                                            <h1>Nombre</h1>
                                            <span className="text-muted">{ nombre }</span>
                                            <h1>Respuesta Correcta</h1>
                                            <span>
                                                { respuesta_correcta }
                                            </span>
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
                                <div className="feed-box text-center" >
                                    <div className="panel-body">
                                        <button className="btn btn-success" >Editar</button>
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
