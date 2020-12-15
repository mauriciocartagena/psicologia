import { MDBBtn } from 'mdbreact';
import { useEffect, useState } from 'react';
import { fetchConToken } from '../helpers/fetch';


export  const  useFetchInstituions = (  ) =>{

    const [ institutions, setInstitutions ] = useState({
        data_institutions:[]
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("hello1");
        // dispatch( institutionSetActive( institution.institutions, e.target.id ) );
        // history.push('/institution/update');
    }
    
    const handleDelete = (e) => {
        e.preventDefault();
        console.log("hello2");
    }

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
                modified: <MDBBtn id={ item.id_institucion } onClick={ ( e )=> handleUpdate(e) } color="primary">Modificar</MDBBtn>,
                deleted: <MDBBtn id={ item.id_institucion }  onClick={ ( e )=> handleDelete(e) } color="success">Eliminar</MDBBtn>
            }));
            setInstitutions({ data_institutions:rows });
        })
        .catch(err => console.error(err));

    },[]);

    // // //Para que no haga peticion cada que se onClick del Button
    // useEffect( () => {
    //     getGifs(category).then(setImages  )
    // },[ category ] );


    return institutions; // { data:[] , loading:true }

}