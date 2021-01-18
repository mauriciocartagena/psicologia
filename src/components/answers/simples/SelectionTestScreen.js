import React from 'react'

export const SelectionTestScreen = () => {
    return (
        <div className="row">
            <div className="col-sm-12  animated fadeIn">
                <section className="panel">
                    <header className="panel-heading">
                        SELECCIÓN DE LA PRUEBA SIMPLE
                    </header>
                    <div className="panel-body">
                        <div className="position-center">
                            <form>
                                <div className="form-group">
                                    <label>Prueba</label>
                                    <p>Prueba Seleccionada</p>
                                    <select 
                                        formcontrolname="test" 
                                        name="test"
                                        className="form-control ng-valid ng-dirty ng-touched"
                                        >
                                        <option>Prueba 1</option>
                                        <option>Prueba 2</option>
                                        <option>Prueba 3</option>
                                    </select>
                                </div>
                                <button className="btn btn-primary btn-round btn-block" >Continuar</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
