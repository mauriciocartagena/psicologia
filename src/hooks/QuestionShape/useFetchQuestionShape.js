import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { fetchConToken } from '../../helpers/fetch';

const INITIAL_LIMIT = 0;

export const useFetchQuestionShape = () => {

    const [ loading, setLoading ] = useState(false);

    const [ skip, setSkip ] = useState( INITIAL_LIMIT );

    const [ questionsShape, setQuestionsShape ] = useState([]);

    useEffect(() => {
        
        if ( skip === INITIAL_LIMIT ) {
            testShapeLoading( INITIAL_LIMIT )
        }{
            testShapeLoading( skip );
        }
    }, [ skip ]);

    useEffect(() => {
        
        return () => {
            setQuestionsShape([])
        }
    }, []);

    const testShapeLoading = async ( skip ) => {
        
        setLoading( true );
        const resp = await fetchConToken(`pregunta-formas/pformas?limit=1&skip=${ skip }`);
        const body = await resp.json();
    
        try {

            if ( body.ok ) {   
                
                const  { preguntaFormas } = body;

                setQuestionsShape( questionsShape.concat( preguntaFormas ) );
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

    return { loading, questionsShape, setSkip };


}