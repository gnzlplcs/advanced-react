import React from "react"
import Card from "./Card"
import './App.css'

function App() {
    return (
        <div>
            <Card cardColor="turquoise" height={150} />
            <Card />
            <Card cardColor="rebeccapurple" />
        </div>
    )
}

export default App