import React from 'react'
import "./portfolio.css"

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data=[
  {
  id:1,
  image:IMG1,
  title: 'Chat GPT Frontend',
  github:'https://github.com/vupadhayayx86/gpt3frontend/tree/main',
  demo:'https://gpt3-yw64.onrender.com/'
},
{
  id:2,
  image:IMG2,
  title: 'Gericht Fine Dinning Restaurant',
  github:'https://github.com/vupadhayayx86/restaurantfrontend/tree/main',
  demo:'https://gerichtrestaurant.onrender.com/'
},
{
  id:3,
  image:IMG3,
  title: 'Simple DOJO Blog in React JS',
  github:'https://github.com/vupadhayayx86/simpleblogsite/tree/main',
  demo:'https://simpleblog-h27x.onrender.com/'
},
{
  id:4,
  image:IMG4,
  title: 'Mix-or-Match Game in Vanilla JS',
  github:'https://github.com/vupadhayayx86/mixmatchgame',
  demo:'https://vupadhayayx86.github.io/mixmatchgame/'
},
{
  id:5,
  image:IMG5,
  title: 'Tindog Dating in Bootstarp',
  github:'https://github.com/vupadhayayx86/tindog',
  demo:'https://vupadhayayx86.github.io/tindog/'
},
{
  id:6,
  image:IMG6,
  title: 'WORDLE lingo game in React JS',
  github:'https://github.com/vupadhayayx86/wordlegameapp/tree/main',
  demo:'https://wordlegameapp.onrender.com/'
}
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo})=>{
            return (
              <article key={id} className='portfolio_items'>
              <div className="portfolio_item-image">
              <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
              <a href={github} className='btn' target="_blank">Github</a>
              <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
              </div>
          </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio