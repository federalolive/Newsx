import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const ReplyCard = (props) => {

    const commenterId = props.reply.postedBy
    return ( 
        <>
        <p>{props.reply.content}</p>
        <p>Posted By: <Link
                to={{
                    pathname: '/profile/article/commenter',
                    state: {commenterId}
                }}
            >{props.reply.postedBy}</Link></p>

        </>
     );
}
 
export default ReplyCard;

// class ReplyCard extends Component {
//     state = { 
//         comment: []
//      }
//     render() { 
//         return (  );
//     }
// }
 
// export default ReplyCard;