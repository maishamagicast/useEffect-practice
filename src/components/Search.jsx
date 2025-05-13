

import React, { useEffect } from 'react';
import UserCard from './UserCard';

export default function Search({users,setRandomUser}) {



const getRandomUser =()=>{
    const randomIndex= Math.floor(Math.random()*users.length)
    console.log(randomIndex)
    setRandomUser(users[randomIndex])
    console.log(users[randomIndex])
    // setShowRandomUser(true)
    

}

useEffect(()=>{
    if (users.length > 0) {
        getRandomUser();
    }
},['https://jsonplaceholder.typicode.com/users/'])

    return (
        <div className="search">
            <input className="search-number" type="button" value="Get Random User" onClick={getRandomUser}/>
            
        </div>
    )
}