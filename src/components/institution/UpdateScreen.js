import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormUpdate } from './FormUpdate';

export const UpdateScreen = () => {

    const { activeInstitution } = useSelector(state => state.institution);
    const history  = useHistory();

    return (
        <div className="col-lg-12 animated fadeIn">
            <section className="panel">
                <header className="panel-heading">
                    MODIFICAR INSTITUCIÓN
                </header>
                {
                    (activeInstitution !== null)
                    ?
                        [activeInstitution].map(( e, i ) => (
                            <FormUpdate key={ i } data={ e }  />
                        ))
                    :
                        history.push('/institution/view')
                }
            </section>
        </div>   
    )
}
