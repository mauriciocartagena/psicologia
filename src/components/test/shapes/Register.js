import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { GetImage } from './GetImage';
import { GetImageOne } from './GetImageOne';

export const Register = () => {

    const [ imagesQuestion, setImagesQuestion ] = useState([]);
    
    const [ images, setImages ] = useState([]);

    const [ imagesQuestionCorrect, setImagesQuestionCorrect ] = useState([]);

    const maxNumberQuestion = 1;
    const maxNumber = 5;
    const maxNumberQuestionCorrect = 1;

    const onChangeQuestion = ( imageList ) => {
        setImagesQuestion( imageList );
    };

    const onChange = ( imageList ) => {
        setImages( imageList );
    };

    const onChangeQuestionCorrect = ( imageList ) => {
        setImagesQuestionCorrect( imageList );
    };
    


    return (
        <div className="row">
            <div className="col-sm-12 animated fadeIn">
                <section className="panel">
                    <header className="panel-heading">
                        REGISTRO DE PRUEBAS FORMAS
                    </header>
                    <div className="panel-body row align-items-end">
                        {/* <form autoComplete="off"> */}
                            <div className="form-group alert alert-info" style={{ paddingLeft:"25%", paddingRight:"25%" }}>
                                <div className="col-xs-14 text-center">
                                    <label>
                                        <h3>Nombre</h3>
                                    </label>
                                    <input className="text-center form-control round-input input-medium default-date-picker" placeholder="Ingrese Nombre" size="16" type="text" />
                                    {/* <span class="help-block">Select date</span> */}
                                </div>
                            </div>
                            <div className="form-group text-center alert alert-success">
                                <label >
                                    <h3>Pregunta</h3>
                                </label>
                                <ImageUploading
                                    multiple
                                    value={ imagesQuestion }
                                    onChange={ onChangeQuestion }
                                    maxNumber={ maxNumberQuestion }
                                    dataURLKey="data_url"
                                >
                                    {
                                        ({ onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove }) => (
                                            <div className="upload__image-wrapper">
                                                <button
                                                    className="btn btn-round btn-success"
                                                    style={{ marginRight:5 }}
                                                    onClick={ onImageUpload }
                                                >
                                                Subir Imagen
                                                </button> 
                                                <button 
                                                    className="btn btn-round btn-warning" 
                                                    style={{ marginRight:5 }} 
                                                    onClick={ onImageRemoveAll } 
                                                >
                                                    Eliminar Todo
                                                </button>
                                                <div className="row" >
                                                    <GetImageOne data={ imagesQuestion } 
                                                        onImageUpdate={ onImageUpdate } 
                                                        onImageRemove={ onImageRemove } 
                                                    />
                                                </div>
                                            </div>
                                        )
                                    }
                                </ImageUploading>
                            </div>
                            <div className="form-group text-center alert alert-warning" >
                                <label>
                                    <h3>Opciones</h3>
                                </label>
                                <ImageUploading
                                    multiple
                                    value={ images }
                                    onChange={ onChange }
                                    maxNumber={ maxNumber }
                                    dataURLKey="data_url"
                                >
                                    {
                                        ({ onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove }) => (
                                            <div className="upload__image-wrapper">
                                                <button
                                                    className="btn btn-round btn-success"
                                                    style={{ marginRight:5 }}
                                                    onClick={ onImageUpload }
                                                >
                                                Subir Imagen
                                                </button> 
                                                <button 
                                                    className="btn btn-round btn-warning" 
                                                    style={{ marginRight:5 }} 
                                                    onClick={ onImageRemoveAll } 
                                                >
                                                    Eliminar Todo
                                                </button>
                                                <div className="row" style={{marginLeft:15 }} >
                                                    <GetImage data={ images } 
                                                        onImageUpdate={ onImageUpdate } 
                                                        onImageRemove={ onImageRemove } 
                                                    />
                                                </div>
                                            </div>
                                        )
                                    }
                                </ImageUploading>
                            </div>
                            <div className="form-group text-center alert alert-info">
                                <label>
                                    <h3>Respuesta Correcta</h3>
                                </label>
                                <ImageUploading
                                    multiple
                                    value={ imagesQuestionCorrect }
                                    onChange={ onChangeQuestionCorrect }
                                    maxNumber={ maxNumberQuestionCorrect }
                                    dataURLKey="data_url"
                                >
                                    {
                                        ({ onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove }) => (
                                            <div className="upload__image-wrapper">
                                                <button
                                                    className="btn btn-round btn-success"
                                                    style={{ marginRight:5 }}
                                                    onClick={ onImageUpload }
                                                >
                                                Subir Imagen
                                                </button> 
                                                <button 
                                                    className="btn btn-round btn-warning" 
                                                    style={{ marginRight:5 }} 
                                                    onClick={ onImageRemoveAll } 
                                                >
                                                    Eliminar Todo
                                                </button>
                                                <div className="row" >
                                                    <GetImageOne data={ imagesQuestionCorrect } 
                                                        onImageUpdate={ onImageUpdate } 
                                                        onImageRemove={ onImageRemove } 
                                                    />
                                                </div>
                                            </div>
                                        )
                                    }
                                </ImageUploading>
                            </div>
                            <div className="panel-body">
                                    <button type="submit" className="btn label-info btn-lg btn-block" style={{ color:'white' }} >
                                        Registrar
                                    </button>
                            </div>
                        {/* </form> */}
                    </div>
                </section>
            </div>
        </div>
    )
}
