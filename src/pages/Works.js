import React from 'react';
import Work from '../components/Work';
import MovieSt from '../images/desktop-moviest.png';
import moviest from '../images/movie-st.png';
import Tweeling from '../images/desktop-tweeling.png';
import Portfolio from '../images/destop-portfolio.png';

export default function Works() {
  return (
    <section className='home-works'>
        <Work 
          image={MovieSt}
          title='Movie st.'
          tools='| React, SASS, Git, Adobe XD, Adobe Photoshop'
          description='Movie St. is a web application listing movies that allows users browse and track their favourite movies by popularity, currently playing, and ratings.'
          single_path="/works/moviest"
        />
        <Work 
          image={Tweeling}
          title='Tweeling Bakery'
          tools='| WordPress, WooCommerce, ,PHP, SASS, Git, Adobe XD, Adobe Photoshop'
          description='This custom ecommerce website is built through WordPress and WooCommerce for a fictional local bakery business, Tweeling Bakery.'
          single_path="/works/tweeling-bakery"
        />
        <Work 
          image={Portfolio}
          title='Portfolio'
          tools='| React, Git, Adobe XD, Adobe Photoshop'
          description='web application built using React that allows users to dynamically browse and track favourite movies based on popularity, rating, and release date.'
          single_path="/works/portfolio"
        />
    </section>
  )
}
