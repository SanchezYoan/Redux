import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostLike } from "../action/post.action";
import { addUserLike } from "../action/user.action";

const Like = ({ post }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  const handleLike = () => {
    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      id: post.id,
      likes: post.likes + 1,
    };

    const userData = {
      title: user.title,
      author: user.author,
      content: user.content,
      id: user.id,
      likes: user.likes + 1,
    };
    dispatch(addPostLike(postData));
    dispatch(addUserLike(userData));
  };
  return (
    <div>
      <img
        src="./icons/clap.png"
        className="clap"
        alt="clap"
        onClick={() => handleLike()}
      />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
