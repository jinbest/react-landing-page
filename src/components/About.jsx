import React from 'react'
import aboutImg from '../img/watch-02.jpg'

export default function About() {
  return (
    <section class='about-section' id='about'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-6 d-flex'>
            <div class='about-img'>
              <img src={aboutImg} alt='product' />
            </div>
          </div>

          <div class='col-lg-6 order-first order-lg-last'>
            <div class='section-title'>
              <h1 class='title'>About Product</h1>
              <h2 class='subtitle'>
                Awesome digital watch can make your life easier
              </h2>
            </div>

            <div class='about-content'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>

              <ul class='list-unstyled'>
                <li>
                  <i class='fas fa-check'></i>
                  Our all products are high qualitye
                </li>
                <li>
                  <i class='fas fa-check'></i>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li>
                  <i class='fas fa-check'></i>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li>
                  <i class='fas fa-check'></i>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
