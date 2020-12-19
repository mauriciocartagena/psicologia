import React from 'react';

export const GetImageOne = ( { data, onImageUpdate, onImageRemove } ) => {

    return (
       <>
            {
                data.map(( image, index) => (

                    <div key={ index } 
                        style={{ justifyContent: 'center', alignItems:'center' }} 
                    >
                        <br/>
                        <img src={image['data_url']} alt="images-shapes" className="img-rounded" width="300px" height="270px"  />
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
