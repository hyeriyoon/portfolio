import React from 'react'
import SingleWork from '../components/SingleWork'
import portfolio from '../images/destop-portfolio.png';

export default function () {
  return (
    <SingleWork 
      title="Portfolio"
      image={portfolio}
      github=''
      project='https://www.haileeyoon.com/portfolio'
      subtitle='Personal Portfolio'
      tools="React, Git, Adobe XD, Adobe Photoshop"
      overview='My portfolio website is built to showcase my development and design works using React.  
      
      This portfolio website is created to  fulfill career goals and to showcase and emphasize the appropriate information, and then develop the website according to field-specific best practices and standards.'
    />
  )
}
