import React from 'react';
import "./UserProfilePage.css"


const UserProfilePage = (props) => {
    const user = props.location.state.user
    return ( 
        <div>

<div className="profile-div">
  <div className="row">
    <div className="col s12 m7">
      <div className="card userprofile-card" style={{ width: 400 }}>
            <h2 className="name">{user.name}</h2>
                <div className="bio-info">
                    <div id="user-avatar">
                    {user.avatar ? <img src={user.avatar} style={{width: 100}} alt="user image"/> : <p></p> }
                    </div>

                    <div id="bio">
                    {user.bio 
                    ? 
                    <p>{user.bio}</p>
                    :
                    <p>{user.name} doesn't trust the internet and thus has opted to not share about themselves</p> 
                }
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
     );
}

 
export default UserProfilePage;