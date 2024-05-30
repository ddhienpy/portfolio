import React from 'react'
import { FaBehance, FaDribbble, FaTwitter } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className="footer__socials">
                <a href="" className="footer__socials-link">
                    <FaTwitter />
                </a>
                <a href="" className="footer__socials-link">
                    <FaDribbble />
                </a>
                <a href="" className="footer__socials-link">
                    <FaBehance />
                </a>
            </div>

            <p className="footer__copyright text-cs">
                {new Date().getFullYear()}. <span>All Right Reserved</span>
            </p>
            <p className="footer__copyright text-cs">
                Developed by <span>HIEN</span>
            </p>
        </div>
    </footer>
  )
}

export default Footer