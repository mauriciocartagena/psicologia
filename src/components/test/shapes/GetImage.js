import React from 'react';

export const GetImage = ( { data, onImageUpdate, onImageRemove } ) => {

    return (
       <>
            {
                data.map(( image, index) => (

                    <div key={ index } className="col-sm-4 form-group text-center"
                        style={{ justifyContent: 'center' }}
                        >
                        <br/>
                        <img src={image['data_url']} alt="images-shapes" className="img-rounded" width="250px" height="150px"  />
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
