import React, { useState } from 'react';

const PersonCard = (props) => {
    let {lastName, firstName, hairColor} = props;
    let [age, setAge] = useState(props.age)

    const birthday = ()=>{
        let newAge = age+1
        setAge(newAge)
    }

    return (
        <div>
            <h4>{lastName}, {firstName}</h4>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={birthday}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}

export default PersonCard;