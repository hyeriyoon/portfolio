import React from 'react'
import SingleWork from '../components/SingleWork'
import tweeling from '../images/desktop-tweeling.png';

export default function TweelingBakery() {
  return (
    <SingleWork 
      title="Tweeling Bakery"
      image={tweeling}
      github='https://github.com/htpwebdesign/tweeling-bakery.git'
      project='https://www.haileeyoon.com/tweeling'
      subtitle='Woocommerce Bakery Website'
      tools="WordPress, WooCommerce, ,PHP, SASS, Git, Adobe XD, Adobe Photoshop"
      overview='This custom ecommerce website is built through WordPress and WooCommerce for a fictional local bakery business, Tweeling Bakery. '
    />
  )
}
