import React from "react";

import "./CircleProgress.scss";
function CircleProgress(props){

return(
    <div class="progress-bar-container">
  <h2>
    <label for="html">Workout</label>
  </h2>
  <div class="progress-bar-circle html">
    <progress id="html" min="0" max="100" value="92" ></progress>
  </div>
</div>

)
}
export default CircleProgress;