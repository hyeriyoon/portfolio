import React from 'react'
import SingleWork from '../components/SingleWork'
import portfolio from '../images/destop-portfolio.png';

export default function () {
  return (
    <SingleWork 
      title="Portfolio"
      image={portfolio}
      github='https://github.com/hyeriyoon/portfolio.git'
      project='https://www.haileeyoon.com'
      subtitle='Personal Portfolio'
      tools="React, Git, Adobe XD, Adobe Photoshop"
      overview='My portfolio website is built to showcase my development and design works and also display my passion and abilities.'
    />
  )
}
