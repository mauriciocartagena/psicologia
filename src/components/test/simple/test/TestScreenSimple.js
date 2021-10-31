import React from 'react';
import { useDispatch } from 'react-redux';
import { uiModalTrue } from '../../../../actions/ui';
import { useFetchTestSimple } from '../../../../hooks/QuestionSimple/useFetchTestSimple';
import { MDBDataTable } from 'mdbreact';
import { ModalRegisterSimple } from './ModalRegisterSimple';

export const TestScreenSimple = () => {

    const dispatch = useDispatch();

    const { data_simple: TestSimple } = useFetchTestSimple();

    const data = {
        columns: [
            {
                label: 'Nombre',
                field: 'nombre',
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
        rows: TestSimple
    };
    const handleChangeModal = () => {
        dispatch(uiModalTrue());
    }

    return (
        <React.Fragment>
            <div className="col-lg-12 animated fadeIn">
                <section className="panel">
                    <header className="panel-heading">
                        Pruebas Simple
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
                                    noRecordsFoundLabel="Cargando..."
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
                                <div>Cargando...</div>
                            </div>

                    }
                </section>
                <ModalRegisterSimple />
            </div>
        </React.Fragment>
    )
}
