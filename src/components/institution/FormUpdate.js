import React from 'react'
import PhoneInput from 'react-phone-input-2';
import InputMask from 'react-input-mask';
import { useForm } from '../../hooks/useForm';
import { useFormPhone } from '../../hooks/useFormPhone';

export const FormUpdate = ( { data = '' } ) => {

    const  { nombre = '', celular = '', direccion = '', telefono = '', imei = '', nit = '', nombre_contacto = '' } = data;
    
    const [ formInstitutionValues, handleInstitutionInputChange ] = useForm({ 
        name: nombre,
        address: direccion,
        phone: telefono,
        emei: imei,
        nitt: nit,
        contact_name: nombre_contacto
    });
    
    const [ formInstitutionPhoneValues, handleInstitutionPhoneInputChange ] = useFormPhone({ 
        mobile: celular ,
    });
    
    const { name, address, phone, emei, nitt, contact_name } = formInstitutionValues;
    const { mobile } = formInstitutionPhoneValues;

    console.log( formInstitutionValues )

    const handleUpdated = (e) => {
        e.preventDefault();
        console.log("hello");
    }

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
                            id="nitt" 
                            placeholder="Ingrese Nit"  
                            name="nitt" 
                            value={ nitt } 
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
                    // disabled={ uiDisabled } 
                    > 
                        <i 
                        // className={ uiLoadingSaveButton } 
                        /> Modificar
                    </button>
                </form>
            </div>
        </div>
    )
}
