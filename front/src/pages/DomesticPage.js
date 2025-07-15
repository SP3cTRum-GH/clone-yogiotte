import React from 'react'
import NavBar from '../domestic-page/NavBar'
import OverView from '../domestic-page/OverView'

const DomesticPage = () => {
    return (
        <div>
            <NavBar />
            <hr></hr>
            <OverView />
            <h1 id='b'>객실</h1>
            <h1 id='c'>서비스 및 부대시설</h1>
            <h1 id='d'>위치</h1>
            <h1 id='e'>리뷰</h1>
        </div>
    )
}

export default DomesticPage