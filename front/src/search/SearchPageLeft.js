import Styles from "./searchLeft.module.css"
import Filter from "./SearchPageFilter"

function SearchPageLeft({mapClick}) {
    
    return (
        <div>
            {/**지도 */}
            <div className={Styles.mapwrapper}>
                <div id="map"></div>
                <button className={Styles.overlaybutton} onClick={mapClick}>지도 보기</button>
            </div>
            {/**필터들 */}
            <div>
                <Filter />
            </div>
        </div>
    )
}

export default SearchPageLeft;