import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBong, faCubes } from '@fortawesome/free-solid-svg-icons'

export const TestScreen = () => {
    return (
        <section >
            <div className="row" >
                <div className="col-sm-4">
                    <div className="mini-stat clearfix">
                        <span className="mini-stat-icon tar">
                            <i className="fa fa-tag"></i>
                        </span>
                        <div  className="mini-stat-info">
                            <span>31</span>
                             Cantidad de Pruebas simples 
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="mini-stat clearfix">
                        <span className="mini-stat-icon pink">
                            <i className="fa fa-tag"></i>
                        </span>
                        <div  className="mini-stat-info">
                            <span>60</span>
                             Cantidad total de pruebas 
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="mini-stat clearfix">
                        <span className="mini-stat-icon orange">
                            <i className="fa fa-tag"></i>
                        </span>
                        <div  className="mini-stat-info">
                            <span>29</span>
                             Cantidad de Pruebas de formas 
                        </div>
                    </div>
                </div>
            </div>   
            <div className="row" >
                <div className="col-sm-6" > 
                    <h2>
                        <i>
                            <FontAwesomeIcon icon={ faBong } />
                            <span> Pruebas Simples</span>
                        </i>
                    </h2>
                    <p>
                        Pruebas simples sin graficos, solamente preguntas.
                    </p>
                    <button className="btn btn-primary btn-lg btn-block" >Elegir</button>
                </div>
                <div className="col-sm-6">
                    <h2>
                        <i>
                            <FontAwesomeIcon icon={ faCubes } />
                            <span> Pruebas de Formas</span>
                        </i>
                    </h2>
                    <p>
                        Pruebas con graficos, formas entre otras cosas.
                    </p>
                    <button className="btn btn-info btn-lg btn-block" >Elegir</button>
                </div>
            </div>
        </section>
    )
}