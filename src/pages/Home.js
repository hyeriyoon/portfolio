import React from 'react'
import Typical from 'react-typical';

export default function Home() {
  return (
      <section className='home-intro' >
        {/* <div className='home-image'></div> */}
        <div className='home-p'>
          <p className='p1'>Hello, I'm </p>
            <Typical
              loop={Infinity}
              steps={[
                'Hyeri Yoon.',2500,
                'Web Developer.',2500,
                'Web Designer.',2500,
              ]}
            />
        </div>
      </section>   
  )
}
