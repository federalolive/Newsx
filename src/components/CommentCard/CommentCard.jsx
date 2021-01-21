import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import * as articleAPI from '../../services/article-api'
import ReplyCard from '../ReplyCard/ReplyCard';

class CommentCard extends Component {
    state = { 
        formData: {
            postedBy: this.props.user.name, 
            postedByID: this.props.user._id, 
            content: ''},
        comment: [],
     }
    
    async componentDidMount(){
        const comment = await articleAPI.getComment(this.props.comment._id)
        this.setState({ comment: comment})
    } 

    handleSubmit = e => {
        e.preventDefault()
        this.handleAddReply(this.state)
        this.setState({formData:{content: ''}})
    }

    handleChange = e =>{
        const formData = {...this.state.formData, [e.target.name]:e.target.value}
        this.setState({
            formData:formData,
        })
    }
    
    handleAddReply = async (idandFormData) => {
        const updatedComment = await articleAPI.addReply(idandFormData)
        this.setState({comment: updatedComment})
    }

     render (){
         const comment = this.state.comment
         const commenterId = comment.postedByID
         return(
         <>
            <p>{comment.content}</p>
            <p>PostedBy: <Link
                to={{
                    pathname: '/profile/article/commenter',
                    state: {commenterId}
                }}
            >{comment.postedBy}</Link>
            </p>


          <div>
                    <p>Reply To This Comment</p>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="content"
                        value={this.state.formData.content}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Reply</button>
                </form>
                <div>

                    {comment.replies ? comment.replies.map((reply)=>
                    <ReplyCard 
                        reply={reply}
                        user={this.props.user}
                        key={reply._id}
                    />
                    )
                    :
                    <p>Loading Replies</p>
                    }
                
                </div>   
                </div>
         </>
         )
        }
    }

    export default CommentCard