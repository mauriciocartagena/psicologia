import React from 'react'

export const Aside = () => {
    return (
        <aside>
            <div
                id="sidebar"
                className="nav-collapse"
            // className="nav-collapse hide-left-bar" 
            >
            <div className="leftside-navigation">
                <ul className="sidebar-menu" id="nav-accordion">
                    <li>
                        <a className="active" href="index.html">
                            <i className="fa fa-dashboard"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="sub-menu">
                        <a href="javascript:;">
                            <i _ngcontent-tkb-c31="" className="fa fa-user"></i>
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="login.html">
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
