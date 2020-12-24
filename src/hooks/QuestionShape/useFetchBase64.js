
import { useEffect, useState } from 'react'

export const useFetchBase64 = ( question, options ) => {

    const [ questionShape, setQuestionShape ] = useState({
        question: question,
        questionOptions: options
    });


    const [ data, setData ] = useState([]);
    const [ dataImage, setDataImage ] = useState([]);


    useEffect(() => {

        fetchBase64( questionShape );

        return (()=>{
            setQuestionShape({
                question: question,
                questionOptions: options
            })
        })

    }, [ question, options ]);


    const fetchBase64 = ( questionShape ) => {

        if ( questionShape !== '' || null || undefined || [] ) {
            
            const  { question, questionOptions } = questionShape;

            const questionMain = new Buffer.from( question.data ).toString("ascii");

            setData( 
                [
                    { 
                        questionsShape: { 
                            data_url: questionMain
                        }
            
                    }
                ] )

        }else{
            setData([]);
        }
    
    }

    console.log( data )

    return data;


}