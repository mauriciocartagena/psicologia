import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { fetchConToken } from "../../../helpers/fetch";

export const useFetchTestShape = () => {
    
    const [ data, setData ] = useState({
        dataShape:[]
    });
    
    useEffect(() => {
        
        shapeLoading();

    }, []);

    const shapeLoading = async () => {

        const resp = await fetchConToken(`test-formas/tformas`);
        const body = await resp.json();
    
        try {

            if ( body.ok ) {   
                
                const  { testFormas } = body;

                const dataMap = testFormas;    

                setData({
                    dataShape: dataMap
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
