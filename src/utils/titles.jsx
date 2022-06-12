import React from "react";
import {Link, renderMatches} from 'react-router-dom'
import "./title.css"

function Title(title){
    return(
        <h3><Link to='/' className="title"> Star Wars Funko </Link></h3>
    )
}

export default Title