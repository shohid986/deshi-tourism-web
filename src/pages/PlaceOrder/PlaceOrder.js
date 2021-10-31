import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const [placeOrderService, setPlaceOrderService] = useState([]);
  const {name, price, image, discription} = placeOrderService;
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${id}`)
        .then(res => res.json())
        .then(data => setPlaceOrderService(data))
    }, []);
    console.log(placeOrderService);
   
  return (
    <div>
      <h1 className="my-5">Please Place Your Order</h1>
      <div className="container my-5 d-flex justify-content-between">
        <div className="shadow-lg p-3 mb-5 bg-body rounded p-5">
          <div className="px-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className="place-Order-text" defaultValue="test" {...register("name")} />
              <br />
              <input className="place-Order-text" defaultValue="shohidul@gmail.com" {...register("email")} />
              <br />
              <input className="place-Order-text" defaultValue={name} {...register("serviceName")} />
              <br />
              <input className="place-Order-text" defaultValue={price}{...register("price")} />
              <br />
              <input className="place-Order-text" placeholder="Enter your address" {...register("address")} />
              <br />
              <input className="place-Order-text"  placeholder="Enter your number" {...register("phoneNumber")} />
              <br />
              <input className="bg-primary px-3 py-2 text-white fw-bolder form-control" type="PlaceOrder" />
            </form>
          </div>
      </div>
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <Card style={{ width: '30rem' }}>
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