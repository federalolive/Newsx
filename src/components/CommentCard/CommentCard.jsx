import React, { Component } from 'react';

// render name, pass the userID String, so we can link to commenter's profile, message.
// reply form?

class CommentCard extends Component {
    state = { 
        formData: {postedBy:this.props.user.name, postedByID:this.props.user._id, content:''},
        replies: [],

     }

     render (){
         return(
         <>
         </>
         )
        }
    }

    export default CommentCard