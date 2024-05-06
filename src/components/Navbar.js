import React, { useEffect, useState } from 'react'
import  "../style/Navbar.css";
import logo from "../assets/logo/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';
export default function Navbar() {

    const[sidenav, setSidenav] = useState(false);

    const[sticky, setSticky] = useState(false);

    const menuIcon = <FontAwesomeIcon icon={faBars} />

    const sidenavShow = ()=>{
        setSidenav(!sidenav);
    }

    useEffect(()=>{
        const handleScroll = () =>{
            setSticky(window.scrollY > 20);
        }
        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener('scroll', handleScroll);
    })

  return (
    <header id='site_header' className={`${sticky ? 'sticky':''}`}>
        <div className='container'>
            <nav className='navbar' id='Navbar'>
                <div className='navbar_brand'>
                    <a href='/'>
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className='navbar_toggler' onClick={sidenavShow}>
                {menuIcon}
                </div>
                <div className={`menu_items ${sidenav===true? ' active':''}`}>
                    <ul>
                        <li>
                            <Link activeClass='active' to='home' spy="true" smooth="true">Home</Link>
                        </li>
                        <li>
                            <Link  to='about' spy="true" smooth="true">About Us</Link>
                        </li>
                        <li>
                            <Link  to='service' spy="true" smooth="true">Services</Link>
                        </li>
                         <li>
                            <Link  to='blog' spy="true" smooth="true">Blog</Link>
                        </li>
                        <li>
                            <Link  to='contact' spy="true" smooth="true">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

  )
}
