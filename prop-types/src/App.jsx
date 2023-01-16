import React from "react"
import Card from "./Card"

function App() {
    return (
        <div>
            <Card cardColor="turquoise" height={50} />
            <Card />
            <Card cardColor="rebeccapurple" />
        </div>
    )
}

export default App