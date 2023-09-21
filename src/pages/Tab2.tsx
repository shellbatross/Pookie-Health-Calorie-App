import React from 'react';

function Tab2(){
    return (<div>
            <h1>Choices</h1>
            Hat color to place on Player One's Head
            <form>
            <div>
                <label>
                <input type="radio" value="Red"/> Red <br />
                </label>

                <label>
                <input type="radio" value="Blue"/> Blue <br />
                </label>
            </div>
            </form>
            <br></br>
            Hat color to place on Player Two's Head
            <div>
                <select>
                    <option value="0">Select color:</option>
                    <option value="1">Red</option>
                    <option value="2">Blue</option>
                </select>
            </div>
    </div>)

}

export default Tab2;