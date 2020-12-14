import React, { useEffect } from 'react';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInstitutions } from '../../actions/institution';
import { useHistory } from 'react-router-dom';

export const InstitutionScreen = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const { institutions } = useSelector(state => state.institution);

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
            field: 'buttonUpdate',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Eliminar',
            field: 'buttonDelete',
            sort: 'asc',
            width: 200
          }
      ],
        rows: institutions
    };

    institutions.map( (e) => { 
      return(
        e.buttonUpdate = <MDBBtn id={ e.id_institucion } onClick={ ( e ) => ( handleUpdate(e) ) } color="primary">Modificar</MDBBtn>,
        e.buttonDelete = <MDBBtn id={ e.id_institucion } onClick={ ( e ) => ( handleDelete(e) ) } color="success">Eliminar</MDBBtn>
      )
     });

    const handleUpdate = (e) => {
      e.preventDefault();
      console.log( e.target.id  );
      history.push('/institution/update', { id: e.target.id });
    }
    const handleDelete = (e) => {
      e.preventDefault();
      console.log( "handleDelete" );
    }

    useEffect(() => {

      dispatch( fetchInstitutions() );
      
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
