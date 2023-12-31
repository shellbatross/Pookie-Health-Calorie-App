import React, {useState} from 'react';
import "./Tab4.scss"

// source: https://www.w3schools.com/react/react_usestate.asp
function Tab4(){
    const [state, setState] = useState("off");

    function openNotification () {
        setState("on");
    };

    function closeNotification () {
        setState("off");
    };

    // hidden button classname was made first to just make the button invisible
    return (<div>
                <br/>
                <h1 className='top-left'>Profile</h1>
                <button className='hidden-button' onClick={openNotification}>
                    <img src='https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/flushed-face.png' className='blushy-wushy' />
                </button>
                {state == "off" || (
                    <main className="notification">
                        <h1 className='warning-text'> Warning! Do not click on the profile image.</h1>
                        <button onClick={closeNotification}>x</button>
                   </main>
                 )}
                <h1 className='blushy-name'>Blushy J. Blush</h1>
            </div>)

}

export default Tab4;
