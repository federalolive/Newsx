import React, { Component } from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import './PersonalProfilePage.css'


class PersonalProfilePage extends Component {
    render() { 
        const user = this.props.user
        const userArticleCollection = this.props.userArticleCollection
        return ( 
            <>
             <h4>Your Bio:</h4> {user.bio ? 
                <h5>{user.bio}</h5>
                :
                <h5>Tell us and other users a bit about yourself, share a social handle, or leave us with a favorite quote!</h5>
            }
            <hr />
            <h4>Bookmarks:</h4>
            {userArticleCollection.map((article) => 
                <ArticleCard 
                article = { article }
                />
                
                )}
            </>
        )
    }
}
 
export default PersonalProfilePage;



// Class component: needs to hold state so we can delete, and read

// map over userColelction, and render Article Cards for each item.


// render bio, avatar, if you're signed in, and you're you, render inputs and buttons to update bio and image url




