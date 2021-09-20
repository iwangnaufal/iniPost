import React from 'react'
import "../Styles/Heading.css"

function Heading(props) {

    const { logo } = props

    return (
        <div class="header">
            <img class="logoHeader" src={logo}/>    
        </div>
    )
}

export default Heading