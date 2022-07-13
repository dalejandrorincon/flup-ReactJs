import React from 'react'
import {useSelector} from 'react-redux';
import Nav from '../components/Nav';
import SearchBar from '../components/SearchBar';
import styles from './Home.module.css';



export default function Home() {
    const data = useSelector(state => state.movies)
  return (
    <div className={styles.divf}>
        <div>
            <Nav/>
        </div>

        <div className={styles.contenedor}>
            <div>
                <SearchBar/>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Codigo</th>
                        <th>Titulo</th>
                        <th>Año</th>
                    </tr>
                    {data.map((d) => (
                            <>  
                                <tr>
                                    <td>{d.imdbID}</td>
                                    <td>{d.Title} </td>
                                    <td>{d.Year}</td>                                    
                                </tr>                  
                            </>
                                ))
                    }
                </table>
            </div>
        </div>
    </div>
  )
};
