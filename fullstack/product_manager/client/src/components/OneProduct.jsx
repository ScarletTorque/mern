import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const OneProduct = () => {

    const { _id } = useParams();

    const history = useHistory();


    //state variable to store the one ninja information we get back from the call
    const [productInfo, setProductInfo] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(res=>{
            console.log(res);
            setProductInfo(res.data.product)
        })
        .catch(err=>console.log(err))
    }, [])


    //delete product
    const deleteProduct = ()=>{
        axios.delete(`http://localhost:8000/api/products/${_id}`)
        .then(res=>{
            console.log("res--->", res)
            history.push("/") //redirect after updating form
        })
        .catch(err=>console.log(err))
    }


    return (
        <div>
            <h3>Title: {productInfo.title}</h3>
            <h4>Price: ${productInfo.price}</h4>
            <h4>Description: {productInfo.description}</h4>
            <button onClick={deleteProduct} className="btn btn-danger">Delete {productInfo.title}</button>
        </div>
    );
};

export default OneProduct;