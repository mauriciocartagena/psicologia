import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { institutionLoaded, institutionSetActive } from '../actions/institution';
import { fetchConToken } from '../helpers/fetch';


export  const  useFetchInstituions = () =>{

    const dispatch = useDispatch();
    const [ uiDisabled, setUiDisabled] = useState( false )
    const history  = useHistory();

    const [ institutions, setInstitutions ] = useState({
        data_institutions:[]
    });
    const handleSwitchChange = () => {
        console.log( uiDisabled );
        setUiDisabled( true )
    };

    console.log( uiDisabled );

    useEffect(()=>{

        const fetchInstitution = () =>{

            fetchConToken( 'institutos/inst', 'GET' )
            .then(res => res.json())
            .then(json => {
        
                let rows = [];
        
                json.instituciones.forEach(item =>rows.push({
                    id_institucion:item.id_institucion,
                    nombre: item.nombre,
                    direccion: item.direccion,
                    celular: item.celular,
                    telefono: item.telefono ,
                    imei: item.imei,
                    nit: item.nit,
                    nombre_contacto:item.nombre_contacto,
                    modified: <button className="btn btn-primary" id= { item.id_institucion }  onClick= { ( e ) => { 
                        // It's a little more understandable
                        return(
                            dispatch( institutionLoaded(  json.instituciones ) ),
                            dispatch( institutionSetActive( json.instituciones, e.target.id  ) ),
                            history.push('/institution/update')
                        )
                    }}>Modificar</button>,
                    deleted: <button className="btn btn-success"  disabled={ uiDisabled } id= { item.id_institucion } 
                        onClick = { ( e ) => {
                            return (
                                handleSwitchChange(),
                                institutionDelete( e.target.id )  
                            )
                        }}
                    >Eliminar</button>
                }));
                setInstitutions( { data_institutions:rows });
            })
            .catch(err => console.error(err));
            
        }
        const institutionDelete = ( id_institucion ) => { 

            fetchConToken( 'institutos/delete', { 
                id_institucion
            }, 'DELETE')
            .then(res => {
                if (res.ok) { 
                    Swal.fire(':)','Institución Eliminada', 'success');
                    fetchInstitution();
                }
            })
            .catch(err => (
                console.error(err)),
            );
        };
        fetchInstitution();
        
        return () => {
            setInstitutions({ data_institutions:[] });
            setUiDisabled( false );
        }  
        
    },[ history, dispatch, uiDisabled ]);

    return institutions; 

}