import React from 'react'
import './MainArticle.css'
import AboutAuthor from './AboutAuthor'
import ArticleBody from './ArticleBody'
class MainArticle extends React.Component{
  constructor(){
super()
this.state={
comments:[],

}

  }
commentSubmit(ev){
  ev.preventDefault()
 
  const comments=[...this.state.comments]
  {comments.push(this.commentField)}
  this.setState({comments})
  ev.currentTarget.reset()
}
addComment(){

}
render(){
return(
    <div className="large-8 medium-12 columns article">
    <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <AboutAuthor />
           <ArticleBody />
            <div className="article-links">
              <a className="article-link" href="#">
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
              </a>
              <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
              </a>
            </div>
            <div>
              <form onSubmit={this.commentSubmit.bind(this)}>
            <label htmlFor="article-comment">Leave a Comment</label>
            <input id="article-comment" type="text" ref={(input) => this.commentField=input}/>
            <button className="button" type="submit">hey</button>
              </form>
            </div>
          
           <ul id="comment-list">

           </ul>
          </div>
)
}
}
export default MainArticle