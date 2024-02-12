import React from 'react'
import img1 from '../Image/aboutimg.jpg'
import Footer from '../Inc/Footer'

function About() {
  return (
    <div>
    <section>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={img1}  class="d-block w-100"  style={{height:'400px'}} alt="..."/>
       <div class='container '>
          <div class='row'>
            <div class='col-md-4'>
                <div class="carousel-caption  justify-content-center ">
                  
                </div>
             </div>
           </div>
       </div>
    </div>
    
  </div>
  
</div>
 </section>
 <section class='abb'>
    <div class='container'>
        <h5 className='heading'>About us</h5>
        <p className='p1'>Organization's Name is a humanitarian initiative committed to making a positive
impact on the world. Founded on the principles of empathy, solidarity, and
sustainable development, we strive to address the most pressing challenges
facing communities around the globe.
Our Focus Areas</p>
       <h5 className='main'>Education for All</h5>
       <p className='p1'>We believe in the transformative power of education. Our programs aim to break
the cycle of poverty by providing access to quality education, scholarships, ang
vocational training. Together, we can empower the next generation of leaders
and change-makers.</p>
        <h5 className='main'>Healthcare Access</h5>
        <p className='p1'>Health is a fundamental human right. Through our healthcare initiatives, we
work to ensure that communities have access to essential medical services,
preventive care, and health education. We believe that a healthy population is
the cornerstone of thriving societies</p>
         <h5 className='main'>How You Can Make a Difference</h5>
         <p className='p1'>We believe in the collective power of individuals coming together for a
common cause. Join us on our mission to create positive change by:<br/>
   * Donating: Your contribution can make a significant impact on the lives of
those in need. Every donation, no matter the size, brings us one step
closer to achieving our goals.<br/>
* Volunteering: Get involved directly in our projects and initiatives. Whether
you're a skilled professional or passionate about making a difference,
there's a place for you in our volunteer community.<br/>
* Advocating: Spread the word about our mission. Advocate for the rights
and well-being of those who are marginalized and underserved. Together,
we can amplify our impact.</p>
  <h5 className='main'>Transparency and Accountability</h5>
  <p className='p1'>At [Your Organization's Name], we are committed to transparency and
accountability. Our financial records, project reports, and impact
assessments are openly accessible, ensuring that our supporters have
full visibility into the use of their contributions.
Join us in creating a world where compassion knows no borders, and
every person has the opportunity to thrive. Together, we can make a
lasting impact and build a future filled with hope and dignity.</p>
    </div>
 </section>
 <section >
  <div class='container '    >
    <div class='row d-flex justify-content-center'>
      <div class='col-md-6' >
        
        <h5 className='ma-head' >How can you contribute to us</h5>
          <p className='ppp'>humanitarian initiative committed to making a positive
impact on the world. Founded on the principles of empathy
solidarity, and sustainable development, we strive to
address the most pressing challenges facing communities
around the globe.</p>
<div class='container'>
      <div class='col-md-12 text-center'>
      <a class="btn btn-primary text-center border-0" href="#" role="button" style={{width:'150px',borderRadius:'50px',backgroundColor:'yellow'}}>Contact us</a>
      </div>
      </div><br/>
</div>
      </div>
    </div>
    
  
 </section>
 <Footer/> 
    </div>
  )
}

export default About