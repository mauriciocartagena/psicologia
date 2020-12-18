import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBong, faCubes } from '@fortawesome/free-solid-svg-icons'

export const TestScreen = () => {
    return (
        <div className="row" >
            <div className="col-sm-6" > 
                <h3>
                    <i>
                        <FontAwesomeIcon icon={ faBong } />
                        <span> Pruebas Simples</span>
                    </i>
                </h3>
                <p>
                    Pruebas simples sin graficos, solamente preguntas.
                </p>
                <button className="btn btn-primary btn-lg btn-block" >Elegir</button>
            </div>
            <div className="col-sm-6">
                <h3>
                    <i>
                        <FontAwesomeIcon icon={ faCubes } />
                        <span> Pruebas de Formas</span>
                    </i>
                </h3>
                <p>
                    Pruebas con graficos, formas entre otras cosas.
                </p>
                <button className="btn btn-info btn-lg btn-block" >Elegir</button>
            </div>
        </div>

    )
}
