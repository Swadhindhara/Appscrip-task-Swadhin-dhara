'use client'
import React, { useState } from 'react';
import './Header.css';
import Link from 'next/link';

const Header = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        if(menu === false){
            setMenu(true);
            document.body.style.overflow = 'hidden';
        }else{
            setMenu(false);
            document.body.style.overflow = 'scroll';
        }
    }
    return (
        <div className="header_container">
            <div className="container">
                <header>
                    <div className="top">
                    <img src={'ham.png'} alt="hamburger" className='hamburger' onClick={() => handleMenu()}/>
                        <Link href={'/'}><img src={'/Logo.png'} alt="company_logo" /></Link>
                        <Link href={'/'}><img src={'/logo_spel.png'} alt="company_logo" /></Link>
                        <div className="others_icons">
                            <img src={'/search.png'} alt="search_icon" />
                            <img src={'/like.png'} alt="like_icon" />
                            <img src={'/bag.png'} alt="cart_icon" />
                            <img src={'/profile.png'} alt="user_icon" className='profile' />
                        </div>
                    </div>
                    <div className={`bottom ${menu ? 'active': ''}`}>
                        <img src={'/x.png'} className='close_menu' alt="close icon"  onClick={() => handleMenu()}/>
                        <ul className='menus'>
                            <li className='list_items'>
                                <Link href={'/'}>SHOP</Link>
                            </li>
                            <li className='list_items'>
                                <Link href={'/'}>SKILLS</Link>
                            </li>
                            <li className='list_items'>
                                <Link href={'/'}>STORIES</Link>
                            </li>
                            <li className='list_items'>
                                <Link href={'/'}>ABOUT</Link>
                            </li>
                            <li className='list_items'>
                                <Link href={'/'}>CONTACT US</Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;
