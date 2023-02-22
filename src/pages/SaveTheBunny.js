import React from 'react'
import SingleWork from '../components/SingleWork'
import savethebunny from '../images/desktop-savethebunny.png'

export default function SaveTheBunny() {
  return (
    <SingleWork 
      title="Save the Bunny"
      image={savethebunny}
      github='https://github.com/hyeriyoon/savethebunny.git'
      project='https://www.haileeyoon.com/savethebunny'
      subtitle='Javascript Game Project'
      tools="HTML, CSS, JavaScript, Adobe XD, Adobe Photoshop"
      overview='Save the Bunny is JavaScript game built using HTML, CSS and JavaScript. User can select 3 level and reset and replay the game.'
    />
  )
}
