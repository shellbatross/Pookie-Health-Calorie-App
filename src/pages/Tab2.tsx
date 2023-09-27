import React from 'react';

function Tab2(){

     // https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/
     // used for extracting the value of the selected radio button option
    function pressed(a, b) {
        var ele = document.getElementsByName("P1");
        for (var i = 0; i < ele.length; i++) {
            if ((ele[i] as HTMLInputElement).checked)
                document.getElementById("btn").innerHTML
                    = "You chose " + (ele[i] as HTMLInputElement).value + " for P1 and " + (document.getElementById(b) as HTMLInputElement).value + " for P2!";

                // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
                // used for casting to HTMLInputElement
        }
    }


    return (<div>
            <br />
            <h1 className='top-left'>Choices</h1>
            Hat color to place on P1's Head <br />

            <input type="radio" name="P1" value="Red"/> Red <br />
            <input type="radio" name="P1" value="Blue"/> Blue <br />

            <br></br>
            Hat color to place on P2's Head
            <div>
                {/* https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript */}
                {/* used for format of dropdown list */}
                <select id="dropdown">
                    <option value="Unselected">Select color:</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                </select> 
            </div>

            <br></br>
            <button id="btn" type="submit" onClick={() => pressed("radio-btn", "dropdown")}> Press Me! </button>
            {/* https://legacy.reactjs.org/docs/handling-events.html */}
            {/* used for the event handler */}

    </div>)

}

export default Tab2;