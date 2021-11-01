import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        fetch('https://gruesome-witch-85056.herokuapp.com/services', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data=>{
                  if (data.insertedId) {
                    alert('Add Service Successfully');
                    reset();
                }
                });
        reset();
      };
    return (
        <div className="container add-service-container my-5 p-4 shadow-lg p-3 mb-5 bg-body rounded w-50">
            <h1 className="text-center mb-4">Add a new Service</h1>
            <form className="text-center fw-bolder" onSubmit={handleSubmit(onSubmit)}>
              <input className="place-Order-text" placeholder="Enter service name" {...register("name")} />
              <br />
              <input className="place-Order-text" type="number" placeholder="Enter service price" {...register("price")} />
              <br />
              <textarea className="place-Order-text" placeholder="Enter service discription" {...register("discription")}/>
              <br />
              <input className="place-Order-text" placeholder="Enter service image url" {...register("image")} />
              <br />
              <input className="bg-primary px-3 py-2 text-white fw-bolder form-control place-Order-text mx-auto" type="submit" />
            </form>
        </div>
    );
};

export default AddService;