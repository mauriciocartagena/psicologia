import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startRegisterCategory, testSimpleCategoryActive, updatedTestSimpleCategory } from '../../../../actions/category';
import { startRegisterTestSimple, TestSimpleSetActiveClear, updatedTestSimple } from '../../../../actions/testSimple';
import { uiModalFalse } from '../../../../actions/ui';

export const ModalCategory = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { categoryActive } = useSelector( state => state.category );
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
        nombre_categoria: ''
    }
    const [ formValues, setFormValues ] = useState( initForm );

    const { nombre_categoria, id_categoria } = formValues;

    const handleInputChange = ({ target }) => {

        setFormValues({
          ...formValues,
          [target.name]:target.value
        });
    
    }

    const handleRegister = ( e ) => {
        e.preventDefault();

        if( categoryActive ){

            dispatch( updatedTestSimpleCategory( nombre_categoria, id_categoria ) );
            history.push('category');
      
        }else{
            
            dispatch( startRegisterCategory( nombre_categoria ) );
            history.push('category');
        
        }
      
        closeModal();
    }
    const closeModal = () => {
        dispatch( uiModalFalse() );
        dispatch( testSimpleCategoryActive() );
    }

    useEffect(() => {
        if ( categoryActive ) {
            setFormValues( categoryActive );
        }
        else{
            setFormValues({ nombre_categoria:'' });
        }
     
    }, [ categoryActive, setFormValues ]);

    return (
        <Modal
            isOpen={ uiModal }
        //   onAfterOpen={afterOpenModal}
            onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            ariaHideApp={ !process.env.NODE_ENV ==='test' }
        >
            <h1> { ( categoryActive )? 'Editar Categoria' : 'Registrar Categoria' } </h1>
            <section className="panel">
                <div className="panel-body">
                    <form autoComplete="off" onSubmit={ handleRegister } >
                        <div className="form-group">
                            <label>Nombre categoria</label>
                            <input type="text" 
                                className="form-control" 
                                id="nombre_categoria" 
                                placeholder="Ingrese nombre categoria"  
                                name="nombre_categoria" 
                                value={ nombre_categoria } 
                                onChange={ handleInputChange }
                            />
                        </div>
                        <button type="submit" className="btn btn-info" 
                        disabled={ uiDisabled } 
                        > 
                            <i className={ uiLoadingSaveButton } /> 
                            {
                                ( categoryActive ) ? " Modificar" : " Registrar"
                            }
                        </button>
                    </form>
                </div>
            </section>
        </Modal>
    )
}
