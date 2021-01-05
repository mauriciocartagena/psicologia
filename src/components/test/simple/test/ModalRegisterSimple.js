import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startRegisterTestSimple, TestSimpleSetActiveClear, updatedTestSimple } from '../../../../actions/testSimple';
import { uiModalFalse } from '../../../../actions/ui';

export const ModalRegisterSimple = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { testActiveSimple } = useSelector( state => state.tSimple );
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
        nombre_test_test: ''
    }
    const [ formValues, setFormValues ] = useState( initForm );

    const { nombre_test, id_test } = formValues;

    const handleInputChange = ({ target }) => {

        setFormValues({
          ...formValues,
          [target.name]:target.value
        });
    
    }

    const handleRegister = ( e ) => {
        e.preventDefault();

        if( testActiveSimple ){

            dispatch( updatedTestSimple( nombre_test, id_test ) );
            history.push('tsimple');
      
        }else{
            
            dispatch( startRegisterTestSimple( nombre_test ) );
            history.push('tsimple');
        
        }
      
        closeModal();
    }
    const closeModal = () => {
        dispatch( uiModalFalse() );
        dispatch( TestSimpleSetActiveClear() );
    }

    useEffect(() => {
        if ( testActiveSimple ) {
            setFormValues( testActiveSimple );
        }
        else{
            setFormValues({ nombre_test:'' });
        }
     
    }, [ testActiveSimple, setFormValues ]);

    return (
        <Modal
            isOpen={ uiModal }
        //   onAfterOpen={afterOpenModal}
            onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            ariaHideApp={ !process.env.NODE_ENV ==='test' }
        >
            <h1> { ( testActiveSimple )? 'Editar Prueba Simple' : 'Registrar Prueba Simple' } </h1>
            <section className="panel">
                <div className="panel-body">
                    <form autoComplete="off" onSubmit={ handleRegister } >
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" 
                                className="form-control" 
                                id="nombre_test" 
                                placeholder="Ingrese nombre"  
                                name="nombre_test" 
                                value={ nombre_test } 
                                onChange={ handleInputChange }
                            />
                        </div>
                        <button type="submit" className="btn btn-info" 
                        disabled={ uiDisabled } 
                        > 
                            <i className={ uiLoadingSaveButton } /> 
                            {
                                (testActiveSimple) ? " Modificar" : " Registrar"
                            }
                        </button>
                    </form>
                </div>
            </section>
        </Modal>
    )
}
