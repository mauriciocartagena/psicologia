import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { uiCloseDrowp, uiCloseSection, uiCloseSidebar, uiOpenDrowp, uiOpenSection, uiOpenSidebar } from '../../actions/ui';
import '../../styles/styles.css';

export const Header = () => {
    const { uiDrowp, uiSidebar } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const handleSidebar = (e) => {
        e.preventDefault();

        if (uiSidebar === 'nav-collapse') {
            return (
                dispatch(uiCloseSidebar()),
                dispatch(uiCloseSection())
            );
        }
        dispatch(uiOpenSidebar());
        dispatch(uiOpenSection());
    }

    const dropDownOpen = (e) => {
        e.preventDefault();

        if (uiDrowp === 'dropdown') {

            return dispatch(uiOpenDrowp());

        }

        dispatch(uiCloseDrowp());
    }
    const handleLogout = () => {
        dispatch(startLogout());
    }


    return (
        <header className="header fixed-top clearfix">
            <div className="brand">

                <Link
                    className="logo" to="index.html">
                    <img
                        src="https://mauriciocartagena.github.io/my-perfil/static/media/Logo.2921d167.png"
                        style={{ width: 168, height: 40 }} alt="logo"
                    />
                </Link>
                <div
                    className="sidebar-toggle-box"
                    onClick={handleSidebar}
                >
                    <div className="fa fa-bars"></div>
                </div>
            </div>

            <div className="top-nav clearfix">
                <ul className="nav pull-right top-menu">
                    <li
                        className={uiDrowp}
                    >
                        <Link data-toggle="dropdown"
                            className="dropdown-toggle"
                            onClick={dropDownOpen}
                            style={{ cursor: "pointer" }}
                            to="/"
                        >
                            <img alt="photo" src="https://mauriciocartagena.github.io/my-perfil/static/media/photo.517c8325.png" />
                            <span className="username" > &nbsp; Mauricio Cartagena </span>
                            <b className="caret"></b>
                        </Link>
                        <ul className="dropdown-menu extended logout">
                            <li>
                                <Link to='/user' >
                                    <i className=" fa fa-suitcase"></i>
                                    Perfil
                                </Link>
                            </li>
                            <li>
                                <Link to='/user/setting' >
                                    <i className="fa fa-cog"></i>
                                    Configuración
                                </Link>
                            </li>
                            <li className="hyper" onClick={handleLogout} >
                                <Link
                                    to="/"
                                >
                                    <i className="fa fa-key"></i>Cerrar Sesión
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
}
