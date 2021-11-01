import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    
    const [orders, setOrders] = useState([]);
    const {user, isLoading} = useAuth();
    const email = user.email;

    useEffect(()=>{
        fetch(`https://gruesome-witch-85056.herokuapp.com/orders`)
        .then(res=>res.json())
        .then(data=>{
            const myOrders = data.filter(order=> email === order.email);
            setOrders(myOrders);
        });
        console.log('loaded data');
    }, [isLoading])

    

    return (
        <div className="container mb-5">
            {!orders ? <div className="text-center my-5 py-5 "><h1 className="text center">You Have No Order Here</h1><h2>Please Add Booking</h2></div> : <h1 className="my-5 text-center">Your All Orders Is Here</h1> }
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    orders.map(order=><MyOrder
                        key={order._id}
                        orderId={order.id}
                        order_id={order._id}
                        setOrders={setOrders}
                        orders={orders}
                    ></MyOrder>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;