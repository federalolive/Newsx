import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ReplyCard.css";

const ReplyCard = (props) => {
  const commenterId = props.reply.postedByID;
  return (
    <>
      <p className="replies-name">
        <Link
          to={{
            pathname: "/profile/article/commenter",
            state: { commenterId },
          }}
        >
          {props.reply.postedBy}
        </Link>{" "}
        replies with:
      </p>
      <p>"{props.reply.content}"</p>
    </>
  );
};

<<<<<<< HEAD
export default ReplyCard;
=======
export default ReplyCard;
>>>>>>> post-project-styling
