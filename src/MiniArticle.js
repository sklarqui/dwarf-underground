import React from 'react'
import './MainArticle.css'
class MiniArticle extends React.Component{
constructor(){
super()
this.state = {
 links:[{link: 'http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg', description:'gold',paragraph:'Mine 20% more gold with One Weird Trick'},
 {link:"https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif", description:"orc",paragraph:"Single Orcs in Indianapolis"},
 {link:"https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg", description:"mountain",paragraph:"You won't believe what's under this mountain"},
 {link:"http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg", description:"hobbit",paragraph:"Surprise for Indiana Hobbits born before 1999"}],
}
}

renderMini(ad,i){
    return(
       <div key={i} className="small-6 medium-3 columns other-article">
              <a  href="#">
                <img src={ad.link} alt={ad.decription} />
                <p>{ad.paragraph}</p>
              </a> 
            </div>
    )
}

render(){
return(
    <div> 
{ this.state.links.map(this.renderMini) }</div>
)

}
}

export default MiniArticle