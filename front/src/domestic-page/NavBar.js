import React from 'react'
import "./NavBar.css";

function NavBar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div >
            <nav className='nav-container'>
                <ul className='nav-menu'>
                    <div>
                        <li onClick={() => scrollToSection("img-box")}>개요</li>
                        <li onClick={() => scrollToSection("parlor-select")}>객실</li>
                        <li onClick={() => scrollToSection("service-box")}>서비스 및 부대시설</li>
                        <li onClick={() => scrollToSection("position")}>위치</li>
                        <li onClick={() => scrollToSection("real-review")}>리뷰</li>
                    </div>
                    <div>
                        <li><span>18,000</span>원~</li>
                        <li><button>객실보기</button></li>
                    </div>
                </ul>
            </nav>
        </div >
    )
}

export default NavBar;