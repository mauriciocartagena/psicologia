import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { fetchConToken } from '../../helpers/fetch';

const INITIAL_LIMIT = 0;

export const useFetchQuestionSimple = () => {

    const [ loading, setLoading ] = useState( false );

    const [ skip, setSkip ] = useState( INITIAL_LIMIT );

    const [ QuestionsSimple, setQuestionsSimple ] = useState([]);

    useEffect(() => {
        
        if ( skip === INITIAL_LIMIT) 
            testShapeLoading(INITIAL_LIMIT)
        else
        testShapeLoading(skip)
    }, [ skip ]);

    useEffect(() => {
        
        return () => {
            setQuestionsSimple([])
        }
    }, []);

    const testShapeLoading = async ( skip ) => {
        
        setLoading( true );
        const resp = await fetchConToken(`pregunta-simple/psimples?limit=5&skip=${ skip }`);
        const body = await resp.json();
    
        try {

            if ( body.ok ) {   
                
                const  { simples_preguntas } = body;

                setQuestionsSimple( QuestionsSimple.concat( simples_preguntas ) );
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

    return { loading, QuestionsSimple, setSkip };


}