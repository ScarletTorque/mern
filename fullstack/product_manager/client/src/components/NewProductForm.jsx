import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const NewProductForm = (props) => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");

    //state variable to store validation errors inside of
    let[errors, setErrors] = useState({})

    const history = useHistory();

    //submithandler
    const addProduct = (e)=>{
        e.preventDefault();

        let formInfo = {title, price, description}

        axios.post("http://localhost:8000/api/products", formInfo)
        .then(res=>{
            console.log("response after posting form ", res)

            if(res.data.error){
                //if statement means if there are errors and there are validation errors we need to save. then save those validations errors into state
                setErrors(res.data.error.errors);
            }
            else{
                //clear out the state variables to clear out the form
                setTitle("");
                setPrice("");
                setDescription("");

                props.setNewProductToggle(!props.NewProductToggle)

                history.push("/") //redirect after updating form

            }
        })
        .catch(err=>console.log("errrr", err))

    }




    return (
        <div>
            <h3>Create Product</h3>
            <form onSubmit={addProduct}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control" value={title} />
                    <p className="text-danger">{errors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="number" step={.01} onChange={(e)=>setPrice(e.target.value)} className="form-control" value={price}/>
                    <p className="text-danger">{errors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control" value={description}/>
                    <p className="text-danger">{errors.description?.message}</p>
                </div>
                <input type="submit" value="Add Product" className="btn btun-success mt-2" />
            </form>
        </div>
    );
};

export default NewProductForm;