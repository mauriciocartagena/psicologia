import React, { useEffect, useState } from 'react'
import { TestShapeCard } from './TestShapeCard';

export const TestBodyProfile = ({ options }) => {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        
        setData( data.concat( options ) );
        
    }, [ options ]);

    console.log( data )

    return (
        <>
            { 
                ( data !== [] )
                &&
                    data.map( ( question, key )=> (
                        <TestShapeCard 
                            key={ key }
                            questionData={ question }
                            option={ data }
                        />
                    ))
            }
        </>
    )
}
