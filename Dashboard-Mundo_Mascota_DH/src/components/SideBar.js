import React from 'react';
import imagenLogo from '../assets/images/logo.PNG'; 


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion color-MMDH" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <br></br>
                <br></br>
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                    
                        <img className="w-120 logo-principal" src={imagenLogo} alt="Imagen Logo"/>
                        
                    </div>
                </a>
                <br></br>
                <br></br>
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>
                
                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Acciones -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Productos -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-paw iconito"></i>
                        <span>Productos</span>
                    </a>
                </li>

                {/*<!-- Usuarios -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-paw iconito"></i>
                        <span>Usuarios</span></a>
                </li>

                {/*<!-- Categorias -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-paw iconito"></i>
                        <span>Categorias</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!--  Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;