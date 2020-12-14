import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FormUpdate } from './FormUpdate';

export const UpdateScreen = () => {

    // const { institutions } = useSelector(state => state.activeInstitution);

    // console.log( institutions );

    return (
        <div className="col-lg-12 animated fadeIn">
            <section className="panel">
                <header className="panel-heading">
                    MODIFICAR INSTITUCIÓN
                </header>
                <h1>hello</h1>
                {/* {
                    
                    (location.state)
                    ?
                    institution.map(( e, i ) => (
                        <FormUpdate key={ i } data={ e }  />
                    ))
                    :
                    <div className="panel-body">
                        <div className="position-center">
                            <div>No hay datos</div>
                        </div>
                    </div>
                } */}
            </section>
        </div>   
    )
}
