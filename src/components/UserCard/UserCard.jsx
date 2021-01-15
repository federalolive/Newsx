import React from 'react';
import { Link } from 'react-router-dom'

const UserCard = ({ user }) => {
    return ( 
        <>
            <p>{ user.name }</p>
            <Link to={{
                pathname:'/users/show',
                state: { user }
            }}
            >
                View Profile
            </Link>
        </>
     );
}
 
export default UserCard;