import React from 'react'
import Skill from '../components/Skill';

export default function About() {
  return (
    <section id="about">
      
        <article className='about-story'>
          <h2>Story</h2>
          <p>
          Hi! My name is Hyeri Yoon. I am a passionate front end developer and designer who like to code things from scratch, and enjoy bringing ideas to life in the browser. 
          </p>
        </article>
         
          <article className='about-skills'>
            <h2>Skills</h2>
            <Skill  title="Web Development"
                    tools="HTML, CSS, JavaScript, jQuery, React, Redux, Sass, PHP, WordPress, Shopify, Liquid, NPM"
            />
            <Skill  title="Design"
                    tools="Adobe XD, Adobe Photoshop, Adobe Illustrator, Figma, InVision"
            />
            <Skill  title="Others"
                    tools="Git/GitHub, SQL (MySQL/SQL Server)"
            />
          </article>
        
    </section>
  )
}
