import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import './PersonalProfilePage.css'
import * as userService from '../../services/userService'


class PersonalProfilePage extends Component {
    state = {
        user: [],
    }

    async componentDidMount(){
        const user = await userService.getUser()
        this.setState({user: user})
    }

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
            </>
        )
    }
}
 
export default PersonalProfilePage;



// Class component: needs to hold state so we can delete, and read

// map over userColelction, and render Article Cards for each item.


// render bio, avatar, if you're signed in, and you're you, render inputs and buttons to update bio and image url




