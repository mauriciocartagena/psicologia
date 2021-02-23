import React from 'react'
import { useSelector } from 'react-redux';

export const ShapeScreenQuestion = () => {
    
    const { shape } = useSelector(state => state.answerShape);
    

    return (
        <>
                <section className="panel">
                    <header className="panel-heading">
                        PRUEBAS
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
                                                        
                                                            src="https://www.dondeir.com/wp-content/uploads/2020/01/rammstein-cdmx-foro-sol.jpg" 
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
                                    <div className="col-sm-4 form-group text-center" >
                                        <section className="">
                                            <div id="gallery" className="media-gal isotope" style={{textAlign:'center' }} >
                                                <div className="images item  isotope-item" >
                                                    <img 
                                                        src="https://www.dondeir.com/wp-content/uploads/2020/01/rammstein-cdmx-foro-sol.jpg" 
                                                        alt="Option1" />
                                                    <h2 >Pregunta</h2>
                                                </div>
                                            </div> 
                                        </section>
                                    </div>
                                    <div className="col-sm-4 form-group text-center">
                                        <section className="panel">
                                            <div id="gallery" className="media-gal isotope" style={{textAlign:'center' }} >
                                                <div className="images item  isotope-item" >
                                                    <img 
                                                        src="https://www.dondeir.com/wp-content/uploads/2020/01/rammstein-cdmx-foro-sol.jpg" 
                                                        alt="Option1" />
                                                    <h2 >Pregunta</h2>
                                                </div>
                                            </div> 
                                        </section>
                                    </div>
                                    <div className="col-sm-4 form-group text-center">
                                        <section className="panel">
                                            <div id="gallery" className="media-gal isotope" style={{textAlign:'center' }} >
                                                <div className="images item  isotope-item" >
                                                    <img 
                                                        src="https://www.dondeir.com/wp-content/uploads/2020/01/rammstein-cdmx-foro-sol.jpg" 
                                                        alt="Option1" />
                                                    <h2 >Pregunta</h2>
                                                </div>
                                            </div> 
                                        </section>
                                    </div>
                                    <div className="col-sm-4 form-group text-center">
                                        <section className="panel">
                                            <div id="gallery" className="media-gal isotope" style={{textAlign:'center' }} >
                                                <div className="images item  isotope-item" >
                                                    <img 
                                                        src="https://www.dondeir.com/wp-content/uploads/2020/01/rammstein-cdmx-foro-sol.jpg" 
                                                        alt="Option1" />
                                                    <h2 >Pregunta</h2>
                                                </div>
                                            </div> 
                                        </section>
                                    </div>
                                    <div className="col-sm-4 form-group text-center">
                                        <section className="panel">
                                            <div id="gallery" className="media-gal isotope" style={{textAlign:'center' }} >
                                                <div className="images item  isotope-item" >
                                                    <img 
                                                        src="https://www.dondeir.com/wp-content/uploads/2020/01/rammstein-cdmx-foro-sol.jpg" 
                                                        alt="Option1" />
                                                    <h2 >Pregunta</h2>
                                                </div>
                                            </div> 
                                        </section>
                                    </div>
                                    <div className="col-sm-4 form-group text-center">
                                        <section className="panel">
                                            <div id="gallery" className="media-gal isotope" style={{textAlign:'center' }} >
                                                <div className="images item  isotope-item" >
                                                    <img 
                                                        src="https://www.dondeir.com/wp-content/uploads/2020/01/rammstein-cdmx-foro-sol.jpg" 
                                                        alt="Option1" />
                                                    <h2 >Pregunta</h2>
                                                </div>
                                            </div> 
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}
