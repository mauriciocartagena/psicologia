import Swal from 'sweetalert2';
import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchConToken } from '../helpers/fetch';
import { testShapeLoaded, testShapeSetActive } from '../actions/testShape';
import { uiModalTrue } from '../actions/ui';


export const useFetcheTestShape = () => {

    const dispatch = useDispatch();

    const [uiDisabled, setUiDisabled] = useState(false);

    const history = useHistory();

    const [data, setData] = useState({
        data_Tformas: []
    });

    const handleSwitchChange = useCallback(() => {
        setUiDisabled(true)
    }, []);

    useEffect(() => {

        const fetchTFormas = () => {

            fetchConToken('test-formas/tformas', 'GET')
                .then(res => res.json())
                .then(json => {

                    let rows = [];

                    json.testFormas.forEach(item => rows.push({
                        id_test: item.id_test,
                        nombre: item.nombre,
                        modified: <button className="btn btn-primary" id={item.id_test} onClick={(e) => {

                            // It's a little more understandable
                            return (
                                dispatch(testShapeLoaded(json.testFormas)),
                                dispatch(testShapeSetActive(json.testFormas, e.target.id)),
                                dispatch(uiModalTrue())
                            )
                        }}>Modificar</button>,
                        deleted: <button className="btn btn-success" disabled={uiDisabled} id={item.id_test}
                            onClick={(e) => {
                                return (
                                    testShapeDelete(e.target.id)
                                )
                            }}
                        >Eliminar</button>
                    }));

                    setData({ data_Tformas: rows });
                })
                .catch(err => console.error(err));

        }
        const testShapeDelete = (id_test) => {

            handleSwitchChange();

            fetchConToken('test-formas/delete', {
                id_test
            }, 'DELETE')
                .then(res => {
                    if (res.ok) {
                        Swal.fire(':)', 'Prueba forma Eliminada', 'success');
                        fetchTFormas();
                    }
                })
                .catch(err => (
                    console.error(err)),
                );
        };

        fetchTFormas();

        // Clear useEffect
        return () => {
            setData({ data_Tformas: [] });
            setUiDisabled(false);
        }

    }, [history, dispatch, uiDisabled, handleSwitchChange]);

    return data;

}