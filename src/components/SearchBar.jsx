import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../actions/Actions';
import { UserContext } from '../context/UserProvider';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Searchbar() {
	const { signOutUser } = useContext(UserContext)
	const dispatch = useDispatch();
	// const pelis = useSelector(state => state.movies)
	const [wanted, setWanted] = useState("");

	const handleChange = (e) => {
		e.preventDefault()
		setWanted(e.target.value)
	}
	const handleSubmit = (e) =>{
		e.preventDefault()
		console.log(e.target.value)
		if(e.target.value !== undefined){
			dispatch(getMovies(wanted))
		}
	}

	const handleClickLogout = async () => {
		try {
			await signOutUser()
		} catch (error) {
			console.log(error.code)
		}
	}

	return (
		<div className="d-flex justify-content-end searchBar mt-4">

		<Form onSubmit={handleSubmit} className="d-flex justify-content-center">

					<Form.Control type="text" placeholder="Buscar..." onChange={handleChange} />
					<button className='searchButton' type='submit'>
						Buscar
					</button>
				</Form>
		<Navbar >
			<Nav.Item>
			</Nav.Item>
			<Nav.Item>
				<Link className="nav-link" to="/">Inicio</Link>
			</Nav.Item>
			<Nav.Item>
				<button className="nav-link" onClick={handleClickLogout}>Cerrar sesión</button>
			</Nav.Item>
		</Navbar>
		</div>
	)
};