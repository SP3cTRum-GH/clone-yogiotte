import React from 'react'
import NavBar from '../components/NavBar'
import OverView from '../components/OverView'
import OverseasCard from "../Overseas-page/OverseasCard";
import OverseasMap from "../Overseas-page/OverseasMap";
import AccommodationIntroduction from '../components/ AccommodationIntroduction'
import Review from '../components/Review';
import LodgingCard from '../main-page/LodgingCard';


const OverseasPage = () => {
    return (
        <div>
            <div style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'white' }}>
                <NavBar />
            </div>
            <hr></hr>
            <OverView />
            <OverseasCard />
            <AccommodationIntroduction />
            <OverseasMap />
            <Review />
            <LodgingCard />
        </div>
    )
}

export default OverseasPage