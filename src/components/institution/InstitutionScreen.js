import React, { useEffect } from 'react';
import {  MDBDataTable } from 'mdbreact';
import { useFetchInstituions } from '../../hooks/useFetchInstitutions';
import { useDispatch } from 'react-redux';
import { institutionSetActiveClear } from '../../actions/institution';

export const InstitutionScreen = () => {
    
    const dispatch = useDispatch();
    // Rename the name
    const { data_institutions:institutions } =  useFetchInstituions();

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

    useEffect( () => {

      dispatch( institutionSetActiveClear() );

    },[ dispatch ]);

    return (
        <div className="col-lg-12 animated fadeIn">
            <section className="panel">
                <header className="panel-heading">
                    Institutos
                </header>
                {
                  (data.rows !== [])
                  ?
                  <div className="panel-body">
                    <MDBDataTable
                        noRecordsFoundLabel="Cargando..."
                        scrollX
                        autoWidth={true}
                        maxHeight="40vh"
                        striped
                        bordered
                        small
                        data={ data }
                    />
                  </div>
                  :
                  <div className="panel-body">
                    <div>Cargando...</div>
                  </div>
                }
            </section>
        </div>
    )
}
