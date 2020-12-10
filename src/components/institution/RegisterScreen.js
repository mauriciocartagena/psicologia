import React from 'react'
import { useForm } from '../../hooks/useForm';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import { useFormPhone } from '../../hooks/useFormPhone';
import { startRegisterInstitution } from '../../actions/institution';
import { useDispatch } from 'react-redux';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [ formInstitutionValues, handleInstitutionInputChange ] = useForm({ 
        name:'',
        address:'',
        phone:'',
        emei:'',
        nit:'',
        contact_name:''
    });
    const [ formInstitutionPhoneValues, handleInstitutionPhoneInputChange ] = useFormPhone({ 
        mobile:'',
    });
    console.log( formInstitutionValues );
    console.log( formInstitutionPhoneValues );

    const { name, address, phone, emei, nit, contact_name } = formInstitutionValues;
    const { mobile } = formInstitutionPhoneValues;
    console.log( mobile )

    const handleRegister = ( e ) => {
        e.preventDefault();
        console.log("clock");
        dispatch(startRegisterInstitution( name, address, phone, emei, nit, contact_name, mobile ));
    }
    return (
        <div className="col-lg-12 animated fadeIn">
            <section className="panel">
                <header className="panel-heading">
                    REGISTRAR INSTITUCIÓN
                </header>
                <div className="panel-body">
                    <div className="position-center">
                        <form autoComplete="off" onSubmit={ handleRegister } >
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
                                        name: mobile,
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
                                <input type="text" 
                                    className="form-control" 
                                    id="phone" 
                                    placeholder="Ingrese telefono"  
                                    name="phone" 
                                    value={ phone } 
                                    onChange={ handleInstitutionInputChange }
                                />
                            </div>
                            <div className="form-group">
                                <label>Emei</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="emei" 
                                    placeholder="Ingrese emei"  
                                    name="emei" 
                                    value={ emei } 
                                    onChange={ handleInstitutionInputChange }
                                />
                            </div>
                            <div className="form-group">
                                <label>Nit</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="nit" 
                                    placeholder="Ingrese Nit"  
                                    name="nit" 
                                    value={ nit } 
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
                            <button type="submit" className="btn btn-info">Registrar</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>   
    )
}
