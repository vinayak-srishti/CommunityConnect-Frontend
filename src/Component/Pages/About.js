import React from 'react'
import Footer from '../Header&Footer/Footer'
import img1 from '../Images/aboutimg.jpg'
import { Link } from 'react-router-dom'
import './About.css'
import img from '../Images/5299.jpg'
import img3 from '../Images/5454.jpg'
function About() {
  return (
    <div>
      <div className="about-us-container">
        <section className="about-us-hero">
          <div className="hero-content">
            <h1>About Us</h1>
            <p>
              We are dedicated to bridging the gap between those who need help and those who can offer it.
              Our platform empowers orphanages to request support and enables compassionate individuals
              to make a difference by donating.
            </p>
          </div>
        </section>

        <section className="about-us-services">
          <div className="service-card">
            <img src={img} alt="For Donors" className="service-image" style={{ marginTop: '30px' }} />
            <h2>For Donors</h2>
            <p>
              Support orphanages with your generous donations and help make a positive impact in children's lives.
            </p>

          </div>

          <div className="service-card">
            <img src={img3} alt="For Orphanages" className="service-image" />
            <h2>For Orphanages</h2>
            <p>
              Request the help you need to care for children and provide them with a brighter future.
            </p>

          </div>
        </section>

        <section className="about-us-cta">
          <h2>Join Us in Making a Difference</h2>
          <p>
            Together, we can create a positive impact and bring hope to those who need it most.
          </p>
          <div className="cta-buttons">

          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default About