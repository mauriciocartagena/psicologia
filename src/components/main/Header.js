import React from 'react'

export const Header = () => {
    return (
        <header className="header fixed-top clearfix">
            <div className="brand">

                <a href="index.html" className="logo">
                    <img 
                        src="https://mauriciocartagena.github.io/my-perfil/static/media/Logo.2921d167.png" 
                        style={{ width:168,height:40 }}  alt="logo" 
                    />
                </a>
                <div className="sidebar-toggle-box">
                    <div className="fa fa-bars"></div>
                </div>
            </div>

        
            <div className="top-nav clearfix">
                <ul className="nav pull-right top-menu">
                    <li 
                        // className="dropdown"
                        className="dropdown open"
                        >
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <img alt="" src="https://mauriciocartagena.github.io/my-perfil/static/media/photo.517c8325.png" />  
                            <span className="username"> &nbsp; Mauricio Cartagena </span>
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
