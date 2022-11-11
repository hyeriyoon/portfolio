import React from 'react'
import Skill from '../components/Skill';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function About() {
  return (
    <section id="about">
      
        <article className='about-story'>
          <h2>Story</h2>
          <p>Praesent at massa id nisl rhoncus malesuada a eu dui. 
            Curabitur eget rhoncus odio. Pellentesque porta orci 
            maximus turpis porta ullamcorper. Ut in dolor viverra, 
            viverra neque in, fermentum dolor. 
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
