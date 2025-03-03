import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');

    const fetchData = async () => {
      try {
        const response = await axios.get('/Datarent.json');
        const results = response.data.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (query) {
      fetchData();
    }
  }, [location]);

  return (
    <Container>
      <h4 className='mt-4'>Search results for “{new URLSearchParams(location.search).get('query')}”</h4>
      <Row>
        {searchResults.length > 0 ? (
          searchResults.map((item, index) => (
            <Col key={index} className='col-md-4 col-xs-12'>
              <Card className='text-center pb-2 mx-2 mb-3'>
                <img className='img-fluid rounded' src="assets/img/office.png" alt={item.title} />
                <div className='description pt-3'>
                  <h6 className='bold'>{item.type}</h6>
                  <p>{item.title}</p>
                  <p>{item.location}</p>
                  <Link to='/RentSpacing'>
                    <Button className=' mx-auto mb-2 w-50' >Rent Now</Button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </Row>
    </Container>
  );
};

export default Search;
