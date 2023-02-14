import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_content">
            <div className="about_me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
          </div>
            

          <div className="about_content">
            {/*Card 1 */}
            <div className="about_cards">
              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>9+ Years Working</small>
              </article>
            
              {/*Card 2 */}

              <article className="about_card">
                <FiUsers className="about_icon" />
                <h5>Clients</h5>
                <small>3+ Worldwide</small>
              </article>
  
            {/*Card 3 */}
              <article className="about_card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
                <small>25+ Completed</small>
              </article>
            
          </div>
            <p>
            Hey! My name is Vishal. I am a front-end developer based in Mumbai, India. I've always been someone who has both a creative and logical side. When I discovered web design in college. I realized it would be the perfect fit. I could use my creative side to design and my logical side to code. I specialize in creating sites for individuals and small businesses. I provide custom designs at affordable prices.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About