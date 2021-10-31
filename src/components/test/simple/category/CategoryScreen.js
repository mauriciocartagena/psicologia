import React from 'react'
import { MDBDataTable } from 'mdbreact';
import { useDispatch } from 'react-redux';
import { uiModalTrue } from '../../../../actions/ui';
import { useFetchCategory } from '../../../../hooks/useFetchCategory';
import { ModalCategory } from './ModalCategory';

export const CategoryScreen = () => {

    const dispatch = useDispatch();

    const { data_category: category } = useFetchCategory();


    const data = {
        columns: [
            {
                label: 'Nombre Categoria',
                field: 'nombre_categoria',
                sort: 'asc',
                width: 200,
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
        rows: category
    };
    const handleChangeModal = () => {
        dispatch(uiModalTrue());
    }

    return (
        <div className="col-lg-12 animated fadeIn">
            <section className="panel">
                <header className="panel-heading">
                    Administración de Categoria
                </header>
                {
                    (data.rows !== [])
                        ?
                        <div className="panel-body">
                            <div className="col-lg-12">
                                <div className="text-right" id="nestable_list_menu">
                                    <button type="button" className="btn btn-success" onClick={handleChangeModal}>Registrar</button>
                                </div>
                                <br />
                            </div>

                            <MDBDataTable
                                noRecordsFoundLabel={category !== undefined || data.rows !== undefined ? "Cargando..." : "Aún no se registro ningun dato"}
                                scrollX
                                autoWidth={true}
                                maxHeight="40vh"
                                striped
                                bordered
                                small
                                data={data}
                            />
                        </div>
                        :
                        <div className="panel-body">
                            <div>Cargando</div>
                        </div>
                }
            </section>
            <ModalCategory />
        </div>
    )
}
