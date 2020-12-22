import React from 'react'
import { faBong, faCubes, faThermometerQuarter, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export const RegisterScreen = () => {

    return (
        <>
            <div className="row animated fadeIn" >
                <div className="col-sm-4">
                    <div className="mini-stat clearfix">
                        <span className="mini-stat-icon tar">
                            <FontAwesomeIcon icon={ faThermometerQuarter } />
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
                            <FontAwesomeIcon icon={ faThermometerThreeQuarters } />
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
                            <FontAwesomeIcon icon={ faThermometerQuarter } />                            
                        </span>
                        <div  className="mini-stat-info">
                            <span>29</span>
                             Cantidad de Pruebas de formas 
                        </div>
                    </div>
                </div>
            </div>   
            <div className="row animated fadeIn" >
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
                    <NavLink className="btn btn-primary btn-lg btn-block"
                        to="/test/register/shapes"
                    >  
                        Seleccionar
                    </NavLink>
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
                    <NavLink className="btn btn-success btn-lg btn-block" 
                        to="/test/register/shapes"
                    >
                        Seleccionar
                    </NavLink>
                    
                    <div className="row" style={{ paddingTop:"10px" }} >
                        <div className="col-sm-6" style={{ paddingBottom:"10px" }} >
                            <NavLink className="btn btn-warning btn-lg btn-block" 
                                to="/test/register/shapes/screen"
                            >
                                Administrar pruebas
                            </NavLink>
                        </div>
                        <div className="col-sm-6" >
                            <NavLink className="btn btn-info btn-lg btn-block" 
                                to="/test/register/shapes"
                            >
                                Categoria pruebas
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
