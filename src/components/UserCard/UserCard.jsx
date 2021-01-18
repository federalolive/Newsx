import React from 'react';
import { Link } from 'react-router-dom'

const UserCard = ({ user }) => {
    return ( 
        <div>
            <p>{ user.name }</p>
            <Link to={{
                pathname:'/users/show',
                state: { user }
            }}
            > View Profile
            </Link>
        </div>
     );
}
 
export default UserCard;