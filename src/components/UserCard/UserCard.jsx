import React from 'react';
import { Link } from 'react-router-dom'

const UserCard = (props) => {
    return ( 
        <>
            <p>{ props.user.name }</p>
            <Link to={{
                pathname:'/users/show',
                // state: { user }
            }}
            >
                View Profile
            </Link>
        </>
     );
}
 
export default UserCard;