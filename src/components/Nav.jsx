import React from 'react';
import style from '../components/Nav.module.css'

export default function Nav() {
return (
<nav>
    <div className={style.divpadre}>           
        <nav className={style.navB}>
            <div className={style.divflup}>
                <h1>flup</h1>
            </div>
            <div>
                <h2>Acciones</h2>
            </div>    
                    <div className={style.contenedores}>                        
                        <a><label>Redimir Codigo</label></a>                       
                        <a>Domicilios</a>
                    </div>
        
            <div>            
                <h2>Plataforma</h2>
            </div>
                    <div className={style.contenedores}>
                        <a>Solicitudes</a>
                        <a>Influencers</a>
                        <a>Consumos</a>
                    </div>
            <div>        
                <h2>Configuracion</h2>
                    <div className={style.contenedores}>            
                        <a>Restaurante</a>
                        <a>Menu</a>
                        <a>Usuarios</a>
                        <a>Facturacion y pagos</a>
                    </div>     
            </div>
        </nav>
        
    </div>
</nav>   
);
};