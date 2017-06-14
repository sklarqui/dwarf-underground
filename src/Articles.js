import React from 'react'
import './Articles.css'
import OtherArticles from './OtherArticles'
import MainArticle from './MainArticle'
import SideAdd from './SideAdd'

class Articles extends React.Component{

render(){
return(
<main className="expanded row">
          
        <MainArticle />

<SideAdd />
         
          <OtherArticles />
        </main>
)

}}
export default Articles