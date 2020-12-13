import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInstitutions } from '../../actions/institution';

export const InstitutionScreen = () => {

    const dispatch = useDispatch();

    const { institutions } = useSelector(state => state.institution);
    
    const data = {
      columns: [
          {
            label: 'Nombre',
            field: 'nombre',
            sort: 'asc',
            width: 200
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
          }
        ],
        rows: institutions
    };
    console.log( data );

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
