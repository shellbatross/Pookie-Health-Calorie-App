import React from "react";

import "./CircleProgress.scss";
function CircleProgress(props){
let x = props.props.info
let circle_label = x[0]
let circle_starter = x[1]

return(
    <div class="progress-bar-container">
   <h2>
    {circle_label}
  </h2>
  <div class={circle_starter}>
    <progress id={circle_label} min="0" max="100" value="92" ></progress>
  </div>
</div>

)
}
export default CircleProgress;