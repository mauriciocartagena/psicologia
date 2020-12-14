import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FormUpdate } from './FormUpdate';

export const UpdateScreen = () => {

    const location = useLocation();

    const { institutions } = useSelector(state => state.institution);

    const [ institution, setInstitution ] = useState([]);

    useEffect(() => {
        if ( location.state ) {
            const { id } = location.state;
            setInstitution( [ institutions.find( e => e.id_institucion.toString() === id ) ] );
        }
        
    }, [ location.state, institutions ]);

    return (
        <div className="col-lg-12 animated fadeIn">
            <section className="panel">
                <header className="panel-heading">
                    MODIFICAR INSTITUCIÓN
                </header>
                {
                    
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
                }
            </section>
        </div>   
    )
}
