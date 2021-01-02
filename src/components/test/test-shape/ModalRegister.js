import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startRegisterTestShape, TestShapeSetActiveClear, updatedTestShape } from '../../../actions/testShape';
import { uiModalFalse } from '../../../actions/ui';

export const ModalRegister = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { testShapeActive } = useSelector( state => state.tShape );
    const { uiDisabled, uiLoadingSaveButton, uiModal } = useSelector( state => state.ui );

    //TODO README 
    if ( process.env.NODE_ENV !== 'test' ) {
        Modal.setAppElement('#root');
    }

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    };

    const initForm = {
        nombre: ''
    }
    const [ formValues, setFormValues ] = useState( initForm );

    const { nombre, id_test } = formValues;

    const handleInputChange = ({ target }) => {

        setFormValues({
          ...formValues,
          [target.name]:target.value
        });
    
    }

    const handleRegister = ( e ) => {
        e.preventDefault();

        if( testShapeActive ){

            dispatch( updatedTestShape( nombre, id_test ) );
            history.push('/test-shape');
      
        }else{
            
            dispatch( startRegisterTestShape( nombre ) );
            history.push('/test-shape');
        
        }
      
        closeModal();
    }
    const closeModal = () => {
        dispatch( uiModalFalse() );
        dispatch( TestShapeSetActiveClear() );
    }

    useEffect(() => {
        if ( testShapeActive ) {
            setFormValues( testShapeActive );
        }
        else{
            setFormValues({ nombre:'' });
        }
     
    }, [ testShapeActive, setFormValues ]);

    return (
        <Modal
            isOpen={ uiModal }
        //   onAfterOpen={afterOpenModal}
            onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            ariaHideApp={ !process.env.NODE_ENV ==='test' }
        >
            <h1> { ( testShapeActive )? 'Editar Prueba Forma' : 'Registrar Prueba Forma' } </h1>
            <section className="panel">
                <div className="panel-body">
                    <form autoComplete="off" onSubmit={ handleRegister } >
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" 
                                className="form-control" 
                                id="nombre" 
                                placeholder="Ingrese nombre"  
                                name="nombre" 
                                value={ nombre } 
                                onChange={ handleInputChange }
                            />
                        </div>
                        <button type="submit" className="btn btn-info" 
                        disabled={ uiDisabled } 
                        > 
                            <i className={ uiLoadingSaveButton } /> 
                            {
                                (testShapeActive) ? " Modificar" : " Registrar"
                            }
                        </button>
                    </form>
                </div>
            </section>
        </Modal>
    )
}
