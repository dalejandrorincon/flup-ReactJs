import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
/* ----------------------- Componentes de presentación ---------------------- */
import SearchBar from '../components/SearchBar';
import Nav from '../components/Nav';
import ItemMovie from '../components/ItemMovie';

const Home = () => {
  const data = useSelector(state => state.movies);

  return (
    <Container fluid className='homeContainer'>
      <Row>
        <Col md={3} className='Nav'>
          <Nav />
        </Col>
        <Col md={9}>
          <Container>
            <SearchBar />
            <Container>
              <table className='table table-striped table-bordered'>
                <thead className='text-center'>
                  <tr>
                    <th>Codigo</th>
                    <th>Titulo</th>
                    <th>Año</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  {data.map((item) => (<ItemMovie item={item} key={item.imdbID} />))}
                </tbody>
              </table>
            </Container>
          </Container>
        </Col>
      </Row>


    </Container>
  )
}
export default Home;