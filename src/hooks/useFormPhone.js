
import { useState } from "react"

export const useFormPhone = ( initialState = {}  ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = (  value  ) =>{

        // console.log(target.name);
        // console.log(target.value);
        setValues({
            ...values,
           mobile : value
        });

    }

    return [ values, handleInputChange,reset ];
}