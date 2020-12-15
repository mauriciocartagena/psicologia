import { MDBBtn } from 'mdbreact';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { institutionLoaded, institutionSetActive } from '../actions/institution';
import { fetchConToken } from '../helpers/fetch';


export  const  useFetchInstituions = (  ) =>{

    const dispatch = useDispatch();
    const history  = useHistory();

    const [ institutions, setInstitutions ] = useState({
        data_institutions:[]
    });

    useEffect(()=>{
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
                modified: <MDBBtn id= { item.id_institucion }  onClick= { ( e ) => { 
                    return(
                        dispatch( institutionLoaded(  json.instituciones ) ),
                        dispatch( institutionSetActive( json.instituciones, e.target.id ) ),
                        history.push('/institution/update')
                    )
                }} color="primary">Modificar</MDBBtn>,
                deleted: <MDBBtn  id= { item.id_institucion }  onClick= { () => { 
                    return(
                        dispatch( institutionLoaded(  json.instituciones ) ),
                        history.push('/institution/update')
                    )
                }} color="success">Eliminar</MDBBtn>
            }));
            setInstitutions( { data_institutions:rows });
        })
        .catch(err => console.error(err));

    },[ history, dispatch ]);

    return institutions; // { data:[] , loading:true }

}