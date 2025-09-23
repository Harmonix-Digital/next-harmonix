import React from 'react'
import HomeThreeAgents from './HomeThreeAgents'



const HomeHarmonixAbility = () => {
  return (
      <section className="home_harmonix_can_do mt-19">
        <div className="container">
          <h2 data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" className="text-3xl md:text-4xl lg:text-big font-semibold text-center mb-9 text-golden">What Can Harmonix Agents Do?</h2>
          <p data-aos="fade-up" data-aos-offset="200"  data-aos-duration="700" data-aos-delay="0" className="sub_text text-2xl text-center">Discover the specialized AI agents that will transform your business operations.</p>

          <HomeThreeAgents />
        </div>

        

        
      </section>
  )
}

export default HomeHarmonixAbility