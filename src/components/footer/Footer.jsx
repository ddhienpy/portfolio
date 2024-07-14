import React from 'react'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className="footer__socials">
                <a href="https://github.com/ddhienpy" className="footer__socials-link" target="_blank" rel="noopener">
                    <FaGithub />
                </a>
                <a href="https://www.facebook.com/ddhienpy" className="footer__socials-link" target="_blank" rel="noopener">
                    <FaFacebook />
                </a>
                <a href="https://vn.linkedin.com/in/hiendd" className="footer__socials-link" target="_blank" rel="noopener">
                    <FaLinkedinIn />
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