import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseDrowp, uiCloseSection, uiCloseSidebar, uiOpenDrowp, uiOpenSection, uiOpenSidebar } from '../../actions/ui';

export const Header = () => {
    const { uiDrowp, uiSidebar  } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const handleSidebar = ( e ) => {
        e.preventDefault();

        if( uiSidebar == 'nav-collapse' ){
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
        
        dispatch( uiOpenDrowp() );
    }

    const handleDownClose = ( e ) => {
        e.preventDefault();

        dispatch( uiCloseDrowp() );
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
                            href="#" 
                            onClick={ dropDownOpen } 
                            onBlur={ handleDownClose }
                            >
                            <img alt="" src="https://mauriciocartagena.github.io/my-perfil/static/media/photo.517c8325.png" />  
                            <span className="username" > &nbsp; Mauricio Cartagena </span>
                            <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu extended logout">
                            <li><a href="#"><i className=" fa fa-suitcase"></i>Perfil</a></li>
                            <li><a href="#"><i className="fa fa-cog"></i>Configuración</a></li>
                            <li><a href="login.html"><i className="fa fa-key"></i>Cerrar Sesión</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
}
