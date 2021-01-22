import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './ReplyCard.css'

const ReplyCard = (props) => {

    const commenterId = props.reply.postedBy
    return ( 
        <>
        <p className="replies-name">{props.reply.postedBy} replies with:</p>
        <p>"{props.reply.content}"</p>
            {/* <Link
                to={{
                    pathname: '/profile/article/commenter',
                    state: {commenterId}
                }}
            >{props.reply.postedBy}</Link></p> */}

        </>
     );
}
 
export default ReplyCard;