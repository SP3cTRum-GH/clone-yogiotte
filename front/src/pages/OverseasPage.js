import React from 'react'
import NavBar from '../components/NavBar'
import OverView from '../components/OverView'
import OverseasCard from "../Overseas-page/OverseasCard";
import OverseasMap from "../Overseas-page/OverseasMap";
import AccommodationIntroduction from '../components/ AccommodationIntroduction'
import Review from '../components/Review';
import LodgingCard from '../main-page/LodgingCard';
import EventCard from '../main-page/EventCard';


const OverseasPage = () => {
    return (
        <div>
            <div style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'white' }}>
                <NavBar />
            </div>
            <hr></hr>
            <OverView />
            <div style={{ width: "1200px", margin: "0 auto", display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                    <OverseasCard />
                    <AccommodationIntroduction />
                </div>
                <div style={{ width: '400px', position: 'sticky', top: 100 }}>
                    <EventCard cardWidth={66} page={4} hidenBtn={true} />
                </div>
            </div>

            <OverseasMap />
            <Review />
            <LodgingCard />
        </div>
    )
}

export default OverseasPage


