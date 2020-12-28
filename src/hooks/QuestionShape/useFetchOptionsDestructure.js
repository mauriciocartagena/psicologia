import { useEffect, useState } from "react";


export const useFetchOptionsDestructure = ( op1 = '', op2 = '', op3 = '', op4 = '', op5 = '', op6 = '' ) => {

    const [ data, setData ] = useState([]);  
    
    const optionOne   = new Buffer.from( op1 ).toString("ascii");
    const optionTwo   = new Buffer.from( op2).toString('ascii');
    const optionThree = new Buffer.from( op3 ).toString('ascii');
    const optionFour  = new Buffer.from( op4 ).toString('ascii');
    const optionFive  = new Buffer.from( op5 ).toString('ascii');
    const optionSix   = new Buffer.from( op6 ).toString('ascii');

    useEffect(() => {

        setData({ 
            option1 : optionOne,
            option2 : optionTwo,
            option3 : optionThree,
            option4 : optionFour,
            option5 : optionFive,
            option6 : optionSix })
       
    }, [ op1, op2, op3, op4, op5, op6 ]);

    return data;

}
