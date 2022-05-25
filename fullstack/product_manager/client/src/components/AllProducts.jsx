import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log("response: ", res)
                setAllProducts(res.data.product)
            })
            .catch(err => {
                console.log("errrrr", err)
            })
    }, [])




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