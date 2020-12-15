import React from 'react';
import {  MDBDataTable } from 'mdbreact';
import { useFetchInstituions } from '../../hooks/useFetchInstitutions';

export const InstitutionScreen = () => {
    
    // Renombrar el nombre
    const { data_institutions:institutions } = useFetchInstituions();

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

    return (

        <div className="col-lg-12 animated fadeIn">
            <section className="panel">
                <header className="panel-heading">
                    Institutos
                </header>
                {
                  (institutions !== [])
                  ?
                  <div className="panel-body">
                  <MDBDataTable
                      scrollX
                      autoWidth={true}
                      maxHeight="30vh"
                      striped
                      bordered
                      small
                      data={ data }
                  />
                </div>
                  :
                  <div>Cargando...</div>
                }
            </section>
        </div>
    )
}
