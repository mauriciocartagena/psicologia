import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';


export const shapeStartLoading = () => {
    return async ( dispatch ) => { 
       try {
           
           const resp = await fetchConToken('test-formas/tformas');
           const body = await resp.json();

           const { testFormas } =  body;

           dispatch( shapeLoaded( testFormas ) );

       } catch (error) {
           console.log(error);
       }
    }
}

export const shapeLoaded = ( shape ) => ({
    type: types.shapeLoaded,
    payload: shape 
});