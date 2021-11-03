// localhost:4000/api/test-formas//tformas/answers
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { fetchConToken } from '../../helpers/fetch';

export const useFetchQuestionShapeFindAll = (shape, INITIAL_LIMIT, setLimit) => {

    const history = useHistory();
    const [questionsShape, setQuestionsShape] = useState([]);

    useEffect(() => {

        return testShapeLoading(shape, INITIAL_LIMIT);

    }, [shape, INITIAL_LIMIT, setLimit]);


    useEffect(() => {

        return () => {
            setQuestionsShape([]);
        }
    }, []);



    const testShapeLoading = async (id_test, skip) => {

        if (skip === -1) {
            setLimit(0);
        }
        else {

            const resp = await fetchConToken(`test-formas/tformas/answers`, {
                limit: 1,
                skip: skip,
                id_test,
            }, 'POST');

            const body = await resp.json();

            try {

                if (body.ok) {

                    const { preguntaFormas } = body;

                    return setQuestionsShape(preguntaFormas);

                }
                else {
                    Swal.fire(':(', body.msg, 'error');
                    history.push("/answers/shape");

                }
            } catch (error) {
                console.log(error);
            }
        }

    }

    return { questionsShape };


}