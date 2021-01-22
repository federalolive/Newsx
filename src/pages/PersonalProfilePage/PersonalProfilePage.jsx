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

    handleDeleteArticle = async id =>{
       const user = await userService.removeArticleFromCollection(id)
        this.setState(state=>({
          user: user
        }))
      }

    render() { 
        const user = this.state.user
        const userArticleCollection = this.state.user.articleCollection
        
        return ( 
            <div className="profile-div">
             <div class="card personal-card">
             <h1 className="personal-name">{user.name}</h1> 
             {user.avatar ? <img id="profile-avatar" src={user.avatar} alt="user image" />  : <img src="" /> }
             {user.bio ? 
                <h5>Bio: {user.bio}</h5>
                :
                <h5>Tell us and other users a bit about yourself, share a social handle, or leave us with a favorite quote!</h5>
            }
        
            <Link to={{
                pathname: '/profile/edit',
                state: {user}
            }}><button>Update Profile Info</button></Link>
            </div>
            <hr />
            
            <h4>Your bookmarks:</h4>
            <div className="bookmarks">
            {userArticleCollection 
                ? 
            userArticleCollection.map((article) => 
                <ArticleCard 
                article = { article }
                key={article._id}
                handleDeleteArticle={this.handleDeleteArticle}
                />
                )
                : 
                <h1>Loading Articles</h1>
            }
                </div>
            </div>
        )
    }
}
 
export default PersonalProfilePage;


