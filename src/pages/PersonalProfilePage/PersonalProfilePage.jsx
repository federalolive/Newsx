import React, { Component } from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { getArticleCollection } from '../../services/userService';
import './PersonalProfilePage.css'

class PersonalProfilePage extends Component {
    render() { 
        // const user = this.props.user
        const userArticleCollection = this.props.userArticleCollection
        return ( 
            <>
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




