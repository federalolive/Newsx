import React, { Component } from 'react';
import * as userService from '../../services/userService'
import './CommentLinkedUserProfilePage.css'


class CommentLinkedUserProfilePage extends Component {
    state = { 
        user: []
     }

    async componentDidMount(){
        const user = await userService.getCommenter(this.props.location.state.commenterId)
        this.setState({user: user})
    } 

    render() { 
        return ( 
            <>
            <div>
                {/* conditional rendering of avatar image with default if none provided use ternary */}
                <p>{this.state.user.name}</p>
             {this.state.user.bio 
                ? 
            <p>{this.state.user.bio}</p>
            :
            <p>{this.state.user.name} doesn't trust the internet and thushas opted to not share about themselves</p> 
            }
            </div>
            </>
         );
    }
}
 
export default CommentLinkedUserProfilePage;