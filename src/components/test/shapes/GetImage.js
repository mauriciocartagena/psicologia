import React from 'react';
import { Img, ImgDefault } from './styles/style';

export const GetImage = ( { data, onImageUpdate, onImageRemove } ) => {

    const DEFAULT_IMAGE = 'https://i.pinimg.com/originals/90/80/60/9080607321ab98fa3e70dd24b2513a20.gif';
    
    return (
       <>
            {
                data.map(( image, index) => (
                    <div key={ index } className="col-sm-4 form-group text-center"
                        style={{ justifyContent: 'center' }}
                        >
                        <br/>
                            {
                                ( image.data_url !== undefined ) 
                                ?
                                    <Img src={ image['data_url'] } alt="images-shapes"  className="img-rounded" />
                                :
                                    <ImgDefault src={ DEFAULT_IMAGE } alt="images-shapes"  className="img-rounded" />
                            }
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
