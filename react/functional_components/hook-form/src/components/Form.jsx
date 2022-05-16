import React, {useState} from 'react';


const Form = ()=>{
    let [firstName, setfirstName] = useState("");
    let [lastName, setlastName] = useState("");
    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");
    let [confirmPassword, setconfirmPassword] = useState("");


    return(
        <>
        <h3>Form</h3>
        <form>
            <div className='from-group'>
                <label htmlFor="">First Name</label>
                <input type="text" onChange={(e)=>setfirstName(e.target.value)} name="" id="" className="form-control" />
            </div>
            <div className='from-group'>
                <label htmlFor="">Last Name</label>
                <input type="text" onChange={(e)=>setlastName(e.target.value)} name="" id="" className="form-control" />
            </div>
            <div className='from-group'>
                <label htmlFor="">Email</label>
                <input type="text" onChange={(e)=>setemail(e.target.value)} name="" id="" className="form-control" />
            </div>
            <div className='from-group'>
                <label htmlFor="">Password</label>
                <input type="password" onChange={(e)=>setpassword(e.target.value)} name="" id="" className="form-control" />
            </div>
            <div className='from-group'>
                <label htmlFor="">Confirm Password</label>
                <input type="password" onChange={(e)=>setconfirmPassword(e.target.value)} name="" id="" className="form-control" />
            </div>
        </form>
        <h3>Your Form Data:</h3>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        </>
    )
}


export default Form;