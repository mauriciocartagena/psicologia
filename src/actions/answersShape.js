import moment from "moment";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const answersShapeActive = (answerShape) => ({
    type: types.shapeAnswersActive,
    payload: answerShape
});

// AnwersShape Response


export const answersShapeFindAll = (answerShape) => ({
    type: types.answersShapeActive,
    payload: answerShape
});

export const answersShapeRegister = (uid, answers) => {

    return async () => {

        const now = moment().format();

        try {
            answers.map(async (e) => {

                const resp = await fetchConToken('respuesta-formas/new', {
                    id_pregunta: e.id,
                    persona_id: uid,
                    fecha_hora: now,
                    bien_mal: e.bien_mal
                }, 'POST');

                const body = await resp.json();

                if (body.ok) {

                    return Swal.fire(':)', 'Respuestas Registradas', 'success');
                } else {

                    return Swal.fire(':(', 'Las respuestas ya fueron registradas', 'error');
                }

            });

        } catch (err) {

            return Swal.fire('Error', "Hable con el administrador", 'error');

        }
    }

};