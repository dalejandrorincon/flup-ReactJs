import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getMovies } from '../actions';
// import style from "./Searchbar.module.css";


export default function Searchbar() {

const dispatch = useDispatch();
// const pelis = useSelector(state => state.movies)
const [wanted, setWanted] = useState("");

function handleChange(e){
    setWanted(e.target.value)
}
// console.log(wanted)

function handleSubmit(e){
    e.preventDefault()    
    dispatch(getMovies(wanted))  
}

// console.log(pelis)

return (
    <div>        
        <input type='text' onChange ={handleChange} placeholder='Buscar...'></input>
        <button type='button' onClick={handleSubmit}>Buscar</button>
    </div>
)
};