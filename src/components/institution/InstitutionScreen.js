import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBDataTable } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { institutionSetActive, institutionLoaded, fetchInstitutions } from '../../actions/institution';
import { useHistory } from 'react-router-dom';

export const InstitutionScreen = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const { institution } = useSelector( state => state )

    const [institutions, setInstitutions ] = useState([]);


    const data = {
      columns: [
          {
            label: 'Nombre',
            field: 'nombre',
            sort: 'asc',
            width: 200,
          },
          {
            label: 'Direccion',
            field: 'direccion',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Nit',
            field: 'nit',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Telefono',
            field: 'telefono',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Celular',
            field: 'celular',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Imei',
            field: 'imei',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Nombre de Contacto',
            field: 'nombre_contacto',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Modificar',
            field: 'modified',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Eliminar',
            field: 'deleted',
            sort: 'asc',
            width: 200
          },
      ],
        rows: institutions
    };

    const handleUpdate = (e) => {
      e.preventDefault();
      console.log(e.target.id);
      dispatch( institutionSetActive( institution.institutions, e.target.id ) )
      console.log(institutions);
    }
    const handleDelete = (e) => {
      e.preventDefault();
      console.log("hello2");
    }

    useEffect(() => {

      dispatch( fetchInstitutions() ) ;

      let rows = [];
      institution.institutions.forEach(item => rows.push({
        id_institucion:item.id_institucion,
        nombre: item. nombre,
        direccion: item. direccion,
        celular: item. celular,
        telefono: item.telefono ,
        imei:item.imei,
        nit:item.nit,
        nombre_contacto:item.nombre_contacto,
        modified: <MDBBtn id={ item.id_institucion } onClick={ ( e ) =>  handleUpdate(e)  } color="primary">Modificar</MDBBtn>,
        deleted: <MDBBtn id={ item.id_institucion } onClick={ ( e ) =>  handleDelete(e)  } color="success">Eliminar</MDBBtn>
      }));
      setInstitutions( rows );
                
      
    }, [ dispatch ]);
    return (

        <div className="col-lg-12 animated fadeIn">
            <section className="panel">
                <header className="panel-heading">
                    Institutos
                </header>
                <div className="panel-body">
                    <MDBDataTable
                        scrollX
                        autoWidth={true}
                        maxHeight="30vh"
                        striped
                        bordered
                        small
                        data={data}
                    />
                </div>
            </section>
        </div>
    )
}
