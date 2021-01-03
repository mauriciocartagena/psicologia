
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { fetchConToken } from '../../helpers/fetch';

export const useFetchQuestionShape = (  limit, skip ) => {

    const [ questionsShape, setQuestionsShape ] = useState({
        shapeData: []
    });

    useEffect(() => {
        testShapeLoading(  limit, skip );
    }, [ limit, skip ]);

    const testShapeLoading = async ( limit, skip ) => {

        const resp = await fetchConToken(`pregunta-formas/pformas?limit=${ limit }&skip=${ skip }`);
        const body = await resp.json();
    
        try {

            if ( body.ok ) {   
                
                const  { preguntaFormas } = body;

                setQuestionsShape({ shapeData: preguntaFormas });
    
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