import React from "react";
import {Link} from "react-router-dom";

import "./NavBar.scss";
function NavBar(){
    let meow = 1;
    let pookie = [1,2,3,4];

    return(
        <div className="bundle-of-links">
        <Link to = "/tab1" className="first-link"> Text&nbsp;&nbsp;    </Link>
        <Link to = "/tab2">        Choices&nbsp;&nbsp;            </Link>
        <Link to = "/tab3">        ToDo&nbsp;&nbsp;       </Link>
        <Link to = "/tab4">        Profile&nbsp;&nbsp;    </Link>
        <Link to = "/tab5">        Colors&nbsp;&nbsp;    </Link>
        <Link to = "/tab6">        Lower Right</Link>
        <Link to = "/demo">        Static Screenshot</Link>
        </div>
    )

}

export default NavBar;