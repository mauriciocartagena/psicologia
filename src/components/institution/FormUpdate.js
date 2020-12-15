import React, { useEffect } from 'react'
import PhoneInput from 'react-phone-input-2';
import InputMask from 'react-input-mask';
import { useForm } from '../../hooks/useForm';
import { useFormPhone } from '../../hooks/useFormPhone';
import { useDispatch, useSelector } from 'react-redux';
import { uiFalseDisabledButton, uiOpenLoadingSaveButton, uiTrueDisabledButton } from '../../actions/ui';
import { updatedInstitution } from '../../actions/institution';

export const FormUpdate = ( { data = '' } ) => {

    const dispatch = useDispatch();

    const  { nombre = '', celular = '', direccion = '', telefono = '', imei = '', nit = '', nombre_contacto = '', id_institucion = '' } = data;

    const { uiDisabled, uiLoadingSaveButton } = useSelector(state => state.ui)
    
    const [ formInstitutionValues, handleInstitutionInputChange ] = useForm({ 
        name: nombre,
        address: direccion,
        phone: telefono,
        emei: imei,
        newNit: nit,
        contact_name: nombre_contacto
    });
    
    const [ formInstitutionPhoneValues, handleInstitutionPhoneInputChange ] = useFormPhone({ 
        mobile: celular ,
    });
    
    const { name, address, phone, emei, newNit, contact_name } = formInstitutionValues;
    const { mobile } = formInstitutionPhoneValues;

    const handleUpdated = (e) => {
        e.preventDefault();
        dispatch( updatedInstitution( name, address, phone, emei, newNit, contact_name, mobile, id_institucion  ) );
    }

    useEffect(() => {
        if ( name.trim() === '' || address.trim() === '' || phone.trim() === '' || emei.trim() === '' || newNit.trim() === '' || contact_name.trim() === '' || mobile.trim() === '') {
            return (
                dispatch( uiOpenLoadingSaveButton() ),
                dispatch( uiTrueDisabledButton() )
            )

        }
        dispatch( uiFalseDisabledButton() );
       
        
    }, [ address ,phone ,emei ,newNit ,contact_name ,mobile ,name, dispatch ]);

    return (
        <div className="panel-body">
            <div className="position-center">
                <form autoComplete="off" onSubmit={ handleUpdated } >
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Ingrese nombre"  
                            name="name" 
                            value={ name } 
                            onChange={ handleInstitutionInputChange }
                        />
                    </div>
                    <div className="form-group">
                        <label>Dirección</label>
                        <input type="text" 
                            className="form-control" 
                            id="address" 
                            placeholder="Ingrese dirección"  
                            name="address" 
                            value={ address } 
                            onChange={ handleInstitutionInputChange }
                        />
                    </div>
                    <div className="form-group">
                        <label>Celular</label>
                        <PhoneInput
                            inputExtraProps={{
                                name: "444",
                                required: true,
                                autoFocus: true
                            }}
                            dropdownClass="col-lg-3"
                            inputStyle={{ width:"100%" }}
                            placeholder="Enter phone number"
                            value={ mobile }
                            onChange={ handleInstitutionPhoneInputChange }
                            country="bo"
                        />
                    </div>
                    <div className="form-group">
                        <label>Telefono</label>
                    <InputMask 
                            placeholder="Ingrese telefono"
                            className="form-control" 
                            mask="999-99-999" 
                            style={{ color:"black" }}
                            maskChar={null} 
                            name="phone"
                            id="phone" 
                            value={ phone } 
                            onChange={ handleInstitutionInputChange }
                        />
                    </div>
                    <div className="form-group">
                        <label>Imei</label>
                        <InputMask 
                            className="form-control" 
                            mask="999999999999999" 
                            style={{ color:"black" }}
                            maskChar={null} 
                            placeholder="Ingrese imei"  
                            id="emei" 
                            name="emei" 
                            value={ emei } 
                            onChange={ handleInstitutionInputChange }
                        />
                    </div>
                    <div className="form-group">
                        <label>Nit</label>
                        <InputMask 
                            className="form-control" 
                            mask="9999999999999" 
                            style={{ color:"black" }}
                            maskChar={null} 
                            id="newNit" 
                            placeholder="Ingrese Nit"  
                            name="newNit" 
                            value={ newNit } 
                            onChange={ handleInstitutionInputChange }
                        />
                    </div>
                    <div className="form-group">
                        <label>Nombre de Contacto</label>
                        <input type="text" 
                            className="form-control" 
                            id="contact_name" 
                            placeholder="Ingrese nombre de contacto"  
                            name="contact_name" 
                            value={ contact_name } 
                            onChange={ handleInstitutionInputChange }
                        />
                    </div>
                    <button type="submit" className="btn btn-info" 
                    disabled={ uiDisabled } 
                    > 
                        <i 
                        className={ uiLoadingSaveButton } 
                        /> Modificar
                    </button>
                </form>
            </div>
        </div>
    )
}
