import React from "react"
import CTA from "./CTA"

function App() {
    return (
        <div>
            <CTA position="right">
                <h1>This is an important CTA</h1>
                <button>Click me now or you'll miss out!</button>
            </CTA>

            <CTA>
                <form>
                    <input type="email" placeholder="Enter email address here"/>
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </CTA>
        </div>
    )
}

export default App