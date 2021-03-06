import React from 'react';
import { Row, Col, Container } from 'reactstrap';
    

const Orders = (props) => ( 
    

        <Container className='orderPart'><br/>
            {props.orderList.map(order => (
            

                <Row key={order._id} className="myOrder">

                    <Col>
                        <p><strong>Fabric Name:</strong> {order.fabric.fabric_name}</p>
                        <img src={order.fabric.fabric_pic} className="img-fluid fabricCard" alt="Responsive fabric image" />
                    </Col>
                    <Col>
                        <p><strong>Garment Name:</strong> {order.garment.garment_name}</p>
                        
                        <img src={order.garment.garment_pic} className="img-fluid" alt="Responsive garment image" />
                    </Col>
                    

                </Row>
                
            ))
            }

            
        </Container>
     
);

export default Orders;