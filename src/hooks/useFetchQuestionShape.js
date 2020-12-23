
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { fetchConToken } from '../helpers/fetch';

export const useFetchQuestionShape = () => {

    const [ questionsShape, setQuestionsShape ] = useState({
        data_questions_shape:[]
    });

    useEffect(() => {
        testShapeLoading();
        return (()=>{
            setQuestionsShape({ data_questions_shape:[] })
        })
    }, [])

    const testShapeLoading = async () => {

        const resp = await fetchConToken('pregunta-formas/pformas');
        const body = await resp.json();
    
        try {

            if ( body.ok ) {   
                
                const  { preguntaFormas } = body;

                setQuestionsShape({
                    data_questions_shape:preguntaFormas
                });
    
            }
            else{
                Swal.fire(':(', body.msg, 'error');
    
            }
        } catch ( error ) {
            console.log(error);
        }
    
    }

    return questionsShape;


}