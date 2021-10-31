import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faVials, faVial } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import '../../styles/styles.css';
import { institutionAcordionDeselect, institutionAcordionSelect, institutionDeselectRegister, institutionDeselectShow, institutionSelectRegister, institutionSelectShow } from '../../actions/ui';


export const Aside = () => {

    const dispatch = useDispatch();

    const { uiSelection, uiRegisterSelectAcordion, uiShowSelectInstitution } = useSelector(state => state.ui);

    const { uiSidebar } = useSelector(state => state.ui);

    const handleChangeStylePerfil = (e) => {
        e.preventDefault();

        dispatch(institutionAcordionDeselect());
        dispatch(institutionDeselectRegister());
        dispatch(institutionDeselectShow());
    }

    const handleChangeStyle = (e) => {
        e.preventDefault();
        if (uiSelection === 'block') {
            return (
                dispatch(institutionAcordionDeselect()),
                dispatch(institutionDeselectRegister()),
                dispatch(institutionDeselectShow())
            )
        }
        dispatch(institutionAcordionSelect());

    }

    const handleChangeStyleShow = (e) => {
        e.preventDefault();
        dispatch(institutionSelectShow());
        dispatch(institutionDeselectRegister());
    }
    const handleChangeStyleRegister = (e) => {
        e.preventDefault();
        dispatch(institutionSelectRegister());
        dispatch(institutionDeselectShow());
    }

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <aside>
            <div
                id="sidebar"
                className={uiSidebar}
            >
                <div className="leftside-navigation">
                    <ul className="sidebar-menu" id="nav-accordion">

                        <li className="sub-menu" onClick={handleChangeStylePerfil} >
                            <NavLink to='/user' activeClassName="active" >
                                <i className="fa fa-user"></i>
                                <span>Perfil</span>
                            </NavLink>
                        </li>

                        <li className="sub-menu" style={{ cursor: "pointer" }}  >
                            <div onClick={handleChangeStyle}>
                                <NavLink to="/institution" activeClassName="active">
                                    <i>
                                        <FontAwesomeIcon icon={faUniversity} />
                                    </i>
                                    <span>Institución</span>
                                </NavLink>
                            </div>
                            <ul className="sub" style={{ display: uiSelection }}>
                                <li className={uiShowSelectInstitution} onClick={handleChangeStyleShow} >
                                    <NavLink to="/institution/view">
                                        Ver Instituciónes
                                    </NavLink>
                                </li>
                                <li className={uiRegisterSelectAcordion} onClick={handleChangeStyleRegister}>
                                    <NavLink to="/institution" >
                                        Registrar
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="sub-menu" >
                            <NavLink to="/test/register" activeClassName="active" >
                                <i>
                                    <FontAwesomeIcon
                                        icon={faVial}
                                    />
                                </i>
                                <span>Registrar pruebas</span>
                            </NavLink>
                        </li>
                        <li className="sub-menu" >
                            <NavLink to="/answers" activeClassName="active" exact >
                                <i>
                                    <FontAwesomeIcon icon={faVials} />
                                </i>
                                <span>Pruebas</span>
                            </NavLink>
                        </li>
                        <li onClick={handleLogout}  >
                            <NavLink to="/auth/login" className='hyper'>
                                <i className="fa fa-sign-out"></i>
                                <span>Cerrar Sesión</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
