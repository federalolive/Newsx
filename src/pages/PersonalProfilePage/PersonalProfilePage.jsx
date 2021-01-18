import React, { Component } from 'react';
import './PersonalProfilePage.css'
import ArticleCard from '../../components/ArticleCard/ArticleCard'

class PersonalProfilePage extends Component {
    state = { 

     }

    render() { 
        const user = this.props.user
        const userArticleCollection = this.props.userArticleCollection
        return ( 
            <>
                <h1>Personal Profile</h1>
                <div>
                    Your Bio : {user.bio 
                    ? 
                    <h5>{user.bio}</h5>
                    :
                    <h5>Tell us and other users a bit about yourself, share a social handle, or leave us with a favorite quote!</h5>
                    }
                </div>
                {userArticleCollection.map((article)=>
                    <ArticleCard 
                        article={article}
                        user={this.props.user}
                    />
                )}
                
            </>
         );
    }
}
 
export default PersonalProfilePage;



// Class component: needs to hold state so we can delete, and read

// map over userColelction, and render Article Cards for each item.


// render bio, avatar, if you're signed in, and you're you, render inputs and buttons to update bio and image url




