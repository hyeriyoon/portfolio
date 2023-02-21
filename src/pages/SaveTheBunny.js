import React from 'react'
import SingleWork from '../components/SingleWork'
// import tweeling from '../images/desktop-tweeling.png';

export default function SaveTheBunny() {
  return (
    <SingleWork 
      title="Save the Bunny"
      image={tweeling}
      github='https://github.com/hyeriyoon/savethebunny.git'
      project='https://www.haileeyoon.com/savethebunny'
      subtitle='Javascript Game Project'
      tools="HTML, CSS, JavaScript, Adobe XD, Adobe Photoshop"
      // overview=''
    />
  )
}
