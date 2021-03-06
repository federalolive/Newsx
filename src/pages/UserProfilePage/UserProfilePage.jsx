import React from "react";
import "./UserProfilePage.css";

const UserProfilePage = (props) => {
  const user = props.location.state.user;
  return (
    <div>
      <div className="profile-div">
            <div
              className="userprofile-card card z-depth-5"
              style={{ width: 400 }}
            >
              <h2 className="name">{user.name}</h2>
              <div className="bio-info">
                {user.avatar ? (
                  <div id="user-avatar">
                    <img className="z-depth-1"
                      src={user.avatar}
                      style={{ width: 100 }}
                      alt="user image"
                    />
                  </div>
                ) : (
                  ""
                )}
                <br/>
                <div id="bio">
                  {user.bio ? (
                    <p className="card-content center">{user.bio}</p>
                  ) : (
                    <p className="card-content center">
                      {user.name} doesn't trust the internet and thus has opted
                      to not share about themselves
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default UserProfilePage;
