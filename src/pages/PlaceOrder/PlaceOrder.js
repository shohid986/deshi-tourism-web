import React, { useEffect, useRef, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const [placeOrderService, setPlaceOrderService] = useState([]);
  const {isLoading, user} = useAuth();
  const {name, price, image, discription} = placeOrderService;
  const { register, handleSubmit, reset } = useForm();

  const {id} = useParams();
    useEffect(()=>{
        fetch(`https://gruesome-witch-85056.herokuapp.com/service/${id}`)
        .then(res => res.json())
        .then(data => setPlaceOrderService(data))
    }, []);


    const onSubmit = data =>{
      console.log(data);
      fetch(`https://gruesome-witch-85056.herokuapp.com/orders/${id}`, {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(data)
          })
              .then(res => res.json())
              .then(data=>{
                if (data.insertedId) {
                  alert('Order processed Successfully');
                  reset();
              }
              });
      reset();
    };

    if(isLoading){
      return <Spinner animation="border" variant="primary" />
  }
  return (
    <div>
      <h1 className="my-5 text-center">Please Place Your Order</h1>
      <div className="container my-5 d-flex place-container justify-content-between">
        <div className="shadow-lg p-3 mb-5 bg-body rounded p-5">
          <div className="px-3 form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className="place-Order-text" defaultValue={user.displayName} {...register("name")} />
              <br />
              <input className="place-Order-text" defaultValue={user.email  } {...register("email")} />
              <br />
              <input className="place-Order-text" autoFocus {...register("tour")} value={name}/>
              <br />
              <input className="place-Order-text" placeholder="Enter your address" {...register("address")} />
              <br />
              <input className="place-Order-text"  placeholder="Enter your number" {...register("phoneNumber")} />
              <br />
              <input className="bg-primary px-3 py-2 text-white fw-bolder form-control" type="submit" />
            </form>
          </div>
      </div>
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <Card  className="place-card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-start">
            <i>{discription}</i>
            <p className="fw-bolder text-danger"> Price: {price}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>
    </div>
  );
}

export default PlaceOrder;