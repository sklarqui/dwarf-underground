import React from 'react'
import './OtherArticles.css'
import MiniArticle from './MiniArticle'
class OtherArticles extends React.Component{

render(){

return(
<div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <MiniArticle />
            
          </div>
);



}

}
export default OtherArticles