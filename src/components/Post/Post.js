import React from 'react';
import './Post.css';
import IconValid from "./svg-icons/IconValid";
import IconComment from "./svg-icons/IconComment";
import IconLike from "./svg-icons/IconLike";
import IconRetweet from "./svg-icons/IconRetweet";
import IconShare from "./svg-icons/IconShare";

function Post(props) {
  return (
    <div className  ="post">
      <img src={props.author.photo} alt="user-avatar" className = "user-avatar" />
      <div className = "post-content">
        <header className="post-header">
          <h3 className = "user-name">{props.author.name}</h3>
          {props.author.isValid && <IconValid className = "valid__icon"/>}   
          <div className = "post-info">
            <span className = "user-nickname">{props.author.nickname}</span>
            <span className = "user-separator">&#8226;</span>
            <span className = "post-date"> {props.date}</span>
          </div>
        </header>
        <main className = "content">
          <p className = "content__message">
              {props.content}
          </p>
            <img src={props.image} alt="post img" className = "content__img" />
        </main>
        <footer className="post-footer">
          <div className="comment">
            <IconComment className ="footer__icon"/>
            <span className = "counter">482</span>          
          </div>
          <div className="retweet">
            <IconRetweet className ="footer__icon"/>
            <span className = "counter">146</span>
          </div>
          <div className="like">
            <IconLike className ="footer__icon"/>
            <span className = "counter">887</span>
          </div>
          <div className="share">
            <IconShare className ="footer__icon"/>
          </div>
        </footer>
      </div>      
    </div>
  );
}

export default Post;