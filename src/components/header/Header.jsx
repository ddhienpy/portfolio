import React, { useEffect, useState } from 'react'
import './header.css'
import { links } from '../../Data'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsMoon, BsSun } from 'react-icons/bs'
import { Link, animateScroll } from 'react-scroll'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)
    const [theme, setTheme] = useState('light-theme')

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu)
    }, [showMenu])

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])

    const scrollTop = () => {
        animateScroll.scrollToTop()
    }

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        } else {
            setTheme('light-theme')
        }
    }

    return (
        <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
            <nav className="nav">
                <Link to='/' onClick={scrollTop} className="nav__logo text-cs">HIENDINH</Link>
                <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
                    <div className="nav__data">
                        <ul className="nav__list">
                            {links.map(({ name, path }, index) => {
                                return (
                                    <li className="nav__item" key={index}>
                                        <Link
                                            className="nav__link text-cs"
                                            to={path}
                                            spy={true}
                                            smooth={true}
                                            offset={-140}
                                            duration={300}
                                            onClick={() => setShowMenu(!showMenu)}
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="header__socials">
                            <a href="https://github.com/ddhienpy" className="header__socials-link" target="_blank" rel="noopener">
                                <FaGithub />
                            </a>
                            <a href="https://www.facebook.com/ddhienpy" className="header__socials-link" target="_blank" rel="noopener">
                                <FaFacebook />
                            </a>
                            <a href="https://vn.linkedin.com/in/hiendd" className="header__socials-link" target="_blank" rel="noopener">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="nav__btns">
                    <div className="theme__toggle" onClick={toggleTheme}>
                        {theme === 'light-theme' ? <BsMoon /> : <BsSun /> }
                    </div>
                    <div className={showMenu ? "nav__toggle animate-toggle" : "nav__toggle"} onClick={() => setShowMenu(!showMenu)}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header