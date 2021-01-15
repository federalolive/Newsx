import React, { Component } from 'react';
import "./UserProfilePage.css"


const UserProfilePage = (props) => {
    console.log(props)
    return ( 
        <>
        <p>{props.location.state.user.name}</p>
        </>
     );
}

 
export default UserProfilePage;