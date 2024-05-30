import React from 'react'
import profileImg from '../../assets/profile-img.png'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'
import { FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa'
import './home.css'

const Home = () => {
  return (
    <section className="home" id='home'>
      <div className="home__wrraper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>HIEN</span> DINH
          </h1>

          <p className="home__job">
            <span className="text-cs">I Am</span> <b>Web Developer</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                {new Date().getFullYear() - 2020} <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Years of <span>Experience</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">
                10 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Completed <span>Projects</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            I’m a web developer with over {new Date().getFullYear() - 2020} years of experience. I love to learn new things, especially related to
            frontend or backend stacks. In the coming time, I will try my best to put myself at a higher level
            and contribute to the development of the company.
          </p>

          <div className="home__socials">
            <a href="" className="home__socials-link">
              <FaTwitter />
            </a>
            <a href="" className="home__socials-link">
              <FaDribbble />
            </a>
            <a href="" className="home__socials-link">
              <FaBehance />
            </a>
          </div>

          <div className="home__btns">
            <a href="" className="btn text-cs">
              Download CV
            </a>

            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home