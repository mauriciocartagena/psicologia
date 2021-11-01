// localhost:4000/api/test-formas//tformas/answers
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { fetchConToken } from '../../helpers/fetch';

export const useFetchQuestionShapeFindAll = (shape, INITIAL_LIMIT, setLimit) => {

    const history = useHistory();
    const [questionsShape, setQuestionsShape] = useState([]);

    useEffect(() => {

        testShapeLoading(shape, INITIAL_LIMIT);

    }, [shape, INITIAL_LIMIT]);


    useEffect(() => {

        return () => {
            setQuestionsShape([]);
        }
    }, []);

    const testShapeLoading = async (id_test, skip) => {


        const resp = await fetchConToken(`test-formas/tformas/answers`, {
            limit: 1,
            skip: skip,
            id_test,
        }, 'POST');

        const body = await resp.json();

        try {

            if (body.ok) {

                const { preguntaFormas } = body;

                setQuestionsShape(preguntaFormas);

            }
            else {
                Swal.fire(':(', body.msg, 'error');
                history.push("/answers/shape");

            }
        } catch (error) {
            console.log(error);
        }

    }

    return { questionsShape };

}