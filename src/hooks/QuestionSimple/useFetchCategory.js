import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { fetchConToken } from '../../helpers/fetch';

export const useFetchCategory = () => {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        
        categoryLoading()
        
    }, [])

    const categoryLoading = async () => {

        const resp = await fetchConToken(`categoria/categorias`);
        const body = await resp.json();
    
        try {

            if ( body.ok ) {   
                
                const  { categorias } = body;

                setData( categorias );
    
            }
            else{
                Swal.fire(':(', body.msg, 'error');
    
            }
        } catch ( error ) {
            console.log(error);
        }
    
    }

    return { data };


}