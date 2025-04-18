import React, { useState } from 'react'
import {Link} from 'react-router-dom' 
import {Row,Col,Image,ListGroup,Button,Card, FormControl} from 'react-bootstrap'
import products from '../products'
import { useParams } from 'react-router-dom'; 

function ProductScreen({match}) {

  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [qty,setQty] = useState(1)
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
           </ListGroup>
        
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                   <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                   {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col xs='auto' className='my-1'>
                      <FormControl
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {
                          [...Array(product.countInStock).keys()].map((x)=>(
                            <option key={x+1} value={x+1}>
                                {x+1}

                            </option>
                          ))
                        }

                      </FormControl>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}


              <ListGroup>
                <Button className='btn-block' type='button'>Add to Cart</Button>
              </ListGroup>
            </ListGroup>
          </Card>
        </Col>
        
      </Row>
    </div>
  )
}

export default ProductScreen
