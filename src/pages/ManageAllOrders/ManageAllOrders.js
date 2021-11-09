import React, { useEffect, useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import ManageUpdate from '../ManageUpdate/ManageUpdate';

const ManageAllOrders = () => {
    const {isLoading} = useAuth();
    const [allOrders, setAllOrders]= useState([]);

    useEffect(()=>{
        fetch(`https://gruesome-witch-85056.herokuapp.com/orders`)
        .then(res=>res.json())
        .then(data=>setAllOrders(data));
        console.log('loaded data');
    }, [])


    if(isLoading){
        return <Spinner animation="border" variant="primary" />
    }

    return (
        <div>
            <h1 className="text-center text-primary my-5">Manage All Orders</h1>
            <div className="mb-5 p-5 table-container">
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                    <th className="p-4">Customer Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Tour Name</th>
                    <th className="p-4">Order Status</th>
                    <th className="p-4">Confirm</th>
                    <th className="p-4">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map(order=><ManageUpdate
                            key={order._id}
                            order={order}
                            allOrders={allOrders}
                            setAllOrders={setAllOrders}
                        ></ManageUpdate>
                            
                        )
                    }  
                </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageAllOrders;