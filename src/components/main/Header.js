import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { uiCloseDrowp, uiCloseSection, uiCloseSidebar, uiOpenDrowp, uiOpenSection, uiOpenSidebar } from '../../actions/ui';

export const Header = () => {
    const { uiDrowp, uiSidebar  } = useSelector(state => state.ui);
   
    const dispatch = useDispatch();

    const handleSidebar = ( e ) => {
        e.preventDefault();

        if( uiSidebar === 'nav-collapse' ){
            return (
                dispatch( uiCloseSidebar()),
                dispatch( uiCloseSection())     
            );
        }
        dispatch( uiOpenSidebar());
        dispatch( uiOpenSection());
    }

    const dropDownOpen = ( e ) => {
        e.preventDefault();
        
        if ( uiDrowp === 'dropdown' ) {
            
           return dispatch( uiOpenDrowp() );
            
        }

        dispatch( uiCloseDrowp() );
    }
    const handleLogout = () => {
        dispatch( startLogout() );
    }


    return (
        <header className="header fixed-top clearfix">
            <div className="brand">

                <a href="index.html" className="logo">
                    <img 
                        src="https://mauriciocartagena.github.io/my-perfil/static/media/Logo.2921d167.png" 
                        style={{ width:168,height:40 }}  alt="logo" 
                    />
                </a>
                <div 
                    className="sidebar-toggle-box"  
                    onClick = { handleSidebar }
                >
                    <div className="fa fa-bars"></div>
                </div>
            </div>
        
            <div className="top-nav clearfix">
                <ul className="nav pull-right top-menu">
                    <li 
                        className={ uiDrowp }
                        >
                        <a data-toggle="dropdown"
                            className="dropdown-toggle" 
                            onClick={ dropDownOpen } 
                            style={{cursor:"pointer" }}
                            >
                            <img alt="" src="https://mauriciocartagena.github.io/my-perfil/static/media/photo.517c8325.png" />  
                            <span className="username" > &nbsp; Mauricio Cartagena </span>
                            <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu extended logout">
                            <li>
                                <Link to='/' >
                                    <i className=" fa fa-suitcase"></i>
                                    Perfil
                                </Link>                                        
                            </li>
                            <li>
                               <Link to='/user' >
                                    <i className="fa fa-cog"></i>
                                    Configuración
                                </Link>    
                            </li>
                            <li style={{ cursor:"pointer" }} onClick = { handleLogout } >
                                <a>
                                    <i className="fa fa-key"></i>Cerrar Sesión
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
}
