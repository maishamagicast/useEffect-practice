import UserCard from './UserCard'
import React, {  useState } from 'react';
import Search from './Search'

export default function UserList({users}) {
    const [randomUser,setRandomUser]=useState(null);
    // const [showRandomUser,setShowRandomUser]=useState(false);

    return (
        <>
            <Search 
            users={users}
            setRandomUser={setRandomUser}
            // setShowRandomUser={setShowRandomUser}
            
            />
            <div className="user-list">
                 {randomUser ? (
          <UserCard {...randomUser} />
        ) : (
          users.map((user) => <UserCard key={user.id} {...user} />)
        )}
            </div>
        </>
    )
}
