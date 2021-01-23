import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { fetchConToken } from "../../../helpers/fetch";

export const useFetchAnswerSimple = ( id_test ) => {
    
    const [ data, setData ] = useState({
        data_answer:[]
    });

    useEffect(() => {
        
        answersSimpleLoading( id_test );

    }, [ id_test ]);

    const answersSimpleLoading = async ( id_test = '') => {

        const resp = await fetchConToken(`pregunta-simple/psimples-test?id_test=${ id_test }`);
        const body = await resp.json();
    
        try {

            if ( body.ok ) {   
                
                const  { simples_preguntas } = body;

                const dataMap = simples_preguntas;    

                setData({
                    data_answer: dataMap
                });
    
            }
            else{
                Swal.fire(':(', body.msg, 'error');
    
            }
        } catch ( error ) {
            console.log(error);
        }
    
    }

    return data;
}
