import React from 'react';
import Swal from 'sweetalert2';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchConToken } from '../helpers/fetch';
import { uiModalTrue } from '../actions/ui';
import { testSimpleActive, testSimpleLoaded } from '../actions/testSimple';


export const useFetchTestSimple = () => {

    const dispatch = useDispatch();

    const [uiDisabled, setUiDisabled] = useState(false);

    const history = useHistory();

    const [data, setData] = useState({
        data_simple: []
    });

    const handleSwitchChange = useCallback(() => {
        setUiDisabled(true)
    }, []);

    useEffect(() => {

        const fetchTSimple = () => {

            fetchConToken('test-simple/testsimples', 'GET')
                .then(res => res.json())
                .then(json => {

                    let rows = [];

                    json.testSimple.forEach(item => rows.push({
                        id_test: item.id_test,
                        nombre: item.nombre_test,
                        modified: <button className="btn btn-primary" id={item.id_test} onClick={(e) => {

                            // It's a little more understandable
                            return (
                                dispatch(testSimpleLoaded(json.testSimple)),
                                dispatch(testSimpleActive(json.testSimple, e.target.id)),
                                dispatch(uiModalTrue())
                            )
                        }}>Modificar</button>,
                        deleted: <button className="btn btn-success" disabled={uiDisabled} id={item.id_test}
                            onClick={(e) => {
                                return (
                                    testSimpleDelete(e.target.id)
                                )
                            }}
                        >Eliminar</button>
                    }));

                    setData({ data_simple: rows });
                })
                .catch(err => console.error(err));

        }
        const testSimpleDelete = (id_test) => {

            handleSwitchChange();

            fetchConToken('test-simple/delete', {
                id_test
            }, 'DELETE')
                .then(res => {
                    if (res.ok) {
                        Swal.fire(':)', 'Prueba simple Eliminada', 'success');
                        fetchTSimple();
                    }
                })
                .catch(err => (
                    console.error(err)),
                );
        };

        fetchTSimple();

        // Clear useEffect
        return () => {
            setData({ data_simple: [] });
            setUiDisabled(false);
        }

    }, [history, dispatch, uiDisabled, handleSwitchChange]);

    return data;

}