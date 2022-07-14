import React from 'react';

export default function Nav() {
	return (
		<nav className="navBar">
			<div className="divflup">
				<h1 className='mt-4'>flup</h1>
			</div>
			<h2>Acciones</h2>
			<div className="contenedores">
				<a><label>Redimir Codigo</label></a>
				<a>Domicilios</a>
			</div>


			<h2>Plataforma</h2>

			<div className="contenedores">
				<a>Solicitudes</a>
				<a>Influencers</a>
				<a>Consumos</a>
			</div>

			<h2>Configuracion</h2>
			<div className="contenedores">
				<a>Restaurante</a>
				<a>Menu</a>
				<a>Usuarios</a>
				<a>Facturacion y pagos</a>
			</div>

		</nav>
	);
}

