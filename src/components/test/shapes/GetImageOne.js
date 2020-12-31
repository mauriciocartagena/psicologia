import React from 'react';
import { Img } from './styles/style';

export const GetImageOne = ( { data, onImageUpdate, onImageRemove } ) => {
    return (
       <>
            {
                data.map(( image, index) => (
                    <div key={ index } 
                        style={{ justifyContent: 'center', alignItems:'center' }} 
                    >
                        <br/>
                        <Img src={image['data_url']} alt="images-shapes" className="img-rounded" />
                        <br/>
                        <div className="image-item__btn-wrapper">
                            <br/>
                            <button className="btn btn-info" style={{ marginRight:5 }} onClick={() => onImageUpdate(index)}>Actualizar</button>
                            <button className="btn btn-danger" style={{ marginRight:5 }} onClick={() => onImageRemove(index)}>Eliminar</button>
                        </div>
                    </div>
                ))
            }
       </>
    )
}