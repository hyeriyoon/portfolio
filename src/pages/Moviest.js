import React from 'react'
import SingleWork from '../components/SingleWork'
import moviest from '../images/desktop-moviest.png';

export default function Moviest() {
  return (
      <SingleWork 
        title="Movie St."
        image={moviest}
        github='https://github.com/hyeriyoon/moviest.git'
        project='https://www.haileeyoon.com/moviest'
        subtitle='Movie Database App'
        tools="React, SASS, Git, Adobe XD, Adobe Photoshop"
        overview='Movie St. is a web application listing movies that allows users browse and track their favourite movies by popularity, currently playing, and ratings.'
      />
  )
}
