import React from 'react';
import Swal from 'sweetalert2';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchConToken } from '../helpers/fetch';
import { uiModalTrue } from '../actions/ui';
import { testSimpleCategoryActive, testSimpleCategoryLoaded } from '../actions/category';


export const useFetchCategory = () => {

    const dispatch = useDispatch();

    const [uiDisabled, setUiDisabled] = useState(false);

    const history = useHistory();

    const [data, setData] = useState({
        data_category: []
    });

    const handleSwitchChange = useCallback(() => {
        setUiDisabled(true)
    }, []);

    useEffect(() => {

        const fetchTSimpleCategory = () => {

            fetchConToken('categoria/categorias', 'GET')
                .then(res => res.json())
                .then(json => {

                    let rows = [];

                    json.categorias.forEach(item => rows.push({
                        id_categoria: item.id_categoria,
                        nombre_categoria: item.nombre_categoria,
                        modified: <button className="btn btn-primary" id={item.id_categoria} onClick={(e) => {
                            // It's a little more understandable
                            return (
                                dispatch(testSimpleCategoryLoaded(json.categorias)),
                                dispatch(testSimpleCategoryActive(json.categorias, e.target.id)),
                                dispatch(uiModalTrue())
                            )
                        }}>Modificar</button>,
                        deleted: <button className="btn btn-success" disabled={uiDisabled} id={item.id_categoria}
                            onClick={(e) => {
                                return (
                                    testSimpleCategoryDelete(e.target.id)
                                )
                            }}
                        >Eliminar</button>
                    }));

                    setData({ data_category: rows });
                })
                .catch(err => console.error(err));

        }
        const testSimpleCategoryDelete = (id_categoria) => {

            handleSwitchChange();

            fetchConToken('categoria/delete', {
                id_categoria
            }, 'DELETE')
                .then(res => {
                    if (res.ok) {
                        Swal.fire(':)', 'Categoria Eliminada', 'success');
                        fetchTSimpleCategory();
                    }
                })
                .catch(err => (
                    console.error(err)),
                );
        };

        fetchTSimpleCategory();

        // Clear useEffect
        return () => {
            setData({ data_category: [] });
            setUiDisabled(false);
        }

    }, [history, dispatch, uiDisabled, handleSwitchChange]);

    return data;

}