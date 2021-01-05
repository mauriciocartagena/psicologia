import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { fetchConToken } from '../../helpers/fetch';

export const useFetchTestSimple = () => {

    const [ questionsSimple, setQuestionsSimple ] = useState([]);

    useEffect(() => {
        
        testSimpleLoading()
        
    }, [])

    const testSimpleLoading = async () => {

        const resp = await fetchConToken(`test-simple/testsimples`);
        const body = await resp.json();
    
        try {

            if ( body.ok ) {   
                
                const  { testSimple } = body;

                setQuestionsSimple( testSimple );
    
            }
            else{
                Swal.fire(':(', body.msg, 'error');
    
            }
        } catch ( error ) {
            console.log(error);
        }
    
    }

    return { questionsSimple };


}