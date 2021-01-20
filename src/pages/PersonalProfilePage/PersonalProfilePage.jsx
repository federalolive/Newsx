import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import './PersonalProfilePage.css'
import * as userService from '../../services/userService'


class PersonalProfilePage extends Component {
    state = {
        user: [],
        // invalidForm: false,
        // formData: this.props.user
    }

    async componentDidMount(){
        const user = await userService.getUser()
        this.setState({user: user})
    }

    // formRef = React.createRef()

    // handleSubmit = e => {
    //     e.preventDefault()
    //     this.props.handleUpdateUser(this.state.formData)
    // }

    // handleChange = e => {
    //     const formData = {...this.state.formData, [e.target.name]: e.target.value}
    //     this.setState({
    //         formData: formData,
    //         invalidForm: !this.formRef.current.checkValidity()
    //     })
    // }


    render() { 
        const user = this.state.user
        const userArticleCollection = this.props.userArticleCollection
        return ( 
            <>
             <h4>Your Bio:</h4> {user.bio ? 
                <h5>{user.bio}</h5>
                :
                <h5>Tell us and other users a bit about yourself, share a social handle, or leave us with a favorite quote!</h5>
            }
            <Link to={{
                pathname: '/profile/edit',
                state: {user}
            }}>Update Profile Info</Link>
            <hr />
            <h4>Bookmarks:</h4>
            <div className="bookmarks">
            {userArticleCollection.map((article) => 
                <ArticleCard 
                article = { article }
                handleDeleteArticle={this.props.handleDeleteArticle}
                />
                )}
                </div>
                <div>
                {/* <form ref={this.formRef} onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        type="text"
                        name="avatar"
                        value={this.state.formData.avatar}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="">Profile Image Url</label>
                </div>
                <div>
                    <input 
                        type="text"
                        name="bio"
                        value={this.state.formData.bio}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="">Personal Bio</label>
                </div>
                <div>
                    <button 
                        type="submit"
                        disabled={this.state.invalidForm}
                    >Update Profile</button>
                    <Link
                        to={{
                            pathname: '/profile'
                        }}
                    >
                            Cancel
                    </Link>
                </div>
            </form> */}
                </div>
            </>
        )
    }
}
 
export default PersonalProfilePage;



// Class component: needs to hold state so we can delete, and read

// map over userColelction, and render Article Cards for each item.


// render bio, avatar, if you're signed in, and you're you, render inputs and buttons to update bio and image url




