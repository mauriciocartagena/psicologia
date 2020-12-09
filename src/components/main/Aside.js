import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import '../../styles/styles.css';


export const Aside = () => {

    const dispatch = useDispatch();

    const { uiSidebar } = useSelector(state => state.ui);

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <aside>
            <div
                id="sidebar"
                className={ uiSidebar }
            >
            <div className="leftside-navigation">
                <ul className="sidebar-menu" id="nav-accordion">
                    <li className="sub-menu">
                        <Link to='/user' >
                            <i _ngcontent-tkb-c31="" className="fa fa-user"></i>
                            <span>Perfil</span>
                        </Link>
                    </li>
                    <li className="sub-menu">
                        <Link to='/user' >
                            <span> <FontAwesomeIcon icon={ faUniversity } /> Institución</span>
                        </Link>
                    </li>
                    <li onClick={ handleLogout } >
                        <a className='hyper' >
                            <i className="fa fa-sign-out"></i>
                            <span>Cerrar Sesión</span>
                        </a>
                    </li>
                </ul>            
            </div>
            </div>
        </aside>
    )
}
