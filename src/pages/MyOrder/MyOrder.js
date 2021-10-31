import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const MyOrder = ({orderId, order_id, setOrders, orders}) => {
    const [order, setOrder] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${orderId}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])

    const handleDeleteOrder=()=>{
      const proceed = window.confirm('Are You surely remove this Purches Order');
      if(proceed){
        fetch(`http://localhost:5000/orders/${order_id}`, {
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount > 0){
            alert('deleted successfully');
            const remainigOrder = orders.filter(order => order._id !== order_id);
            setOrders(remainigOrder);
          }
        });
      }
        
    }
    return (
        <Col>
      <Card className="card-container p-2">
        <Card.Img variant="top" height="220" src={order.image} />
        <Card.Body>
          <Card.Title>{order.name}</Card.Title>
          <Card.Text>
            {order.discription}
          </Card.Text>
          <Button className="py-2 px-3 bg-primary text-white fw-bolder" onClick={handleDeleteOrder}>Remove Purches</Button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default MyOrder;