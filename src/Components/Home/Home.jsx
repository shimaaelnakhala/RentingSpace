import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';

const IconCount = 5;
const Icon = () => <Star className='text-warning mx-1 fs-5 ' />;
const Home = () => {
  const [spaces, setSpaces] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get('/Datarent.json');
      setSpaces(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <h4 className='mt-4'>Top Co-working Spaces</h4>
      <Row>
        {spaces.map((space, index) => (
          <Col key={index} className='col-md-4 rounded col-xs-12'>
            <Card className='text-center pb-2 mx-2 mb-3'>
              <img className='img-fluid rounded' src="assets/img/office.png" alt='' />
              <div className='description pt-3'>
                <h6 className='bold'>{space.type}</h6>
                <p>{space.title}</p>
                <div className='d-flex flex-column align-items-center '>
                  <span className='d-flex'>
                  
                    {[...Array(IconCount)].map((_, i) => <Icon key={i} />)}
                    <p className='review ps-2'>(13 reviews)</p>
                  </span>
                  <Link to='/RentSpacing'>
                    <Button type='button' className='mb-2 mx-auto'>Rent Now</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
