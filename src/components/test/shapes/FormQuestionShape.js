import React, { useEffect, useState } from 'react'
import ImageUploading from 'react-images-uploading';
import { useDispatch, useSelector } from 'react-redux';
import { shapeRegister } from '../../../actions/questionShape';
import { shapeStartLoading } from '../../../actions/shape';
import { uiFalseDisabledButton, uiTrueDisabledButton } from '../../../actions/ui';
import { GetImage } from './GetImage';
import { GetImageOne } from './GetImageOne';
import { useForm } from '../../../hooks/useForm';
import { useFetchQuestionShapeOne } from '../../../hooks/QuestionShape/useFetchQuestionShapeOne';
import { useFetchDestructureValue } from '../../../hooks/QuestionShape/useFetchDestructureValue';
import { useFetchOptionsDestructure } from '../../../hooks/QuestionShape/useFetchOptionsDestructure';

export const FormQuestionShape = ( { id_pregunta = '' } ) => {

    const dispatch = useDispatch();

    const { shape } = useSelector( state => state.shape );
    const { uiLoadingSaveButton, uiDisabled } = useSelector( state => state.ui );

    const { data_questions_shape } = useFetchQuestionShapeOne( id_pregunta );

    const [ question, setQuestion ] = useState([]);

    const { pregunta, op1, op2, op3, op4, op5, op6 } = question;
    
    const DestructureValue = ( data_questions_shape ) => {
        
        setQuestion( data_questions_shape );

    }
    useEffect(()=>{

        DestructureValue( data_questions_shape );

    },[ data_questions_shape ]);

    
    const { image } = useFetchDestructureValue( pregunta );

    const { 
        option1,
        option2,
        option3,
        option4,
        option5,
        option6 
    } = useFetchOptionsDestructure( op1, op2, op3, op4, op5, op6 );
    
    const [ imagesQuestion, setImagesQuestion ] = useState([]);
    
    const [ images, setImages ] = useState([]);
    
    const [ formShapeInputValues, handleShapeInputValueChange ] = useForm({
        name: '',
        respCorrect: '',
        testShape: ''
    });
    
    const { name, testShape,respCorrect } = formShapeInputValues;

    const maxNumberQuestion = 1;
    const maxNumber = 6;

    const onChangeQuestion = ( imageList ) => {
        setImagesQuestion( imageList );
    };

    const onChange = ( imageList ) => {
        setImages( imageList );
    };
    
    const handleRegisterTestShape = ( e ) => {
        e.preventDefault();

        dispatch( shapeRegister( 
            imagesQuestion[0].data_url,
            images[0].data_url,
            images[1].data_url,
            images[2].data_url,
            images[3].data_url,
            images[4].data_url,
            images[5].data_url,
            respCorrect,
            name,
            testShape )
        );
    }

    useEffect(() => {

        if ( image !== '' || option1 !== '' || option2 !== '' || option3 !== '' || option4 !== '' || option5 !== '' || option6 !== '' ) {
            const options = [
                {
                    data_url : option1
                },
                {
                    data_url : option2
                },
                {
                    data_url : option3
                }, 
                {
                    data_url : option4
                }, 
                {
                    data_url : option5
                }, 
                {
                    data_url : option6  
                }
            ];
            setImagesQuestion([{ data_url: image }]);
            setImages( options )
        }


    }, [ image, option1, option2, option3, option4, option5, option6 ]);

    useEffect(() => {
        dispatch( shapeStartLoading() );
    }, [ dispatch ]);
    
    useEffect(() => {
        
        if ( imagesQuestion.length !== 1 || images.length !== 6 || name.length === 0 ) {
            return dispatch( uiTrueDisabledButton() );
        }
        dispatch(uiFalseDisabledButton() );
        
    }, [ imagesQuestion, images, name, dispatch ]);

    return (
        <div className="panel-body row align-items-end">            
            <div className="form-group alert alert-info" style={{ paddingLeft:"25%", paddingRight:"25%" }}>
                <div className="col-xs-14 text-center">
                    <label>
                        <h3>Nombre</h3>
                    </label>
                    <input 
                        className="text-center form-control round-input input-medium default-date-picker" 
                        placeholder="Ingrese Nombre" 
                        autoComplete="off"
                        size="16" 
                        type="text" 
                        name="name"
                        value={ name }
                        onChange={ handleShapeInputValueChange }
                    />
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
                                    <GetImageOne 
                                        data={ imagesQuestion } 
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
                                <div className="row" >
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
            <div className="form-group text-center alert">
                <label>
                    <h3>Respuesta Correcta</h3>
                </label>
                <div className="form-group">
                    <label className="col-sm-3 control-label"></label>
                    <div className="col-sm-7">
                        <select 
                            formcontrolname="curso" 
                            name="respCorrect" 
                            onChange={ handleShapeInputValueChange } 
                            className="form-control ng-valid ng-dirty ng-touched"
                            >
                            {
                                images.map(( e, i )=>(
                                    <option  
                                        key={ i } 
                                        value={ i + 1 } 
                                    > { i + 1 }</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group text-center alert">
                <label>
                    <h3>Prueba Forma</h3>
                </label>
                <div className="form-group">
                    <label className="col-sm-3 control-label"></label>
                    <div className="col-sm-7" >
                        <select 
                            formcontrolname="curso" 
                            name="testShape" 
                            onChange={ handleShapeInputValueChange } 
                            className="form-control ng-valid ng-dirty ng-touched"
                            >
                            {
                                shape.map(( e, i )=>(
                                    <option  
                                        key={ i } 
                                        value={ e.id_test } 
                                    > { e.nombre }</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="panel-body">
                <hr/>
                <button type="submit"  
                    onClick={ handleRegisterTestShape } 
                    disabled={ uiDisabled } 
                    className="btn btn-primary btn-lg btn-block" >
                <i  className={ uiLoadingSaveButton } ></i> Registrar
                </button>
            </div>
        </div>
    )
}
