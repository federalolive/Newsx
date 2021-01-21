import React from 'react';
import { Link } from 'react-router-dom'

const UserCard = ({ user }) => {
    return ( 
        <div>
            <Link to={{
                pathname:'/users/show',
                state: { user }
            }}
            > {user.name}
            </Link>
        </div>
     );
}
 
export default UserCard;