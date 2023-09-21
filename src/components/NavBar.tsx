import React from "react";
import {Link} from "react-router-dom";

import "./NavBar.scss";
function NavBar(){
    let meow = 1;
    let pookie = [1,2,3,4];

    return(
        <div className="bundle-of-links">
        <Link to = "/tab1" className="first-link"> Text </Link>
        <Link to = "/tab2">     Choices         </Link>
        <Link to = "/tab3">    ToDo    </Link>
        <Link to = "/tab4">    Profile   </Link>
        <Link to = "/tab5">   Colors   </Link>
        <Link to = "/tab6">   Lower Right</Link>
        </div>
    )

}

export default NavBar;