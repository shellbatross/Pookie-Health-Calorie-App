import React from "react";
import {Link} from "react-router-dom";

import "./NavBar.scss";
function NavBar(){
    let meow = 1;
    let pookie = [1,2,3,4];

    return(
        <div className="bundle-of-links">
        <Link to = "/tab1" className="first-link"> Tab1</Link>
        <Link to = "/tab2">     Tab2         </Link>
        <Link to = "/tab3">    Tab3    </Link>
        <Link to = "/tab4">    Tab4   </Link>
        <Link to = "/tab5">   Tab5   </Link>
        <Link to = "/tab6">   Tab6</Link>
        <img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" className="pikachu"/>
        </div>
    )

}

export default NavBar;