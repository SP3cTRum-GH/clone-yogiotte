import React, { useEffect } from 'react'
import "./NavBar.css";

function NavBar() {
    useEffect(() => {
        // 페이지가 처음 로드됐을 때 맨 위로
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // 원하는 만큼 위로 올리기 (예: 80px)
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
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
                    <div className='nav-price'>
                        <li><span>18,000</span>원~</li>
                        <li><button>객실보기</button></li>
                    </div>
                </ul>
            </nav>
        </div >
    )
}

export default NavBar;