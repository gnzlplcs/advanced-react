import React from "react"
import { withFavoriteNumber } from "./withFavoriteNumber"

function App(props) {
    return (
        <div>{props.favoriteNumber}</div>
    )
}

const FavoriteNumberComponent = withFavoriteNumber(App)

export default FavoriteNumberComponent
