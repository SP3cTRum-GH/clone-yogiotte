import React from 'react'
import NavBar from '../domestic-page/NavBar'
import OverView from '../domestic-page/OverView'
import DomesticItemCard from '../domestic-page/DomesticItemCard'
import DomesticMap from '../domestic-page/DomesticMap'
import DomesticIntroduction from '../domestic-page/DomesticIntroduction'
import Review from '../domestic-page/Review'
import OverseasCard from '../components/OverseasCard'

const DomesticPage = () => {
    return (
        <div>
            <NavBar />
            <hr></hr>
            <OverView />
            <DomesticItemCard />
            <br></br>
            <OverseasCard />
            <DomesticIntroduction />
            <DomesticMap />
            <Review />
        </div>
    )
}

export default DomesticPage