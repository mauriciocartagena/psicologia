
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { fetchConToken } from '../../helpers/fetch';

export const useFetchQuestionShapeOne = ( id_pregunta ) => {

    const [ questionsShape, setQuestionsShape ] = useState({
        data_questions_shape:[]
    });

    useEffect(() => {
        testShapeLoading( id_pregunta );

        return (()=>{
            setQuestionsShape({ data_questions_shape:[] })
        })

    }, [ id_pregunta ])

    const testShapeLoading = async ( id_pregunta ) => {

        const resp = await fetchConToken('pregunta-formas/pforma', { id_pregunta },'POST');
        const body = await resp.json();
    
        try {

            if ( body.ok ) {   
                
                const  { preguntaFormas } = body;
                setQuestionsShape({
                    data_questions_shape:preguntaFormas
                });
    
            }
            else{

                const  { id_pregunta } = body.errors;
                Swal.fire(':(',id_pregunta.msg, 'error');
                console.log(id_pregunta.msg);
    
            }
        } catch ( error ) {
            console.log(error);
        }
    
    }

    return questionsShape;

}