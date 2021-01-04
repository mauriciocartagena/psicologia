
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { fetchConToken } from '../../helpers/fetch';

export const useFetchQuestionShape = (  limit, skip ) => {

    const [ loading, setLoading ] = useState(false)


    const [ questionsShape, setQuestionsShape ] = useState([]);

    useEffect(() => {
        testShapeLoading(  limit, skip );
    }, [ limit, skip ]);

    const testShapeLoading = async ( limit, skip ) => {
        
        setLoading( true );
        const resp = await fetchConToken(`pregunta-formas/pformas?limit=${ limit }&skip=${ skip }`);
        const body = await resp.json();
    
        try {

            if ( body.ok ) {   
                
                const  { preguntaFormas } = body;

                setQuestionsShape( preguntaFormas );
                setLoading( false );
    
            }
            else{
                Swal.fire(':(', body.msg, 'error');
                setLoading( false );
    
            }
        } catch ( error ) {
            console.log(error);
            setLoading( false );
        }
    
    }

    return { loading, questionsShape };


}