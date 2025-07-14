import React from 'react'
import "./NavBar.css";

function NavBar() {
    return (
        <div>
            <nav className='nav-container'>
                <ul className='nav-menu'>
                    <div>
                        <li><a href='#a'>개요</a></li>
                        <li><a href='#b'>객실</a></li>
                        <li><a href='#c'>서비스 및 부대시설</a></li>
                        <li><a href='#d'>위치</a></li>
                        <li><a href='#e'>리뷰</a></li>
                    </div>
                    <div>
                        <li><span>18,000</span>원~</li>
                        <li><button>객실보기</button></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;