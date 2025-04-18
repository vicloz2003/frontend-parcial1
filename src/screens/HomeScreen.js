import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products.js';
import Product from '../components/Product.js';

function HomeScreen() {
  console.log('Productos:', products);
  return (
    <div>
      <h1>Últimos Productos</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
        
      </Row>
    </div>
  );
}

export default HomeScreen;
