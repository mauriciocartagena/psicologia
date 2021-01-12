import React from 'react'

export const FirstPage = () => {
    return (
        <div className="panel-body">
            <div className="position-center">
                <form autoComplete="off" >
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Ingrese nombre"  
                            name="name" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Dirección</label>
                        <input type="text" 
                            className="form-control" 
                            id="address" 
                            placeholder="Ingrese dirección"  
                            name="address" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Nombre de Contacto</label>
                        <input type="text" 
                            className="form-control" 
                            id="contact_name" 
                            placeholder="Ingrese nombre de contacto"  
                            name="contact_name" 
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
