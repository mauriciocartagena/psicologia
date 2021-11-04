import Swal from 'sweetalert2';
import { uiCloseLoadingSaveButton, uiFalseDisabledButton, uiOpenLoadingSaveButton, uiTrueDisabledButton } from "./ui";
import { fetchConToken } from "../helpers/fetch";
import { types } from '../types/types';

export const simpleRegister = (pregunta, id_category, id_test) => {

    return async (dispatch) => {

        dispatch(uiCloseLoadingSaveButton());
        dispatch(uiTrueDisabledButton());
        if (pregunta === '' || id_test === '' || id_category === '' || pregunta === undefined) {
            return (
                Swal.fire(':(', 'Es requerido todos los campos.', 'error'),
                dispatch(uiOpenLoadingSaveButton()),
                dispatch(uiFalseDisabledButton())
            )
        }

        try {

            const resp = await fetchConToken('pregunta-simple/new', {
                pregunta: pregunta,
                id_categoria: id_category,
                id_test: id_test
            }, 'POST');

            const body = await resp.json();

            if (body.ok) {
                Swal.fire(':)', 'Pregunta registrada', 'success');
                dispatch(uiOpenLoadingSaveButton());
                dispatch(uiFalseDisabledButton());
            } else {

                Swal.fire(':(', body.msg, 'error');
                dispatch(uiOpenLoadingSaveButton());
                dispatch(uiFalseDisabledButton());
            }

        } catch (error) {
            console.log(error);
            dispatch(uiOpenLoadingSaveButton());
            dispatch(uiFalseDisabledButton());
        }

    }

}

export const simpleEdit = (id_pregunta, pregunta, id_categoria, id_test) => {

    return async (dispatch) => {

        dispatch(uiCloseLoadingSaveButton());
        dispatch(uiTrueDisabledButton());

        if (id_pregunta === '' || pregunta === '' || id_test === '' || id_categoria === '' || pregunta === undefined) {
            return (
                Swal.fire(':(', 'Es requerido todos los campos.', 'error'),
                dispatch(uiOpenLoadingSaveButton()),
                dispatch(uiFalseDisabledButton())
            )
        }

        try {

            const resp = await fetchConToken('pregunta-simple/update', {
                id_pregunta,
                pregunta: pregunta,
                id_test: id_test,
                id_categoria: id_categoria
            }, 'PUT');

            const body = await resp.json();

            if (body.ok) {
                Swal.fire(':)', 'Pregunta Modificada', 'success');
                dispatch(uiOpenLoadingSaveButton());
                dispatch(uiFalseDisabledButton());
            } else {

                Swal.fire(':(', body.msg, 'error');
                dispatch(uiOpenLoadingSaveButton());
                dispatch(uiFalseDisabledButton());
            }

        } catch (error) {
            console.log(error);
            dispatch(uiOpenLoadingSaveButton());
            dispatch(uiFalseDisabledButton());
        }


    }
}

export const questionDeleteSimple = (id_pregunta) => {

    return async () => {
        try {

            const resp = await fetchConToken('pregunta-simple/delete', {
                id_pregunta
            }, 'DELETE');

            const body = await resp.json();

            if (body.ok) {
                Swal.fire(':)', 'Pregunta Eliminada', 'success');
            } else {

                Swal.fire(':(', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }

    }

}

export const questionSetSimple = (id_pregunta, pregunta, id_categoria, id_test) => (questionSimple({ id_pregunta, pregunta, id_categoria, id_test }));

const questionSimple = (questionActive) => ({
    type: types.questionSimpleSetActive,
    payload: questionActive
});

export const questionClearSimple = () => ({ type: types.questionSimpleClearActive });