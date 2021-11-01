import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ManageUpdate = ({order, allOrders, setAllOrders}) => {
    const {name, email, tour, status} = order;
    const [updatestatus, setUpdateStatus] = useState(status);

    const handleUpdateOrders = (id)=>{
        fetch(`https://gruesome-witch-85056.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                alert('Update Successfully');
                setUpdateStatus('Active');
            }
        });
    }
    
    const handleDeletePurchesOrder=(id)=>{
        const proceed = window.confirm('Are You surely remove this Purches Order');
        if(proceed){
          fetch(`https://gruesome-witch-85056.herokuapp.com/orders/${id}`, {
              method:'DELETE',
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.deletedCount > 0){
              alert('deleted successfully');
              const remainigOrder = allOrders.filter(order => order._id !== id);
              setAllOrders(remainigOrder);
            }
          });
        }
          
      }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{tour}</td>
            <td className="text-info fw-bolder">{updatestatus}</td>
            <td><Button onClick={()=>handleUpdateOrders(order._id)} className="py-2 px-3 bg-warning text-black fw-bolder">Confirm</Button></td>
            <td><Button className="py-2 px-3 bg-danger text-white fw-bolder" onClick={()=>handleDeletePurchesOrder(order._id)}>Remove</Button></td>
        </tr>
    );
};

export default ManageUpdate;