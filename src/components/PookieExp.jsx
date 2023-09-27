import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./PookieExp.scss";
function PookieExp(){
    return(
      <ProgressBar>
      <ProgressBar striped variant="success" now={50} key={1} />
      <ProgressBar variant="warning" now={20} key={2} />
      <ProgressBar striped variant="danger" now={10} key={3} />
    </ProgressBar>
    )
}

export default PookieExp;