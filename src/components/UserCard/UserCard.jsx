import React from 'react';
import { Link } from 'react-router-dom'
import './UserCard.css'

const UserCard = ({ user }) => {
    return ( 
        <div>
           
            <Link className='userlink' to={{
                pathname:'/users/show',
                state: { user }
            }}
            > { user.name }
            </Link> 
           
        </div>
     );
}
 
export default UserCard;