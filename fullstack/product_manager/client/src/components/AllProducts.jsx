import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const AllProducts = (props) => {

    const [allProducts, setAllProducts] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log("response: ", res)
                setAllProducts(res.data.product)
            })
            .catch(err => {
                console.log("errrrr", err)
            })
    }, [deleteToggle, props.newProductToggle])


    const deleteProduct = (id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            console.log("res--->", res)
            setDeleteToggle(!deleteToggle)
        })
        .catch(err=>console.log(err))
    }


    return (
        <div>
            <h2>All the Products</h2>
            <div className="cards">
            {
                allProducts.map((productObj, idx) => {
                    return (
                        <div key = {productObj._id} className="card mx-auto mb-2" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title"> <Link to={`/products/${productObj._id}`}>{productObj.title}</Link></h5>
                                <p><Link to={`/edit/${productObj._id}`} className="btn btn-info">Edit {productObj.title}</Link></p>
                                <button onClick={(e)=>{deleteProduct(productObj._id)}} className="btn btn-danger">Delete {productObj.title}</button>
                            </div>
                        </div>
                    )
                })
            }

            </div>
        </div>
    );
};



export default AllProducts;