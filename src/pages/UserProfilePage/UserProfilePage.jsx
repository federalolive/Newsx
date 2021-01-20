import React, { Component } from 'react';
import "./UserProfilePage.css"


const UserProfilePage = (props) => {
    console.log(props)
    const user = props.location.state.user
    return ( 
        <>
        <div>
                {/* conditional rendering of avatar image with default if none provided use ternary */}
                <p>{user.name}</p>
             {user.bio 
                ? 
            <p>{user.bio}</p>
            :
            <p>{user.name} doesn't trust the internet and thushas opted to not share about themselves</p> 
            }
            </div>
        </>
     );
}

 
export default UserProfilePage;