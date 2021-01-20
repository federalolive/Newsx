import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// render name, pass the userID String, so we can link to commenter's profile, message.
// reply form?

class CommentCard extends Component {
    state = { 
        formData: {postedBy:this.props.user.name, postedByID:this.props.user._id, content:''},
        replies: [],

     }

     render (){
         const comment = this.props.comment
         const commenterId = comment.postedByID
         return(
         <>
            <p>{comment.content}</p>
            <p>{comment.postedBy}</p>
            <Link
                to={{
                    pathname: '/profile/article/commenter',
                    state: {commenterId}
                }}
            >{comment.postedBy}</Link>
         </>
         )
        }
    }

    export default CommentCard